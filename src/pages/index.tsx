import Head from 'next/head'
import { useContext, useEffect } from 'react';
import { GetServerSideProps } from 'next'

import { LateralMenu } from '../components/LateralMenu';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";

import { NavigationContext, NavigationProvider } from '../contexts/NavigationContext';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import styles from '../styles/pages/Home.module.css'

interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  const { tabActive } = useContext(NavigationContext)

  useEffect(() => {
    console.log(tabActive)
  }, [tabActive])

  return (
    <NavigationProvider>
      <LateralMenu />

      <Head>
          <title>Início | move.italo</title>
      </Head>

      <div className={styles.container}>
        {
          tabActive == 'leaderboard' ? (
            <div></div>
          ) : (
            <ChallengesProvider
              level={props.level}
              currentExperience={props.currentExperience}
              challengesCompleted={props.challengesCompleted}
            >
              <ExperienceBar />
  
              <CountdownProvider>
                <section>
                  <div>
                    <Profile />
                    <CompletedChallenges />
                    <Countdown />
                  </div>
                  <div>
                    <ChallengeBox />
                  </div>
                </section>
              </CountdownProvider>
            </ChallengesProvider>
          )
        }
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