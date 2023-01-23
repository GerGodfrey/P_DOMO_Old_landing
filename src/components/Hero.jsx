import React from 'react';
import styles from '../style';
import {NFTCollection, discount, mirrow} from '../assets';
import Button from "./Button";

const Hero = () => (

    <section
        id="inicio"
        className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex flex-row items-center py-[3px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                <img src={discount} alt="discount" className="w-[32px] h-[32px]"/>
                <p className={`${styles.paragraph} ml-2`}>
                    <span className='text-white'>100%</span> De descuento a los primeros {" "}
                    <span className='text-white'>usuarios</span>
                </p>
            </div>

            <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-dmSans font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                    <span className="text-gradient ">
                        UTILIZA TUS CRIPTOMONEDAS <br className='sm:block hidden'/> {" "}
                    </span>
                    Y ACCEDE AL MERCADO INMOBILIARIO
                </h1>
            </div>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Integramos nuevas características al mercado inmobiliario para beneficiar a inversionistas, propietarios y, sobre todo, familias.
            </p>

            
        </div>

        {/* IMAGE */}

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`} >
            <div>
                <img src={NFTCollection} alt="nftcollection" className="content-center items-center justify-center relative z-[5] md:py-20"/>
                <div className="center1 ss:flex hidden md:mr-4 mr-0">
                    <Button 
                        styles={`mt-10`}
                        name="Regístro"
                        bgColor="bg-green-gradient" 
                    />
                </div>

            </div>
            
            {/* gradient start */}
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            {/* gradient end */}

            
        </div>


    </section>
)

export default Hero