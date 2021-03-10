import { useContext } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import Home from './pages/home'
import Leaderboard from './pages/leaderboard'

import { NavigationContext } from './contexts/NavigationContext'
import { LateralMenu } from './components/LateralMenu';
import { ChallengesProvider } from './contexts/ChallengesContext';
import { CountdownProvider } from './contexts/CountdownContext';
import { AuthenticationContext } from './contexts/AuthenticationContext';
import Login from './pages/login';

interface MainProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export default function Router(props: MainProps) {
  const { tabActive } = useContext(NavigationContext)
  const { userData } = useContext(AuthenticationContext)

  return (
    userData.length ? (
      <>
        <LateralMenu />

        <Head>
          <title>Início | move.italo</title>
        </Head>

        <ChallengesProvider
          level={props.level}
          currentExperience={props.currentExperience}
          challengesCompleted={props.challengesCompleted}
        >
          <CountdownProvider>

            {
              tabActive == 'home' ? (
                <Home />
              ) : tabActive == 'leaderboard' && (
                <Leaderboard />
              )
            }

          </CountdownProvider>
        </ChallengesProvider>
      </>
    ) : (
      <Login />
    )
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