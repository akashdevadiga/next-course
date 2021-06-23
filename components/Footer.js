import Image from 'next/image'
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return ( 
        <footer className={styles.footer}>
        <a>
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>        
     );
}
 
export default Footer;