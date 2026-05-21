import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Thái Anh Thư 💖
      </div>

      <nav className={styles.nav}>
        <Link href="/">Trang chủ</Link>
        <Link href="/">Sản phẩm</Link>
        <Link href="/">Khuyến mãi</Link>
        <Link href="/">Liên hệ</Link>
      </nav>
    </header>
  );
}