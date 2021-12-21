/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import firebaseConfig from '../utils/firebaseConfig'
import { getDatabase } from "firebase/database"
import { initializeApp } from '@firebase/app'
import QuestionFeed from '../components/questionFeed'

export default function Home() {
  const app = initializeApp(firebaseConfig)
  const db = getDatabase(app)

  return (
    <div>
      <Head>
        <title>Virtual Guess Who</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

      <QuestionFeed db={db} />
    </div>
  )
}
