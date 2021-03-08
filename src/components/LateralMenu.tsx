import React, { useContext } from 'react'

import { AuthenticationContext } from '../contexts/AuthenticationContext'
import { NavigationContext } from '../contexts/NavigationContext'

import styles from '../styles/components/LateralMenu.module.css'

export function LateralMenu() {
  const { tabActive, goToHome, goToLeaderboard } = useContext(NavigationContext)
  const { handleLogout } = useContext(AuthenticationContext)

  return (
    <div className={styles.container}>
      <img src="/logo.svg" alt="Logo MoveItalo" />

      <div className={styles.navigationMenu}>
        {tabActive == 'home' ? (
          <>
            <div className={styles.active}>
              <a onClick={goToHome}>
                <img src="/icons/home-active.svg" alt="Home" />
              </a>
            </div>
            <div className={styles.notActive}>
              <a onClick={goToLeaderboard}>
                <img src="/icons/award-no-active.svg" alt="Awards" />
              </a>
            </div>
          </>
        ) : tabActive == 'leaderboard' && (
          <>
            <div className={styles.notActive}>
              <a onClick={goToHome}>
                <img src="/icons/home-no-active.svg" alt="Home" />
              </a>
            </div>
            <div className={styles.active}>
              <a onClick={goToLeaderboard}>
                <img src="/icons/award-active.svg" alt="Awards" />
              </a>
            </div>
          </>
        )}
      </div>
      <a onClick={handleLogout}>
        <img src="/icons/logout.svg" alt="Logout" />
      </a>

    </div>
  )

}