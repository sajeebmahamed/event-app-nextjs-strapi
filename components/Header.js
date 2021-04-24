import styles from "@/styles/Header.module.css";
import AuthContext from "context/AuthContext";
import Link from "next/link";
import { useContext } from "react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
export default function Header() {
  const { user, logout } = useContext(AuthContext);
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
          {/* 
          <li>
            <Link href="/account/login">
              <a> Login </a>
            </Link>
          </li> */}
          {user ? (
            // If logged in
            <>
              <li>
                <Link href="/events/add">
                  <a>Add Event</a>
                </Link>
              </li>
              <li>
                <Link href="/account/dashboard">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => logout()}
                  className="btn-secondary btn-icon"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </>
          ) : (
            // If logged out
            <>
              <li>
                <Link href="/account/login">
                  <a className="btn-secondary btn-icon">
                    <FaSignInAlt /> Login
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
