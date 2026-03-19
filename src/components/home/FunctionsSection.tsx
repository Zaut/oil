import styles from './FunctionsSection.module.css'
import { FeatureCard } from '../ui/FeatureCard'

import bottleIcon from '../../assets/icons/bottle.svg'
import dock1Icon from '../../assets/icons/dock1.svg'
import dock2Icon from '../../assets/icons/dock2.svg'
import chickenIcon from '../../assets/icons/chicken.svg'
import appleIcon from '../../assets/icons/apple.svg'
import dock3Icon from '../../assets/icons/dock3.svg'

const FEATURES = [
  {
    title: 'Product recognition',
    description: 'Scan products to get detailed information instantly',
    icon: bottleIcon,
  },
  {
    title: 'Reviews, ratings, certificates and awards',
    description:
      'Choose the best products using user reviews, ratings, certificates, and awards',
    icon: dock1Icon,
  },
  {
    title: 'Personalized recommendations',
    description:
      'Receive personalized product suggestions based on your preferences and purchase history',
    icon: dock2Icon,
  },
  {
    title: 'Food Pairings',
    description:
      'Discover foods that pair perfectly with different dishes',
    icon: chickenIcon,
  },
  {
    title: 'Your nutritionist in the app',
    description:
      'Get access to personalized nutrition advice and tips right in the app',
    icon: appleIcon,
  },
  {
    title: 'Detailed Ingredients and Specifications',
    description:
      'View detailed ingredients, nutritional information, and product specifications',
    icon: dock3Icon,
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

