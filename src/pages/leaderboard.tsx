import { Profile } from '../components/Profile'
import styles from '../styles/pages/Leaderboard.module.css'

export default function Leaderboard() {
  return (
    <div className={styles.container}>
      <h1>Leaderboard</h1>

      <div className={styles.userRanking}>
        <div className={styles.rankingHeader}>
          <span>Posição</span>
          <span>Usuário</span>
          <span>Desafios</span>
          <span>Experiência</span>
        </div>

        <div className={styles.userContainer}>
          <div className={styles.positionColumn}>
            <span>1</span>
          </div>
          <div className={styles.contentUserGroup}>
            <div className={styles.profileColumn}>
              <Profile />
            </div>
            <div className={styles.challengesColumn}>
              <span><strong>4</strong> completados</span>
            </div>
            <div className={styles.experiencesColumn}>
              <span><strong>400</strong> xp</span>
            </div>
          </div>
        </div>

        <div className={styles.userContainer}>
          <div className={styles.positionColumn}>
            <span>2</span>
          </div>
          <div className={styles.contentUserGroup}>
            <div className={styles.profileColumn}>
              <Profile />
            </div>
            <div className={styles.challengesColumn}>
              <span><strong>3</strong> completados</span>
            </div>
            <div className={styles.experiencesColumn}>
              <span><strong>300</strong> xp</span>
            </div>
          </div>
        </div>

        <div className={styles.userContainer}>
          <div className={styles.positionColumn}>
            <span>3</span>
          </div>
          <div className={styles.contentUserGroup}>
            <div className={styles.profileColumn}>
              <Profile />
            </div>
            <div className={styles.challengesColumn}>
              <span><strong>2</strong> completados</span>
            </div>
            <div className={styles.experiencesColumn}>
              <span><strong>200</strong> xp</span>
            </div>
          </div>
        </div>

        <div className={styles.userContainer}>
          <div className={styles.positionColumn}>
            <span>4</span>
          </div>
          <div className={styles.contentUserGroup}>
            <div className={styles.profileColumn}>
              <Profile />
            </div>
            <div className={styles.challengesColumn}>
              <span><strong>1</strong> completados</span>
            </div>
            <div className={styles.experiencesColumn}>
              <span><strong>100</strong> xp</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}