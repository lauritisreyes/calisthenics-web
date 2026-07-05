import { Link } from 'react-router-dom'
import { CONTACT_EMAIL } from '../constants'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.links}>
        <Link to="/privacy">privacy policy</Link>
        <Link to="/data-deletion">delete your data</Link>
        <a href={`mailto:${CONTACT_EMAIL}`}>contact</a>
      </nav>
    </footer>
  )
}
