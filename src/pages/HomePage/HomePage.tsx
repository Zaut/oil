import styles from './HomePage.module.css'
import { MainNavbar } from '../../components/layout/MainNavbar'
import { NewsDemoCarouselSection } from '../../components/home/NewsDemoCarouselSection'
import { CosmeticsCarouselSection } from '../../components/home/CosmeticsCarouselSection'
import { AboutSection } from '../../components/home/AboutSection'
import { FunctionsSection } from '../../components/home/FunctionsSection'
import { WhyChooseSection } from '../../components/home/WhyChooseSection'
import { HowToUseSection } from '../../components/home/HowToUseSection'
import { OliveOilArticleSection } from '../../components/home/OliveOilArticleSection'
import { Footer } from '../../components/layout/Footer'




export function HomePage() {
  return (
    <div className={styles.page}>
      <MainNavbar />
      <AboutSection />
      <FunctionsSection />
      <WhyChooseSection />
      <HowToUseSection />
      <NewsDemoCarouselSection />
      <CosmeticsCarouselSection />
      <OliveOilArticleSection />
      <Footer />



      {/* <main className={styles.container}>
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
      </main> */}
    </div>
  )
}

