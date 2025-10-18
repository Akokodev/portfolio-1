"use client"
import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavBar() {

    const pathname = usePathname();

  return (
    <nav className={styles.container}>
        <h2 className={styles.navtitle}>DevMark</h2>

        <div className={styles.navlinks}>
          <Link href='/' className={pathname === '/' ? styles.active : styles.inactive}>Home</Link>
          <Link href='/projects' className={pathname === '/projects' ? styles.active : styles.inactive}>Projects</Link>
          <Link href='/contacts' className={pathname === '/contacts' ? styles.active : styles.inactive}>Contacts</Link>
        </div>
    </nav>
  )
}

export default NavBar