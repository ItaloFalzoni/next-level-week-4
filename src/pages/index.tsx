import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { NavigationProvider } from '../contexts/NavigationContext';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import Router from '../router';
import { LateralMenu } from '../components/LateralMenu';
import { AuthenticationContext, AuthenticationProvider } from '../contexts/AuthenticationContext';
import { useContext, useEffect } from 'react';
import Login from './login';

interface MainProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export default function MainScreen(props: MainProps) {
  const { user } = useContext(AuthenticationContext)

  useEffect(() => console.log(user), [user])

  return (
    <AuthenticationProvider>
      <NavigationProvider>
        {user ? (
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

                <Router />

              </CountdownProvider>
            </ChallengesProvider>
          </>
        ) : (
            <Login />
          )}
      </NavigationProvider>
    </AuthenticationProvider>
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