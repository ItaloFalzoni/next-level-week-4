import { useContext } from 'react'
import { AuthenticationContext } from '../contexts/AuthenticationContext'
import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)
  const { handleLogout } = useContext(AuthenticationContext)

  return (
    <div className={styles.profileContainer}>
      <a className={styles.logout} onClick={handleLogout}>
        <span>Logout</span>
      </a>

      <img src="https://github.com/italofalzoni.png" alt="Ítalo Falzoni" />
      <div>
        <strong>Ítalo Falzoni</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}