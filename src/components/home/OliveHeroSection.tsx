import styles from './OliveHeroSection.module.css'

import oliveHero1 from '../../assets/images/oliveHero1.png'
import oliveHero2 from '../../assets/images/oliveHero2.png'
import oliveHero3 from '../../assets/images/oliveHero3.png'
import oliveHero4 from '../../assets/images/oliveHero4.png'

import dropIcon from '../../assets/icons/drop.svg'
import oliveBranch from '../../assets/images/oliveBranch.png'
import vivoLogo from '../../assets/images/vivoLogo.png'

export function OliveHeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        <div className={styles.heroScene}>
          <div className={styles.slices}>
            <img
              src={oliveHero1}
              alt=""
              className={`${styles.slice} ${styles.slice1}`}
            />
            <img
              src={oliveHero2}
              alt=""
              className={`${styles.slice} ${styles.slice2}`}
            />
            <img
              src={oliveHero3}
              alt=""
              className={`${styles.slice} ${styles.slice3}`}
            />
            <img
              src={oliveHero4}
              alt=""
              className={`${styles.slice} ${styles.slice4}`}
            />
          </div>

          <div className={styles.edibleCard}>
            <div className={styles.edibleIcon}>
              <img src={dropIcon} alt="drop" />
            </div>

            <h3 className={styles.edibleTitle}>
              EDIBLE
              <br />
              OILS
            </h3>

            <p className={styles.edibleText}>
              For daily diet,
              <br />
              cooking and
              <br />
              healthy
              <br />
              eating
            </p>
          </div>

          <div className={styles.cosmeticCard}>
            <h3 className={styles.cosmeticTitle}>
              COSMETIC
              <br />
              OILS
            </h3>

            <p className={styles.cosmeticText}>
              Skin, hair and body care — in its purest form
            </p>
          </div>




          <div className={styles.scanCard}>
            <img src={oliveBranch} alt="" className={styles.scanBranch} />

            <div className={styles.scanContent}>
              <h2 className={styles.scanTitle}>
                Scan and learn all
                <br />
                about <span>olive oil</span>
              </h2>

              <div className={styles.scanBottom}>
                <div className={styles.scanTextBlock}>
                  <p className={styles.scanText}>
                    Ratings and awards, reviews and professional sommelier recommendations,
                    food pairing tips, and nutritionist advice.
                  </p>

                  <a href="#" className={styles.scanLink}>
                    LEARN MORE
                  </a>
                </div>

                <button className={styles.scanButton} type="button">
                  <span className={styles.scanButtonIconWrap}>
                    <img src={vivoLogo} alt="" className={styles.scanButtonIcon} />
                  </span>

                  <span className={styles.scanButtonText}>
                    TRY VIVOOLIO
                    <br />
                    DOWNLOAD THE APP
                  </span>
                </button>
              </div>
            </div>
          </div>



          <div className={styles.bottomContent}>
            <p className={styles.overline}>NATURAL COMPOSITION</p>

            <h1 className={styles.title}>
              A NEW LEVEL NATURAL OILS MARKETPLACE
            </h1>

            <div className={styles.bottomRow}>
              <p className={styles.description}>
                Edible, cosmetic and functional oils —
                <br />
                from trusted manufacturers
              </p>

              <button className={styles.button} type="button">
                Go to the directory
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}