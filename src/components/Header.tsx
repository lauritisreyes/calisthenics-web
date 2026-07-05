import { PLAY_STORE_URL } from '../constants'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.download} href={PLAY_STORE_URL}>
        download
      </a>
    </header>
  )
}
