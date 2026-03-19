import styles from './HowToUseSection.module.css'

import phone1Icon from '../../assets/icons/phone1.svg'
import phone2Icon from '../../assets/icons/phone2.svg'
import phone3Icon from '../../assets/icons/phone3.svg'
import phone4Icon from '../../assets/icons/phone4.svg'


const STEPS = [
  {
    description: 'Download the application',
    icon: phone1Icon,
  },
  {
    description: 'Scan the bottle',
    icon: phone2Icon,
  },
  {
    description: 'Get detailed information and advice',
    icon: phone3Icon,
  },
  {
    description: 'Choose the best oil and enjoy',
    icon: phone4Icon,
  },
] as const

export function HowToUseSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>HOW TO USE VIVOOILIO?</h2>

        <div className={styles.grid}>
          {STEPS.map((step) => (
            <div key={step.description} className={styles.step}>
                 <img
                src={step.icon}
                alt=""
                className={styles.icon}
              />
              <p className={styles.description}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

