import styles from "@/styles/Header.module.css";
import Link from "next/link";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a> Events </a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a> Events </a>
            </Link>
          </li>

          <li>
            <Link href="/account/login">
              <a> Login </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
