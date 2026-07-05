import { BackLink } from '../components/BackLink'
import styles from '../components/LegalPage.module.css'

export function DataDeletion() {
  return (
    <div className={styles.wrapper}>
      <BackLink />
      <h1>Delete Your Data</h1>
      <p className={styles.updated}>Last updated: July 4, 2026</p>

      <p>
        You can request deletion of your Palo account and all data associated with it
        at any time, whether or not you still have the app installed.
      </p>

      <h2>Option 1 — In the app</h2>
      <p>
        Open Palo, go to <strong>Settings → My data → Delete account</strong>, and
        confirm. This immediately and permanently removes your workouts, goals, and
        profile information (name, email, avatar) from our servers.
      </p>

      <h2>Option 2 — By email</h2>
      <p>
        If you no longer have the app installed, send a deletion request from the
        email address associated with your account to{' '}
        <a href="mailto:laura.reyessb@gmail.com">laura.reyessb@gmail.com</a> with the
        subject “Delete my Palo account”. We'll confirm once your data has been
        removed, usually within a few days.
      </p>

      <h2>What gets deleted</h2>
      <ul>
        <li>All workouts you've logged.</li>
        <li>All goals you've created.</li>
        <li>Your profile information (name, email, avatar URL).</li>
      </ul>

      <h2>What isn't affected</h2>
      <p>
        Videos and photos recorded in the app were never uploaded to our servers —
        they live only in your device's gallery. Deleting your account has no effect
        on them; you can remove them yourself from your device at any time.
      </p>
    </div>
  )
}
