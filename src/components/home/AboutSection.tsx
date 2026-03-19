import styles from './AboutSection.module.css'
import aboutOliveOil  from "../../../src/assets/images/about-olive-oil.jpg"

export function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.textColumn}>
          <h2 className={styles.title}>About us</h2>
          <p className={styles.text}>
            With VivoOlio, you&apos;ll learn everything about a product: its
            authenticity, quality, and origin. Olive oil is among the top 10
            most counterfeited products in the world, so choosing wisely is
            crucial. Our tool provides user ratings, sommelier advice, and
            nutritionist recommendations to ensure you always make the right
            choice. VivoOlio is your trusted guide to high-quality, genuine
            olive oil.
          </p>
          <button className={styles.button} type="button">
            Learn more
          </button>
        </div>

        <div className={styles.imageColumn}>
          <div className={styles.imageFrame}>
            <img
              className={styles.image}
              src={aboutOliveOil}
              alt="Bottle of olive oil among olives and trees"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

