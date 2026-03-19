import { CarouselSection } from '../ui/CarouselSection'
import styles from './NewsDemoCarouselSection.module.css'
import { PromoNewsDemoCard } from './PromoNewsDemoCard'
import { NewsArticleDemoCard } from './NewsArticleDemoCard'

type DemoItem = {
  id: string
  variant: 'promo' | 'article'
}

const DEMO_ITEMS: DemoItem[] = [
  { id: '1', variant: 'promo' },
  { id: '2', variant: 'article' },
  { id: '3', variant: 'promo' },
  { id: '4', variant: 'article' },
]

export function NewsDemoCarouselSection() {
  return (
    <section className={styles.section}>
      <CarouselSection
        title="NEWS"
        items={DEMO_ITEMS}
        renderItem={(item) =>
          item.variant === 'promo' ? (
            <PromoNewsDemoCard />
          ) : (
            <NewsArticleDemoCard />
          )
        }
      />
    </section>
  )
}

