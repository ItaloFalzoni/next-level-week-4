import { useContext } from 'react';

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";

import { NavigationContext } from '../contexts/NavigationContext';

export default function Router() {
  const { tabActive } = useContext(NavigationContext)

  return (
    tabActive == 'home' ? (
      <section>
        <ExperienceBar />
        <div>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </div>
      </section>
    ) : tabActive == 'leaderboard' && (
      <section>

      </section>
    )
  )
}