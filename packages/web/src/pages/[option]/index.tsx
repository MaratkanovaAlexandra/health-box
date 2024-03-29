/* eslint-disable promise/prefer-await-to-then */
import { useEffect, useState } from 'react'
import { AddRecord, Layout, LineChart } from '@/components'
import { DoughnutChart } from '@/components/DoughnutChart'
import { Firebase, Records } from '@health-box/common'
import { Box, Container, Paper, Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { styled } from '@mui/material/styles'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Center = styled(Box)(() => ({
  height: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  textAlign: 'center',
  borderRadius: '32px',
}))

const Charts = styled(Box)(() => ({
  display: 'flex',
  gap: '40px',
  marginBottom: '20px',
  // height: '500px',
}))

export default function Option() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const type = router.query.option as string
  useEffect(() => {
    Firebase.getMe()
      .then(() => setLoading(false))
      .catch(() => setLoading(false))
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {loading ? (
          <Center>
            <CircularProgress />
          </Center>
        ) : (
          <Layout>
            <Container maxWidth="xl" sx={{ paddingTop: '20px' }}>
              <Typography variant="h1" sx={{ marginBottom: '20px' }}>
                {Firebase.stats[type].name}
              </Typography>

              <Charts>
                <Item elevation={0} sx={{ maxWidth: '400px', height: '100%' }}>
                  <DoughnutChart
                    title={`${Firebase.stats[type].name} за день`}
                    data={
                      ((Firebase.records.day[type] as Records[]).reduce(
                        (a: number, b: Records) => a + b.value,
                        0,
                      ) *
                        100) /
                      (Firebase.user as any)[`${type}_goal`]
                    }
                  />
                </Item>

                <Item elevation={0} sx={{ width: '100%' }}>
                  <AddRecord type={router.query.option as string} />
                </Item>
              </Charts>

              <Item elevation={0} sx={{ width: '100%', height: '100%' }}>
                <LineChart
                  title={`${Firebase.stats[type].name} за неделю`}
                  today={`${(Firebase.records.day[type] as Records[]).reduce(
                    (a: number, b: Records) => a + b.value,
                    0,
                  )} ${Firebase.stats[type].scale}`}
                  data={Firebase.records.week[type] as number[]}
                />
              </Item>
            </Container>
          </Layout>
        )}
      </main>
    </>
  )
}
