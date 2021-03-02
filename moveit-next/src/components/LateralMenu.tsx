import React, { useContext } from 'react'

import { NavigationContext } from '../contexts/NavigationContext'

import styles from '../styles/components/LateralMenu.module.css'

export function LateralMenu() {
  const { tabActive, goToHome, goToLeaderboard } = useContext(NavigationContext)

  return (
    <div className={styles.container}>
      <div>
        <img src="/logo.svg" alt="Logo MoveItalo" />
      </div>
      <div className={tabActive == 'home' ? styles.active : styles.notActive}>
        <button onClick={goToHome}>
          <img src="/icons/home-active.svg" alt="Home" />
        </button>
      </div>

      <div className={tabActive == 'leaderboard' ? styles.active : styles.notActive}>
        <button onClick={goToLeaderboard}>
          <img src="/icons/award-active.svg" alt="Awards" />
        </button>
      </div>

    </div>
  )

}