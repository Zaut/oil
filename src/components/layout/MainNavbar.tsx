import { useState } from "react"
import styles from './MainNavbar.module.css'

import searchIcon from "../../assets/icons/search.svg"
import compareIcon from "../../assets/icons/compare.svg"
import favoriteIcon from "../../assets/icons/favorite.svg"
import cartIcon from "../../assets/icons/cart.svg"
import userIcon from "../../assets/icons/user.svg"
import arrowIcon from "../../assets/icons/chevron-down.svg"

const languages = [
  'ENG',
  'UKR',
  'РУ',
  'DEU',
  'ESP',
  'ITA',
  'POR',
  'FR',
  'عرب',
  '中文',
  '한',
  '日本語',
]

export function MainNavbar() {
  const [mode, setMode] = useState<'default' | 'language' | 'search'>('default')
  const [currentLanguage, setCurrentLanguage] = useState('ENG')

  const handleLanguageSelect = (lang: string) => {
    setCurrentLanguage(lang)
    setMode('default')
  }

  return (
    <nav className={styles.navbar}>
      {mode === 'search' ? (
        <div className={styles.searchMode}>
          <div className={styles.searchInner}>
            <img src={searchIcon} alt="" className={styles.searchIcon} />

            <input
              className={styles.searchInput}
              placeholder="Search"
              autoFocus
            />

            <button
              className={styles.searchClose}
              type="button"
              onClick={() => setMode('default')}
            >
              ✕
            </button>
          </div>
        </div>
      ) : mode === 'language' ? (
        <div className={styles.languageMode}>
          <div className={styles.languageModeInner}>
            {languages.map((lang) => (
              <button
                key={lang}
                type="button"
                className={`${styles.languageOption} ${
                  currentLanguage === lang ? styles.languageOptionActive : ''
                }`}
                onClick={() => handleLanguageSelect(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className={styles.inner}>
            <div className={styles.left}>
              <button className={styles.category} type="button">
                OIL
              </button>
              <button className={styles.category} type="button">
                COSMETICS
              </button>
              <button className={styles.category} type="button">
                DISHES
              </button>
              <button className={styles.category} type="button">
                DIETARY SUPPLEMENTS
              </button>
            </div>

            <div className={styles.right}>
              <button
                className={styles.iconButton}
                type="button"
                aria-label="Search"
                onClick={() => setMode('search')}
              >
                <img src={searchIcon} alt="" className={styles.icon} />
              </button>

              <button
                className={styles.iconButton}
                type="button"
                aria-label="Compare"
              >
                <img src={compareIcon} alt="" className={styles.icon} />
              </button>

              <button
                className={styles.iconButton}
                type="button"
                aria-label="Favorites"
              >
                <img src={favoriteIcon} alt="" className={styles.icon} />
              </button>

              <button
                className={styles.iconButton}
                type="button"
                aria-label="Cart"
              >
                <img src={cartIcon} alt="" className={styles.icon} />
              </button>

              <button
                className={styles.iconButton}
                type="button"
                aria-label="User"
              >
                <img src={userIcon} alt="" className={styles.icon} />
              </button>

              <button
                className={styles.language}
                type="button"
                onClick={() => setMode('language')}
              >
                <span className={styles.languageCode}>{currentLanguage}</span>
                <img src={arrowIcon} alt="" className={styles.languageArrow} />
              </button>
            </div>
          </div>

          <div className={styles.logo}>
            <span className={styles.logoPartLight}>Vivo</span>
            <span className={styles.logoPartAccent}>Olio</span>
            <span className={styles.logoPartLight}>Market</span>
          </div>
        </>
      )}
    </nav>
  )
}