import styles from './Home.module.css'

export function Home() {
  return (
    <section className={styles.hero}>
      <h1>Calisthenics discipline, digitally refined</h1>
      <div className={styles.media}>
        <video className={styles.videoLight} autoPlay loop muted playsInline aria-label="Palo app preview">
          <source src="videos/hero-light.webm" type="video/webm" />
          <source src="videos/hero-light.mp4" type="video/mp4" />
        </video>
        <video className={styles.videoDark} autoPlay loop muted playsInline aria-label="Palo app preview">
          <source src="videos/hero-dark.webm" type="video/webm" />
          <source src="videos/hero-dark.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
