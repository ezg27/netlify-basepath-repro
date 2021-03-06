import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Home</h1>
        <Image src='/vercel.svg' alt='vercel logo' />
      </main>
    </div>
  )
}
