
import styles from './style';
import { Navbar, Hero, Stats, Business, Team, Billing, CTA, Footer } from "./components";


// {`${}`}

const App = () =>(
  <div className="bg-black w-full overflow-hidden">
    
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-black ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <Team />
        <CTA />
        <Footer />
        
        {/* 
        
        <CardDeal />
        <Testimonials />
        <Clients />
        
         */}
      </div>
    </div>
    
  </div>



  /* 

  <div className= {` bg-black ${styles.flexStart}`}>
    <div className= {`${styles.boxWidth}`}>
      HERO
    </div>
  </div>

  <div className= {` bg-black ${styles.paddingX} ${styles.flexStart}`}>
    <div className= {`${styles.boxWidth}`}>
      Stats 
      Business 
      Billing 
      Card 
      Testimonials 
      Clientes 
      CTA 
      Footer 
    </div>
  </div> */
);

export default App;