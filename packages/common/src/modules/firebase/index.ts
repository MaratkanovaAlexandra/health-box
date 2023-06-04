import {
  endOfDay,
  endOfWeek,
  isMonday,
  startOfDay,
  startOfWeek,
} from 'date-fns'
import { FirebaseApp, initializeApp } from 'firebase/app'
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import {
  addDoc,
  and,
  collection,
  doc,
  Firestore,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from 'firebase/firestore'

import { Records, Stat, User } from 'src/index'

export class Firebase {
  static instance: FirebaseApp
  static database: Firestore
  static auth: Auth
  static user: User
  static stats: Record<string, Stat> = {}
  static records: Record<string, Record<string, (number | Records)[]>> = {
    day: {
      calories: [],
      water: [],
      sleep: [],
      sport: [],
    },
    week: {},
  }

  static writeTokenToLocalStorage(token: string) {
    localStorage.setItem('token', token)
  }
  static getTokenFromStorage() {
    return localStorage.getItem('token')
  }

  static connect(firebaseConfig: Record<string, string>) {
    this.instance = initializeApp(firebaseConfig)
    this.database = getFirestore(this.instance)
    this.auth = getAuth(this.instance)
  }

  static async signIn(email: string, password: string) {
    const userCredential = await signInWithEmailAndPassword(
      this.auth,
      email,
      password,
    )
    const data = await getDoc(
      doc(this.database, `users/${userCredential.user.uid}`),
    )
    this.user = data.data() as User
    this.writeTokenToLocalStorage(userCredential.user.uid)
    await this.getInfo()
  }

  static async signUp(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ) {
    const userCredential = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password,
    )
    const users = doc(this.database, `users/${userCredential.user.uid}`)
    this.user = {
      first_name: firstName,
      last_name: lastName,
    }
    await setDoc(users, this.user)
    this.writeTokenToLocalStorage(userCredential.user.uid)
    await this.getInfo()
  }

  static async getInfo() {
    const date = new Date()
    const daysQuery = query(
      collection(this.database, 'records'),
      and(
        where('userId', '==', this.getTokenFromStorage()),
        where('time', '>=', startOfDay(date).getTime()),
        where('time', '<=', endOfDay(date).getTime()),
      ),
    )

    const weekQuery = query(
      collection(this.database, 'records'),
      and(
        where('userId', '==', this.getTokenFromStorage()),
        where('time', '>=', startOfWeek(date, { weekStartsOn: 1 }).getTime()),
        where('time', '<=', endOfWeek(date, { weekStartsOn: 1 }).getTime()),
      ),
    )

    const stats = await getDocs(collection(this.database, 'stats'))

    stats.forEach((stat) => (this.stats[stat.id] = stat.data() as Stat))

    const day = await getDocs(daysQuery)
    this.records.day.calories = []
    this.records.day.water = []
    this.records.day.sleep = []
    this.records.day.sport = []

    day.forEach((doc) => {
      const data = doc.data()
      this.records.day[data.type].push(data as Records)
    })

    const week = await getDocs(weekQuery)

    this.records.week.calories = [0, 0, 0, 0, 0, 0, 0]
    this.records.week.water = [0, 0, 0, 0, 0, 0, 0]
    this.records.week.sleep = [0, 0, 0, 0, 0, 0, 0]
    this.records.week.sport = [0, 0, 0, 0, 0, 0, 0]

    week.forEach((doc) => {
      const data = doc.data()
      this.records.week[data.type][new Date(data.time).getDay() - 1] +=
        data.value
    })
  }

  static async getMe() {
    if (this.user) return
    const uid = this.getTokenFromStorage()
    const user = doc(this.database, `users/${uid}`)
    const data = await getDoc(user)

    this.user = data.data() as User
    await this.getInfo()
  }

  static async postRecord(value: number, type: string) {
    await addDoc(collection(this.database, 'records'), {
      time: Date.now(),
      value,
      type,
      userId: this.getTokenFromStorage(),
    })
  }
}
