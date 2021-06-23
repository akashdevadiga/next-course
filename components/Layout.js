import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
