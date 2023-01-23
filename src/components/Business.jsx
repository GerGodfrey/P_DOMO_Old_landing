import { features_inv, features_prop } from '../constants';
import styles, {layout} from "../style";
import Button from './Button';
import { useState } from 'react';

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
    const [toggle, setToggle] = useState(false);
    
    return (
        <section id="funciones" className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Todo lo que puedes hacer con DOMO, <br className="sm:block hidden"/>
                    Desde la palma de tu mano.
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Puedes elegir entre ser INVERSIONISTA O PROPIETARIO   
                </p>
                

                <Button 
                    styles={`mt-10`} 
                    name="Inversionista" 
                    bgColor="bg-blue-gradient"
                    onClick={() => setToggle((prev) => !prev)} 
                />

                <Button 
                    styles={`mt-10`}
                    name="Propietario"
                    bgColor="bg-yellow-gradient"
                    onClick={() => setToggle((prev) => !prev)} 
                />
            </div>

            <div className={`${layout.sectionImg} flex-col`}>

            

                {features_inv.map((feature, index) => (
                    <FeatureCard key={features_inv.id} {...feature} index={index} />
                ))}

                    {/* { 
                    {features_prop.map((feature, index) => (
                        <FeatureCard key={features_prop.id} {...feature} index={index} />
                    ))} } */}
                
            </div>
        </section>
    )
}

export default Business