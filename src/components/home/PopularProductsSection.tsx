import { CarouselSection } from '../ui/CarouselSection'
import { ProductPreviewSection, type ProductPreviewSectionProps } from './ProductPreviewSection'
import styles from './PopularProductsSection.module.css'

import oilSkinImage from '../../assets/images/oilSkin.png'
import oilBottleImage from '../../assets/images/faceOil.png'
import tyroOilImage from '../../assets/images/tyro.png'

const demoProducts: ProductPreviewSectionProps[] = [
  {
    title: 'Thalia Olive Oil Skin Care Cream 250 ml',
    rating: 4,
    reviewCount: 97,
    availability: 'All world',
    price: '699 UAH',
    productCode: '000086213',
    imageSrc: oilSkinImage,
  },
  {
    title: 'Olitox Lift face oil Olivella',
    rating: 5,
    reviewCount: 97,
    availability: 'All world',
    price: '499 UAH',
    productCode: '000086214',
    imageSrc: oilBottleImage,
  },
  {
    title: 'Tyro Beauty Oil 30ml',
    rating: 3,
    reviewCount: 97,
    availability: 'Nederland',
    price: '699 UAH',
    productCode: '000086215',
    imageSrc: tyroOilImage,
  },
  {
    title: 'Olitox Lift face oil',
    rating: 4,
    reviewCount: 97,
    availability: 'All world',
    price: '499 UAH',
    productCode: '000086216',
    imageSrc: oilBottleImage,
  },
]

export function PopularProductsSection() {
  return (
    <div className={styles.wrapper}>
      <CarouselSection
        title="Popular products"
        items={demoProducts}
        renderItem={(item) => (
          <ProductPreviewSection {...item} sectionClassName={styles.cardInCarousel} />
        )}
      />
    </div>
  )
}
