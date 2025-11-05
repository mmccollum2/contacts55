import Link from "next/link"
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.logo}>MyRolodex</h1>
        <p className={styles.tagline}>Your contacts, synced privately across every device.</p>
        <Link href="/login" className={styles.button}>
          Admin Login
        </Link>
      </div>
    </main>
  )
}
