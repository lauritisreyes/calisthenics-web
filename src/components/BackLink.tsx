import { Link } from 'react-router-dom'
import styles from './BackLink.module.css'

export function BackLink() {
  return (
    <Link to="/" className={styles.back}>
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          d="M15 18l-6-6 6-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      home
    </Link>
  )
}
