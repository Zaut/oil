import styles from './WhyChooseSection.module.css'
import timeIcon from "../../assets/icons/time.svg"
import assuranceIcon from "../../assets/icons/assurance.svg"
import adviceIcon from "../../assets/icons/advice.svg"
import expertIcon from "../../assets/icons/expert.svg"


const BENEFITS = [
  {
    title: 'SAVE TIME',
    description: 'choose your oil in seconds',
    icon: timeIcon,
  },
  {
    title: 'QUALITY ASSURANCE',
    description: 'only verified data',
    icon: assuranceIcon,
  },
  {
    title: 'PERSONALIZED ADVICE',
    description: 'perfect for your goals',
    icon: adviceIcon,
  },
  {
    title: 'ACCESS TO EXPERT KNOWLEDGE',
    description: 'sommeliers and nutritionists in your pocket',
    icon: expertIcon,
  },
] as const

export function WhyChooseSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Why choose VivoOlio?</h2>

        <div className={styles.grid}>
          {BENEFITS.map((item) => (
            <div key={item.title} className={styles.item}>
              <img
                src={item.icon}
                alt=""
                className={styles.icon}
              />
              <div className={styles.text}>
                <div className={styles.itemTitle}>{item.title}</div>
                <div className={styles.itemDescription}>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

