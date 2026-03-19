import styles from './FunctionsSection.module.css'
import { FeatureCard } from '../ui/FeatureCard'

const FEATURES = [
  {
    title: 'Product recognition',
    description: 'Scan products to get detailed information instantly',
    icon: '../../../src/assets/icons/bottle.svg',
  },
  {
    title: 'Reviews, ratings, certificates and awards',
    description:
      'Choose the best products using user reviews, ratings, certificates, and awards',

    icon: '../../../src/assets/icons/dock1.svg',
  },
  {
    title: 'Personalized recommendations',
    description:
      'Receive personalized product suggestions based on your preferences and purchase history',
    icon: '../../../src/assets/icons/dock2.svg',
  },
  {
    title: 'Food Pairings',
    description:
      'Discover foods that pair perfectly with different dishes',
    icon: '../../../src/assets/icons/chicken.svg',
  },
  {
    title: 'Your nutritionist in the app',
    description:
      'Get access to personalized nutrition advice and tips right in the app',
    icon: '../../../src/assets/icons/apple.svg',
  },
  {
    title: 'Detailed Ingredients and Specifications',
    description:
      'View detailed ingredients, nutritional information, and product specifications',
    icon: '../../../src/assets/icons/dock3.svg',
  },
] as const

export function FunctionsSection() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>Functions</h2>
      </header>

      <div className={styles.body}>
        <div className={styles.grid}>
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

