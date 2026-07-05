import { Link } from 'react-router-dom'
import styles from '../components/LegalPage.module.css'

export function PrivacyPolicy() {
  return (
    <div className={styles.wrapper}>
      <h1>Privacy Policy</h1>
      <p className={styles.updated}>Last updated: July 4, 2026</p>

      <p>
        Palo (“the app”) is developed by Laura Reyes. This policy explains what data
        the app collects, why, and how you can remove it.
      </p>

      <h2>Data we collect</h2>
      <p>When you sign in with Google, we store on our servers (Supabase):</p>
      <ul>
        <li>Your name, email address, and avatar URL, as provided by Google Sign-In.</li>
        <li>
          Your workouts: the date and a text description of the exercises you logged.
        </li>
        <li>Your goals: their description and completion date.</li>
      </ul>
      <p>
        This data is stored so your progress stays in sync across devices. It is
        associated with your account and is not shared with third parties or used for
        advertising.
      </p>

      <h2>Data that stays on your device</h2>
      <p>
        Videos and photos you record in the app are <strong>never uploaded</strong> —
        they are saved only to your device's gallery. Pose and gesture detection runs
        entirely on-device; no camera footage leaves your phone.
      </p>

      <h2>Authentication</h2>
      <p>
        We use Google Sign-In (OAuth) to authenticate you. We don't receive or store
        your Google password.
      </p>

      <h2>Data retention and deletion</h2>
      <p>
        You can permanently delete your account and all associated cloud data
        (workouts, goals, and profile info) at any time from Settings → My data →
        Delete account inside the app. See our{' '}
        <Link to="/data-deletion">data deletion page</Link> for details and an
        alternative way to request deletion if you no longer have the app installed.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy or your data can be sent to{' '}
        <a href="mailto:laura.reyessb@gmail.com">laura.reyessb@gmail.com</a>.
      </p>
    </div>
  )
}
