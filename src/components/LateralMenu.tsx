import React, { useContext, useEffect } from 'react'

import { NavigationContext } from '../contexts/NavigationContext'

import styles from '../styles/components/LateralMenu.module.css'

export function LateralMenu() {
  const { tabActive, goToHome, goToLeaderboard } = useContext(NavigationContext)

  return (
    <div className={styles.container}>
      <div>
        <img src="/logo.svg" alt="Logo MoveItalo" />
      </div>

      { tabActive == 'home' ? (
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
  )

}