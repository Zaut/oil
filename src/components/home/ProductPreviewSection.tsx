import styles from './ProductPreviewSection.module.css'
import oilSkinImg from '../../assets/icons/oilSkin.svg'
import compareIcon from '../../assets/icons/compareIcon.svg'
import heartIcon from '../../assets/icons/heartIcon.svg'

export type ProductPreviewSectionProps = {
  title?: string
  rating?: number
  reviewCount?: number
  availability?: string
  price?: string
  currency?: string
  productCode?: string
  imageSrc?: string
  imageAlt?: string
  /** Applied to the outer <section> wrapper — use to override padding when embedding inside a carousel */
  sectionClassName?: string
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={filled ? styles.starFilled : styles.starEmpty}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.27l-4.94 2.63.94-5.49-4-3.9 5.53-.8L10 1.5z" />
    </svg>
  )
}

function GlobePlaceholder() {
  return (
    <span className={styles.iconPlaceholder} aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" />
        <ellipse cx="8" cy="8" rx="2.8" ry="6.5" stroke="currentColor" strokeWidth="1.4" />
        <line x1="1.5" y1="8" x2="14.5" y2="8" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    </span>
  )
}

function CommentPlaceholder() {
  return (
    <span className={styles.iconPlaceholder} aria-hidden="true">
      <svg width="18" height="16" viewBox="0 0 18 16" fill="none">
        <rect x="1" y="1" width="16" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5 15l2.5-3H9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </span>
  )
}

function CartPlaceholder() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path
        d="M1 1h3l2.4 11h10.2l2-7H6"
        stroke="white"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="18.5" r="1.5" fill="white" />
      <circle cx="16" cy="18.5" r="1.5" fill="white" />
    </svg>
  )
}

// function ComparePlaceholder() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
//       <path d="M9 2v14M4 6l5-5 5 5M4 12l5 5 5-5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   )
// }

// function HeartPlaceholder() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
//       <path
//         d="M9 15.5S2 10.9 2 6.2A4.2 4.2 0 0 1 9 4a4.2 4.2 0 0 1 7 2.2C16 10.9 9 15.5 9 15.5z"
//         stroke="white"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   )
// }

export function ProductPreviewSection({
  title = 'Thalia Olive Oil Skin Care Cream 250 ml',
  rating = 4,
  reviewCount = 97,
  availability = 'All world',
  price = '699 UAH',
  productCode = '000086213',
  imageSrc,
  imageAlt = 'Product image',
  sectionClassName,
}: ProductPreviewSectionProps) {
  const totalStars = 5

  return (
    <section className={`${styles.section}${sectionClassName ? ` ${sectionClassName}` : ''}`} aria-label="Product preview">
      <article className={styles.card}>

      
        <div className={styles.topArea}>
          <div className={styles.topLeft}>
            <h2 className={styles.title}>{title}</h2>

            <div className={styles.ratingRow}>
              <div className={styles.stars} role="img" aria-label={`${rating} out of ${totalStars} stars`}>
                {Array.from({ length: totalStars }).map((_, i) => (
                  <StarIcon key={i} filled={i < rating} />
                ))}
              </div>
              <CommentPlaceholder />
              <span className={styles.reviewCount}>{reviewCount}</span>
            </div>

            <div className={styles.locationRow}>
              <GlobePlaceholder />
              <span className={styles.locationText}>{availability}</span>
            </div>

            <p className={styles.price}>{price}</p>
            <p className={styles.availabilityText}>It is available</p>
          </div>

          <div className={styles.topRight}>
            <button
              className={styles.cartBtn}
              type="button"
              aria-label="Add to cart"
            >
              <CartPlaceholder />
            </button>
            <span className={styles.productCode}>code: {productCode}</span>
          </div>
        </div>

    
        <div className={styles.imageContainer}>
          <div className={styles.sideActions}>
            <button className={styles.sideBtn} type="button" aria-label="Compare product">
              <img src={compareIcon} alt="" className={styles.sideBtnIcon} />
            </button>
            <button className={styles.sideBtn} type="button" aria-label="Add to favourites">
              <img src={heartIcon} alt="" className={styles.sideBtnIcon} />
            </button>
          </div>

          <div className={styles.imageArea}>
            <img
              src={imageSrc ?? oilSkinImg}
              alt={imageAlt}
              className={styles.productImage}
            />
          </div>
        </div>

      </article>
    </section>
  )
}
