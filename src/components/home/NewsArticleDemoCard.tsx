import styles from './NewsArticleDemoCard.module.css'

export function NewsArticleDemoCard() {
  return (
    <article className={styles.card} aria-label="Article card">
      <div className={styles.bg} aria-hidden="true" />

      <div className={styles.tags}>
        <span className={styles.tag}>Agriculture</span>
        <span className={styles.tag}>Farm</span>
      </div>

      <div className={styles.gradientOverlay} aria-hidden="true" />

      <div className={styles.title}>
        EU Moves to Streamline Farm Rules and Help Farmers Compete
      </div>

      <button className={styles.actionBtn} type="button" aria-label="Open">
        <span className={styles.actionIcon} aria-hidden="true" />
      </button>
    </article>
  )
}

