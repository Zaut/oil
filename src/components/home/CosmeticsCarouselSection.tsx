import { CarouselSection } from '../ui/CarouselSection'
import styles from './CosmeticsCarouselSection.module.css'
import { ProductCarouselCard } from './ProductCarouselCard'
import type { ProductCarouselCardProps } from './ProductCarouselCard'

const demoProducts: ProductCarouselCardProps[] = [{}, {}, {}, {}]

export function CosmeticsCarouselSection() {
  return (
    <section className={styles.section}>
      <CarouselSection
        title="Cosmetics"
        items={demoProducts}
        renderItem={(item) => <ProductCarouselCard {...item} />}
      />
    </section>
  )
}

