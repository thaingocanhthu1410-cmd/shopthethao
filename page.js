import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";

export default function Home() {
  // 1. Dữ liệu sản phẩm Makeup 
  const products = [
    { id: 0, img: "/makeup_lip_01.jpg", name: "Son kem lì mịn môi Merzy Soft Touch", price: "185.000đ", old: "250.000đ", remain: 25, total: 50 },
    { id: 1, img: "/makeup_cushion_02.jpg", name: "Phấn nước che phủ hoàn hảo Laneige Neo Cushion", price: "450.000đ", old: "590.000đ", remain: 12, total: 30 },
    { id: 2, img: "/makeup_foundation_03.jpg", name: "Kem nền kiềm dầu Maybelline Fit Me Matte", price: "215.000đ", old: "280.000đ", remain: 18, total: 40 },
    { id: 3, img: "/makeup_palette_04.jpg", name: "Bảng phấn mắt 9 ô Romand Better Than Palette", price: "320.000đ", old: "420.000đ", remain: 8, total: 20 },
    { id: 4, img: "/makeup_mascara_05.jpg", name: "Chuốt mi cong dày Kiss Me Heroine Make Mascara", price: "260.000đ", old: "330.000đ", remain: 15, total: 35 },
    { id: 5, img: "/makeup_blusher_06.jpg", name: "Phấn má hồng dạng nén 3CE Face Blush", price: "290.000đ", old: "380.000đ", remain: 9, total: 15 },
  ];

  // 2. Danh mục sản phẩm ngành Mỹ phẩm
  const categories = ["Son môi", "Phấn nước / Kem nền", "Trang điểm mắt", "Phấn má / Khối", "Cọ & Dụng cụ"];

  // 3. Chính sách ưu đãi cho khách mua mỹ phẩm
  const promotions = [
    { icon: "✨", title: "Chính hãng 100%", desc: "Hoàn tiền x10 nếu phát hiện hàng fake" },
    { icon: "🚚", title: "Freeship toàn quốc", desc: "Cho mọi đơn hàng từ 399k" },
    { icon: "🎁", title: "Quà tặng độc quyền", desc: "Tặng sample cao cấp cho mỗi đơn hàng" },
    { icon: "💬", title: "Tư vấn chuyên nghiệp", desc: "Hỗ trợ chọn tone màu phù hợp 24/7" },
  ];

  return (
    <div className={styles.container}>
      <Header />

      {/* Banner chuẩn Mood làm đẹp */}
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>Tôn vinh <span className={styles.highlight}>vẻ đẹp tự nhiên</span> của bạn</h1>
          <button className={styles.bannerBtn}>Khám phá ngay</button>
        </div>
      </div>

      {/* Phần hiển thị Ưu đãi */}
      <div className={styles.promotionsSection}>
        {promotions.map((promo, index) => (
          <div key={index} className={styles.promoCard}>
            <span className={styles.promoIcon}>{promo.icon}</span>
            <h3>{promo.title}</h3>
            <p>{promo.desc}</p>
          </div>
        ))}
      </div>

      {/* Phần hiển thị Danh mục */}
      <div className={styles.categoriesSection}>
        {categories.map((cat, index) => (
          <button key={index} className={styles.categoryBtn}>{cat}</button>
        ))}
      </div>

      {/* Phần hiển thị Sản phẩm Makeup */}
      <div className={styles.productsSection}>
        <h2>Sản phẩm Bán chạy 🔥</h2>
        <div className={styles.productsGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <Image src={product.img} alt={product.name} className={styles.productImg} width={250} height={250} />
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productPrice}>
                {product.price} <span className={styles.oldPrice}>{product.old}</span>
              </p>
              <div className={styles.stockInfo}>
                <span>Chỉ còn: {product.remain} sản phẩm</span>
                <div className={styles.progressBar} style={{ width: `${(product.remain / product.total) * 100}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}