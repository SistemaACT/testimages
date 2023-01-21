import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const id = "1q8Mw8TkWLsWE7-JB_rMmYVx0N0ijJH8c"
  return (
    <>
    changed
     <Image src={`https://drive.google.com/uc?id=${id}`} alt="testing" height={200} width={200}></Image>
    </>
  )
}
