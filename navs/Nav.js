import styles from "./Nav.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";

function Nav() {
  return (
    <>
      <section className={styles.section}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src="/images/2.jpg" alt="logo" height={75} width={75} />
            </Link>
          </div>
          <ul className={styles.menu}>
            <Link className={styles.link} href="#services">
              <li>services</li>
            </Link>
            <Link className={styles.link} href="#process">
              <li>process</li>
            </Link>
            <Link className={styles.link} href="#contact">
              <li>contact</li>
            </Link>
            <Link className={styles.link} href="tel:952-923-6385">
              <button className={`btn ${styles.button} btn-hover`}>
                call 952-923-6485
              </button>
            </Link>
            <Link className={styles.phone} href="tel:952-923-6385">
              <FaPhone
                style={{
                  height: "30px",
                  width: "30px",
                  color: "var(--accent)",
                }}
              />
            </Link>
          </ul>
        </nav>
      </section>
    </>
  );
}
export default Nav;
