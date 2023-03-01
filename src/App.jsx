import { HashRouter, Routes, Route } from 'react-router-dom';
import styles from './style';
import { Navbar, Hero, Stats, Business, Team, Billing, CTA, Footer } from "./components";
import AnimatedRoutes from './components/AnimatedRoutes';

const App = () => (
  <div>
    <HashRouter>
      <AnimatedRoutes />
      <div className={`bg-black ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>

    </HashRouter>
  </div>
);

export default App;