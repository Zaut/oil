import styles from './FeatureCard.module.css'

export type FeatureCardProps = {
  title: string
  description: string
  icon: string
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <article className={styles.card}>
      <img
        src={icon}
        alt=""
        className={styles.icon}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  )
}

