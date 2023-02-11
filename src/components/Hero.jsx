import React from 'react';
import styles from '../style';
import { NFTCollection, discount, mirrow } from '../assets';
import Register from './Register';

const Hero = () => {

    const [showModal, setShowModal] = React.useState(false);


    return (

        <section
            id="inicio"
            className={`flex md:flex-row flex-col ${styles.paddingY}`}
        >
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <div className="flex flex-row items-center py-[3px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                    <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
                    <p className={`${styles.paragraph} ml-2`}>
                        <span className='text-white'>Registrarte</span> y obten{" "}
                        <span className='text-white'>mejores beneficios</span>
                    </p>
                </div>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-dmSans font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                        <span className="text-gradient ">
                            Bueno, bonito y barato <br className='sm:block hidden' /> {" "}
                        </span>
                        INVIERTE EN EL MERCADO INMOBILIARIO
                    </h1>
                </div>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    No te preocupes por los detalles del proceso inmobiliario. DOMO se encarga de todo, inicia con $3,500 MXN, relajate y espera tus ingresos mensuales.
                </p>


            </div>

            {/* IMAGE */}

            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`} >
                <div>
                    <img src={NFTCollection} alt="nftcollection" className="content-center items-center justify-center relative z-[5] md:py-20" />
                    <div className="center1 ss:flex hidden md:mr-4 mr-0">
                        <button className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-pink-500 rounded-[10px] outline-none mt-10 btn-register`} onClick={() => setShowModal(true)}>
                            Registro
                        </button>
                    </div>

                </div>

                {/* gradient start */}
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                {/* gradient end */}


            </div>
            <Register showModal={showModal} setShowModal={setShowModal} />
        </section>
    )


}




export default Hero