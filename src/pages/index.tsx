import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { NavigationProvider } from '../contexts/NavigationContext';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import styles from '../styles/pages/Home.module.css'
import Router from './router';
import { LateralMenu } from '../components/LateralMenu';

interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  return (
    <NavigationProvider>
      <LateralMenu />

      <Head>
        <title>Início | move.italo</title>
      </Head>

      <div className={styles.container}>
        <ChallengesProvider
          level={props.level}
          currentExperience={props.currentExperience}
          challengesCompleted={props.challengesCompleted}
        >
          <CountdownProvider>

            <Router />

          </CountdownProvider>
        </ChallengesProvider>
      </div>
    </NavigationProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}