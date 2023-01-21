import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const id = "1U-jY5w6WV-5p7iEpHELXdGmetsoT4RYG"
  return (
    <>
     <Image src={`https://drive.google.com/uc?export=view&id=${id}`} alt="testing" height={200} width={200}></Image>
    </>
  )
}
