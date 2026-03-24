import styles from './StoreButton.module.css'

type StoreButtonProps = {
  icon: string
  title: string
  subtitle?: string
  href?: string
  size?: 'large' | 'small'
}

export function StoreButton({
  icon,
  title,
  subtitle,
  href = '#',
  size = 'large',
}: StoreButtonProps) {
  return (
    <a
      href={href}
      className={`${styles.button} ${
        size === 'small' ? styles.small : styles.large
      }`}
    >
      <img src={icon} alt="" className={styles.icon} />

      <div className={styles.text}>
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        <span className={styles.title}>{title}</span>
      </div>
    </a>
  )
}