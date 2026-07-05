import styles from './Home.module.css'

export function Home() {
  return (
    <section className={styles.hero}>
      <h1>Calisthenics discipline, digitally refined</h1>

      {/*
        Hero video — a light and a dark variant, swapped automatically by CSS
        based on the visitor's theme. Drop the exported files into public/videos/:
          hero-light.webm / hero-light.mp4
          hero-dark.webm  / hero-dark.mp4
        See public/videos/README.md for specs. Until they exist the slot shows
        an empty placeholder.
      */}
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
