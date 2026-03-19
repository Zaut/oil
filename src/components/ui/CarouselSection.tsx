import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import styles from './CarouselSection.module.css'

export type CarouselSectionProps<T> = {
  title: string
  items: T[]
  renderItem: (item: T) => ReactNode
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

export function CarouselSection<T>({
  title,
  items,
  renderItem,
}: CarouselSectionProps<T>) {
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const hasItems = items.length > 0

  const itemStepPx = useMemo(() => {
    if (typeof window === 'undefined') return 420
    if (window.innerWidth <= 640) return Math.round(window.innerWidth * 0.86) + 18
    if (window.innerWidth <= 900) return 340
    return 420
  }, [])

  const measureStepPx = () => {
    const scroller = scrollerRef.current
    if (!scroller) return itemStepPx

    const first = scroller.querySelector<HTMLElement>(
      `[data-carousel-item="true"]`
    )
    if (!first) return itemStepPx

    const second = scroller.querySelector<HTMLElement>(
      `[data-carousel-item="true"]:nth-child(2)`
    )

    if (second) {
      const step = second.offsetLeft - first.offsetLeft
      if (Number.isFinite(step) && step > 0) return step
    }

    return first.getBoundingClientRect().width || itemStepPx
  }

  const updateArrowState = () => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const tolerance = 2
    const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth
    const current = scroller.scrollLeft

    setCanScrollLeft(current > tolerance)
    setCanScrollRight(current < maxScrollLeft - tolerance)
  }

  const scrollByItems = (dir: -1 | 1) => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const step = measureStepPx()
    const next = scroller.scrollLeft + dir * step
    const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth

    scroller.scrollTo({
      left: clamp(next, 0, Math.max(0, maxScrollLeft)),
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    updateArrowState()

    const scroller = scrollerRef.current
    if (!scroller) return

    const onScroll = () => updateArrowState()
    scroller.addEventListener('scroll', onScroll, { passive: true })

    const onResize = () => updateArrowState()
    window.addEventListener('resize', onResize)

    return () => {
      scroller.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [items.length, itemStepPx])

  return (
    <section className={styles.section} aria-label={title}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.actions}>
          <button
            className={styles.arrowBtn}
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollByItems(-1)}
            disabled={!canScrollLeft}
          >
            <span className={styles.arrowLeft} aria-hidden="true" />
          </button>
          <button
            className={styles.arrowBtn}
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollByItems(1)}
            disabled={!canScrollRight}
          >
            <span className={styles.arrowRight} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div ref={scrollerRef} className={styles.scroller} role="region">
        <div className={styles.track}>
          {hasItems
            ? items.map((item, idx) => (
                <div
                  key={idx}
                  data-carousel-item="true"
                  className={styles.item}
                >
                  {renderItem(item)}
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  )
}

export function CarouselSectionExample() {
  const items = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    label: `Item ${i + 1}`,
  }))

  return (
    <CarouselSection
      title="NEWS"
      items={items}
      renderItem={(item) => (
        <div className={styles.demoCard}>
          <div className={styles.demoIcon} aria-hidden="true" />
          <div className={styles.demoLabel}>{item.label}</div>
        </div>
      )}
    />
  )
}

