import styles from './Home.module.css'

export function Home() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.wordmark} aria-label="Palo">PAL0</h1>
      <p className={styles.tagline}>Calisthenics discipline, digitally refined</p>
    </section>
  )
}
