import styles from './MainNavbar.module.css'

export function MainNavbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <button className={styles.category} type="button">
            OIL
          </button>
          <button className={styles.category} type="button">
            COSMETICS
          </button>
          <button className={styles.category} type="button">
            DISHES
          </button>
          <button className={styles.category} type="button">
            DIETARY SUPPLEMENTS
          </button>
        </div>

        <div className={styles.right}>
          <button
            className={styles.iconButton}
            type="button"
            aria-label="Search"
          >
            <span className={styles.icon} />
          </button>
          <button
            className={styles.iconButton}
            type="button"
            aria-label="Compare"
          >
            <span className={styles.icon} />
          </button>
          <button
            className={styles.iconButton}
            type="button"
            aria-label="Favorites"
          >
            <span className={styles.icon} />
          </button>
          <button
            className={styles.iconButton}
            type="button"
            aria-label="Cart"
          >
            <span className={styles.icon} />
          </button>
          <button
            className={styles.iconButton}
            type="button"
            aria-label="User"
          >
            <span className={styles.icon} />
          </button>

          <button className={styles.language} type="button">
            <span className={styles.languageCode}>ENG</span>
            <span className={styles.languageArrow} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className={styles.logo}>
        <span className={styles.logoPartLight}>Vivo</span>
        <span className={styles.logoPartAccent}>Olio</span>
        <span className={styles.logoPartLight}>Market</span>
      </div>
    </nav>
  )
}

