export interface User {
  first_name: string
  last_name: string
  calories_goal?: number
  water_goal?: number
  sleep_goal?: number
  sport_goal?: number
}

export interface Stat {
  name: string
  scale: string
}

export interface Records {
  time: number
  value: number
  type: string
  userId: string
}
