import styles from './Footer.module.css'
import { StoreButton } from '../ui/StoreButton'

import visaIcon from '../../assets/icons/Visa.svg'
import mastercardIcon from '../../assets/icons/MasterCard.svg'
import applePayIcon from '../../assets/icons/ApplePay.svg'
import gPayIcon from '../../assets/icons/GooglePay.svg'

import googlePlayIcon from '../../assets/icons/play_market.svg'
import appStoreIcon from '../../assets/icons/AppStore.svg'

import facebookIcon from '../../assets/icons/Facebook.svg'
import youtubeIcon from '../../assets/icons/YouTube.svg'
import instagramIcon from '../../assets/icons/Instagram.svg'
import tiktokIcon from '../../assets/icons/TikTok.svg'


const categories = ['OIL', 'COSMETICS', 'DISHES', 'DIETARY SUPPLEMENTS']

const footerLinks = [
  'About us',
  'Contacts',
  'News blog',
  'Term of sale',
  'Privacy policy',
  'Term of use',
  'Current policy',
]

const paymentMethods = [
  { name: 'VISA', icon: visaIcon },
  { name: 'Mastercard', icon: mastercardIcon },
  { name: 'Apple Pay', icon: applePayIcon },
  { name: 'G Pay', icon: gPayIcon },
]
const socialMedia = [
  { name: 'Facebook', icon: facebookIcon },
  { name: 'YouTube', icon: youtubeIcon },
  { name: 'Instagram', icon: instagramIcon },
  { name: 'TikTok', icon: tiktokIcon },
]


export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.leftTop}>
            <p className={styles.brand}>VivoOlio</p>
            <nav aria-label="Footer categories">
              <ul className={styles.categoryList}>
                {categories.map((category) => (
                  <li key={category}>
                    <a href="#" className={styles.categoryLink}>
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <nav className={styles.rightTop} aria-label="Footer site links">
            {footerLinks.map((link) => (
              <a key={link} href="#" className={styles.footerLink}>
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.leftBottom}>
            <div className={styles.paymentRow} aria-label="Payment methods">
              {paymentMethods.map((method) => (
                <img
                  key={method.name}
                  src={method.icon}
                  alt={method.name}
                  className={styles.paymentIcon}
                />
              ))}
            </div>

            <div className={styles.storeButtons}>
              <StoreButton
                size="small"
                icon={googlePlayIcon}
                subtitle="Завантажити в"
                title="Google Play"
                href="#"
              />
              <StoreButton
                size="small"
                icon={appStoreIcon}
                subtitle="Завантажити в"
                title="App Store"
                href="#"
              />
            </div>
          </div>

          <div className={styles.socialArea}>
            <p className={styles.socialTitle}>SOCIAL MEDIAS</p>
            <div className={styles.socialRow} aria-label="Social media links">
              {socialMedia.map((item) => (
                <a key={item.name} href="#" className={styles.socialLink} aria-label={item.name}>
                  <img src={item.icon} alt={item.name} className={styles.socialIcon} />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.copyrightArea}>
            <p className={styles.copyMain}>©VivoOlio 2024</p>
            <p className={styles.copySecondary}>Усі права захищені</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
