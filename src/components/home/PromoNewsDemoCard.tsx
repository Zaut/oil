import styles from './PromoNewsDemoCard.module.css'

export function PromoNewsDemoCard() {
  return (
    <article className={styles.card} aria-label="Promo card">
      <div className={styles.bg} aria-hidden="true" />

      <div className={styles.title}>
        TRY <span className={styles.green}>VivoOlio</span> TODAY!
      </div>

      <div className={styles.bottom}>
        <div className={styles.promoText}>
          Download the app and enjoy <span className={styles.highlight}>high-quality</span>{' '}
          olive oil.
        </div>

        <div className={styles.storeRow}>
          <div className={styles.storeBtn} role="button" tabIndex={0}>
            <span className={styles.storeIcon} aria-hidden="true" />
            Google Play
          </div>
          <div className={styles.storeBtn} role="button" tabIndex={0}>
            <span className={styles.storeIcon} aria-hidden="true" />
            App Store
          </div>
        </div>
      </div>
    </article>
  )
}

