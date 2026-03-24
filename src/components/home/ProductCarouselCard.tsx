import styles from './ProductCarouselCard.module.css'
import btnCardCream from '../../assets/icons/btnCardCream.svg'
import creamImg from '../../assets/icons/creamImg.svg'


export type ProductCarouselCardProps = {
  title?: string
  description?: string
  categories?: string[]
  activeCategory?: string
  imageAlt?: string
  imageSrc?: string
  onAction?: () => void
}

export function ProductCarouselCard({
  title = 'Thalia Olive Oil Skin Care Cream',
  description =
  'Thalia Olive Oil Skin Care Cream, with 100% olive oil, nourishes your skin and gives a feeling of softness and vitality.',
  categories = ['Organic', 'Gluten-Free', 'Vegan'],
  activeCategory = 'Organic',
  imageAlt = 'Product image placeholder',
  imageSrc,
  onAction,
}: ProductCarouselCardProps) {
  return (
    <article className={styles.card} aria-label={`${title} product card`}>
      <div className={styles.productMedia}>
        <img
          className={styles.productImage}
          src={imageSrc ?? creamImg}
          alt={imageAlt}
        />
      </div>

      <div className={styles.bottomOverlay} aria-hidden="true" />

      <div className={styles.pillsRow} role="group" aria-label="Product categories">
        {categories.map((cat) => {
          const isActive = cat === activeCategory
          return (
            <button
              key={cat}
              type="button"
              className={`${styles.pillBtn} ${isActive ? styles.pillBtnActive : ''}`}
              aria-pressed={isActive}
            >
              {cat}
            </button>
          )
        })}
      </div>

      <button
        className={styles.actionBtn}
        type="button"
        onClick={onAction}
        aria-label="Open product"
      >
        <img
          src={btnCardCream}
          alt=""
          className={styles.actionIcon}
        />
      </button>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.divider} aria-hidden="true" />
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  )
}

