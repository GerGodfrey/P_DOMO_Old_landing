import { features_inv, features_prop } from '../constants';
import styles, { layout } from "../style";
import Button from './Button';
import { useState } from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features_inv.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
            <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
        </div>
        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                {title}
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                {content}
            </p>
        </div>
    </div>
);

const Business = () => {
    const [view, setView] = useState(false);
    const viewInvesment = () => setView(true);
    const viewProperty = () => setView(false);

    return (
        <section id="funciones" className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Descrubre que hace DOMO por ti, <br className="sm:block hidden" />
                    desde la palma de tu mano.
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Elige entre ser INVERSIONISTA O PROPIETARIO
                </p>
                <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-yellow-gradient rounded-[10px] outline-none mt-10`} onClick={viewProperty}>
                    Propietario
                </button>
                <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none mt-10`} onClick={viewInvesment}>
                    Inversionista
                </button>

            </div>

            <div className={`${layout.sectionImg} flex-col`}>



                {view === true ? features_inv.map((feature, index) => (
                    <motion.div key={features_inv.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1}}>
                        <FeatureCard {...feature} index={index} />
                    </motion.div>
                )) : features_prop.map((feature, index) => (
                    <motion.div key={features_prop.id}
                        initial={{ opacity: 0 }}
                        whileInView={{opacity: 1 }}
                        transition={{ delay: .1 }}>
                        <FeatureCard  {...feature} index={index} />
                    </motion.div>
                ))}

            </div>
        </section>
    )
}

export default Business