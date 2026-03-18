import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <div className={styles.page}>
      <main className={styles.container}>
        <div className={styles.sections}>
          <section className={styles.section}>
            <h1 className={styles.h1}>Home</h1>
            <p className={styles.p}>
              Базовый layout: светлый фон, ограничение по ширине, вертикальные
              секции и аккуратные отступы.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Секция 1</h2>
            <p className={styles.p}>Контент будет здесь.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Секция 2</h2>
            <p className={styles.p}>Контент будет здесь.</p>
          </section>
        </div>
      </main>
    </div>
  )
}

