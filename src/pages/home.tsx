import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";


export default function Home() {
  return (
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
  )
}