import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { inputInfo } from '../constants';
import { motion } from 'framer-motion';
import { firebase } from "../connection/firebase";
import { collection, addDoc } from "firebase/firestore";
import Navbar2 from '../components/Navbar2';
import styles from '../style';

const RegisterProperty = () => {

    const { handleSubmit, register } = useForm();

    async function sendInfo(data) {
        const ref = collection(firebase, "registros_property");

        try {
            const docRef = await addDoc(ref, {
                data
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const submit = (data) => {
        console.log(data);
        sendInfo(data);
    }

    return (
        <motion.div className='bg-discount-gradient flex flex-col justify-center items-center'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: .1 }}>
            <div className='bg-black w-full overflow-hidden'>
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Navbar2 />
                    </div>
                </div>
            </div>
            <h1 className='w-full flex justify-center text-6xl p-4 text-white text-center'>
                Registra un inmueble
            </h1>
            <p className='w-full text-2xl p-4 text-center text-neutral-400 text-gradient2'>
                Gracias por su interés en DOMO. Complete el siguiente formulario y nos pondremos en contacto con usted.
            </p>
            <p className='w-full flex justify-center text-1xl p-4 text-neutral-400 text-gradient2'>
                Los campos obligatorios están marcados con un asterisco (*).
            </p>
            <form onSubmit={handleSubmit(submit)} className=' lg:w-[800px] md:w-[500px] sm:w-[300px]'>
                {inputInfo.map((input) => (
                    input.id != 'country' ?
                        <li key={input.id}>
                            <div
                                className='flex flex-col w-full items-center'>
                                <label
                                    htmlFor={`${input.name}`}
                                    className='w-full flex  text-white text-2xl p-4'>
                                    {input.name}
                                </label>
                                <input
                                    type="text"
                                    id={`${input.id}`}
                                    {...register(input.id)}
                                    placeholder={`${input.placeholder}`}
                                    className='w-full flex  p-5 rounded-lg bg-white' />
                            </div>
                        </li> :
                        <li key={input.id}>
                            <div className='flex flex-col w-full items-center'>
                                <label
                                    htmlFor={`${input.name}`}
                                    className='w-full flex  text-white text-2xl p-4'>
                                    {input.name}
                                </label>
                                <select name="" id=""
                                    className='w-full flex p-5 rounded-lg bg-white'
                                >
                                    <option value=''>
                                        México
                                    </option>
                                    <option value=''>
                                        EE.UU
                                    </option>
                                    <option value=''>
                                        Canadá
                                    </option>
                                </select>
                            </div>
                        </li>
                ))};
                <button
                    className='w-[200px] mt-10 text-white text-2xl rounded-xl p-7 bg-black-gradient-2 my-4'>
                    Enviar
                </button>
            </form>
        </motion.div>
    );
};

export default RegisterProperty;