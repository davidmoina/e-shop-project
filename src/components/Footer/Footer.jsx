import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2>ESHOP</h2>
        </div>
        <div className={styles.listsSection}>
          <ul>
            <h4>Company</h4>
            <li>About us</li>
            <li>Freebies</li>
            <li>Premium</li>
            <li>Blog</li>
            <li>Affiliate Program</li>
            <li>Get coupon</li>
          </ul>
          <ul>
            <h4>Support</h4>
            <li>Knowledge Center</li>
            <li>Contact Us</li>
            <li>Sponsorship</li>
            <li>Custom Development</li>
          </ul>
          <ul>
            <h4>Legal</h4>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Licenses</li>
          </ul>

        </div>
      </div>
      <div className={styles.copyRight}>
        Design inspired in Astro Ecommerce and developed by David Moina.
      </div>
    </footer>
  )
}

export default Footer