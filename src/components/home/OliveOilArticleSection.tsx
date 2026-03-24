import styles from './OliveOilArticleSection.module.css'

export function OliveOilArticleSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <h2 className={styles.title}>
          Olive Oil: Liquid Gold of the Mediterranean on Your Table
        </h2>

        <p className={styles.paragraph}>
          Olive oil is more than just an ingredient. It is the soul of Mediterranean cuisine,
          the elixir of longevity, and the result of the painstaking work of farmers passionate
          about their craft. In the VivoOlio catalog, we have compiled a collection of benchmark
          oils, where each bottle tells the story of its region, sun, and land.
        </p>

        <p className={styles.paragraph}>
          <strong>The Art of Selection: Only Extra Virgin Olive Oil.</strong> We do not
          compromise on quality. The core of our collection is <strong>Extra Virgin Olive Oil (EVOO)</strong>
          – the juice of the first cold-pressed olives, preserving the pristine flavor and
          healing power of nature.
        </p>

        <h3 className={styles.subtitle}>
          In our collection, you will find:
        </h3>

        <ul className={styles.list}>
          <li>
            <strong>Single-varietal masterpieces:</strong> The pure taste of a single olive
            variety, allowing you to experience the unique character of the terroir.
          </li>

          <li>
            <strong>Signature Blends:</strong> Complex, multifaceted oils crafted by masters
            for the perfect balance of bitterness and aroma.
          </li>

          <li>
            <strong>Organic Oil (Bio/Organic):</strong> A product born in harmony with nature,
            without the use of pesticides or chemicals.
          </li>

          <li>
            <strong>High-phenolic oils:</strong> True superfoods with powerful antioxidant
            properties for those who view nutrition as an investment in health.
          </li>
        </ul>

        <p className={styles.paragraph}>
          <strong>VivoOlio Guarantee.</strong> Every oil in our marketplace undergoes a
          rigorous selection process: we check acidity, taste tests, and laboratory analysis.
          By purchasing oil here, you choose proven quality, confirmed by experts and our
          global community.
        </p>

      </div>
    </section>
  )
}