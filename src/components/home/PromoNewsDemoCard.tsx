import styles from './PromoNewsDemoCard.module.css'
import { StoreButton } from '../ui/StoreButton'
import playMarket from '../../assets/icons/play_market.svg'
import appStore from '../../assets/icons/AppStore.svg'

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
         
            <StoreButton
              icon={playMarket}
              subtitle="Завантажити в"
              title="Google Play"
              size="small"
            />
         
          
            <StoreButton
              icon={appStore}
              subtitle="Завантажити в"
              title="App Store"
              size="small"
            />
          
        </div>
      </div>
    </article>
  )
}

