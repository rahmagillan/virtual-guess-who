import Head from 'next/head'
import firebaseConfig from '../utils/firebaseConfig'
import { getDatabase } from "firebase/database"
import { initializeApp } from '@firebase/app'

export default function Home() {
  const app = initializeApp(firebaseConfig)
  const db = getDatabase(app)

  return (
    <div>
      <Head>
        <title>Virtual Guess Who</title>
      </Head>
    </div>
  )
}
