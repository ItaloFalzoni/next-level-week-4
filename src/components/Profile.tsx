import { useContext, useDebugValue } from 'react'
import { AuthenticationContext } from '../contexts/AuthenticationContext'
import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)
  const { userData } = useContext(AuthenticationContext)

  if (userData.length == 0) {
    return
  }

  const login = userData[0]
  const avatar_url = userData[1]

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