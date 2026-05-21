// components/footer/footer.js

import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <h2 className={styles.logo}>Thái Anh Thư</h2>
          <p className={styles.desc}>
            Mỹ phẩm makeup chính hãng ✨
            <br />
            Tone hồng ngọt ngào - chuẩn Gen Z 💖
          </p>
        </div>

        <div className={styles.column}>
          <h3>Danh mục</h3>
          <Link href="/">Son môi</Link>
          <Link href="/">Kem nền</Link>
          <Link href="/">Phấn má</Link>
          <Link href="/">Mascara</Link>
        </div>

        <div className={styles.column}>
          <h3>Hỗ trợ</h3>
          <Link href="/">Chính sách đổi trả</Link>
          <Link href="/">Liên hệ</Link>
          <Link href="/">Vận chuyển</Link>
          <Link href="/">FAQ</Link>
        </div>

        <div className={styles.column}>
          <h3>Kết nối</h3>
          <p>📍 Hồ Chí Minh</p>
          <p>📞 0123 456 789</p>
          <p>📧 thaianhthu@gmail.com</p>
        </div>
      </div>

      <div className={styles.bottom}>
        © 2026 Thái Anh Thư Cosmetics. All rights reserved.
      </div>
    </footer>
  );
}