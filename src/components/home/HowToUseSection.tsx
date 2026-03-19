import styles from './HowToUseSection.module.css'

const STEPS = [
  { description: 'Download the application',
    icon: "../../../src/assets/icons/phone1.svg",
   },
  { description: 'Scan the bottle' ,
    icon: "../../../src/assets/icons/phone2.svg",
  },
  { description: 'Get detailed information and advice',
    icon: "../../../src/assets/icons/phone3.svg",
   },
  { description: 'Choose the best oil and enjoy',
    icon: "../../../src/assets/icons/phone4.svg",
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

