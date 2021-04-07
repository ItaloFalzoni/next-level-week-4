import { useContext } from 'react';
import Head from 'next/head';

import Home from './pages/home'
import Leaderboard from './pages/leaderboard'
import Login from './pages/login';

import { NavigationContext } from './contexts/NavigationContext'
import { LateralMenu } from './components/LateralMenu';
import { ChallengesProvider } from './contexts/ChallengesContext';
import { CountdownProvider } from './contexts/CountdownContext';
import { AuthenticationContext } from './contexts/AuthenticationContext';

interface MainProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number,
}

export function Router(props: MainProps) {
  const { tabActive } = useContext(NavigationContext)
  const { isAuthenticated } = useContext(AuthenticationContext)

  return (
    isAuthenticated ? (
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