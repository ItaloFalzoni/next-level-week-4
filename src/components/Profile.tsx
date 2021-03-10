import { useContext, useDebugValue } from 'react'
import { AuthenticationContext } from '../contexts/AuthenticationContext'
import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)
  const { userLogin, avatarUrl } = useContext(AuthenticationContext)

  return (
    <div className={styles.profileContainer}>
      <img src={avatarUrl} alt={userLogin} />
      <div>
        <strong>{userLogin}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}