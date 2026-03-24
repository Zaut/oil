import styles from './NewsArticleDemoCard.module.css'
import { CircleArrowButton } from '../ui/CircleArrowButton'
import farmImage from '../../assets/images/backgroundNews2.png'

export function NewsArticleDemoCard() {
  return (
    <article className={styles.card} aria-label="Article card">
      <div
        className={styles.bg}
        style={{ backgroundImage: `url(${farmImage})` }}
        aria-hidden="true"
      />

      <div className={styles.tags}>
        <span className={styles.tag}>Agriculture</span>
        <span className={styles.tag}>Farm</span>
      </div>

      <div className={styles.title}>
        EU Moves to Streamline Farm Rules and Help Farmers Compete
      </div>

      <div className={styles.actionBtn}>
        <CircleArrowButton variant="light" ariaLabel="Open article" />
      </div>
    </article>
  )
}