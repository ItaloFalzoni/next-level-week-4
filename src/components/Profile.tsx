import { useContext } from 'react'
import { AuthenticationContext } from '../contexts/AuthenticationContext'
import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)
  const { userData } = useContext(AuthenticationContext)

  const [login, avatar_url] = userData

  return (
    <div className={styles.profileContainer}>
      <img src={avatar_url} alt={login} />
      <div>
        <strong>{login}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}