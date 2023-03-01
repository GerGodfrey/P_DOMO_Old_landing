import React from 'react';
import styles from '../style';
import { Navbar, Hero, Stats, Business, Team, Billing, CTA, Footer } from '../components';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: .1 }}>
            <div className="bg-black w-full overflow-hidden">
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

                        {/* 
    
    <CardDeal />
    <Testimonials />
    <Clients />
    
     */}
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default Home;