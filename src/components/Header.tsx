import { Link } from 'react-router-dom'
import { PLAY_STORE_URL } from '../constants'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
        <img src="logo.png" alt="Palo" />
      </Link>
      <a className={styles.download} href={PLAY_STORE_URL}>
        download
      </a>
    </header>
  )
}
