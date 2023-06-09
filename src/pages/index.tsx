import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Product Catalog App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Next.js Product Catalog App
          </p>
          <div>
            <a
              href="https://data-masher.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              DataMasher{' '}
              <Image
                src="/logo.png"
                alt="Vercel Logo"
                width={50}
                height={50}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          Please check all the assignment details in the README.md file/section.
        </div>

        <div>
        </div>
      </main>
    </>
  )
}
