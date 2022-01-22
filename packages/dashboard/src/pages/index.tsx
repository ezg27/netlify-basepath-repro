import Head from 'next/head'
import Image from 'next/image'

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Dashboard</h1>
        <Image src="/vercel.svg" alt="vercel logo" />
      </main>
    </div>
  )
}
