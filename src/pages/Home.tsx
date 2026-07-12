import styles from './Home.module.css'

export function Home() {
  return (
    <section className={styles.hero}>
      <img
        className={styles.logo}
        src={`${import.meta.env.BASE_URL}logo.svg`}
        alt="Palo"
        width={512}
        height={512}
      />
      <p className={styles.tagline}>Calisthenics discipline, digitally refined</p>
    </section>
  )
}
