import styles from './Home.module.css'

export function Home() {
  return (
    <section className={styles.hero}>
      <img
        className={styles.image}
        src={`${import.meta.env.BASE_URL}hand-stand-calendar.png`}
        alt="Palo"
        width={512}
        height={512}
      />
      <p className={styles.tagline}>Calisthenics discipline, digitally refined</p>
    </section>
  )
}
