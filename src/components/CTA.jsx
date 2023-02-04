import styles from "../style"
import Button from "./Button"
import React, { useState } from "react"

const CTA = () => {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")


    const submit = () => {
        const user = {
            name,
            age,
            email
        }
        console.log(user);
        setAge("")
        setEmail("")
        setName("")
    }

    return (
        <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
            <div className="flex-1 flex flex-col">
                <h2 className={styles.heading2}>
                    Empieza a probar nuestros servicios
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Por ahora nos encontramos en una fase cerrada, solo para las primeras personas que se registren.
                </p>
            </div>


            <div className={`${styles.flexCenter} ${styles.marginY}  sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
                <div className=' bg-black-gradient-2 border-t border-b border-solid border-l border-r rounded-lg'>
                   
                    {/*body*/}
                    <div className="p-6 flex-auto">
                        <form className='flex-auto justify-center items-center' onSubmit={submit} >
                            <div className={`${styles.flexCenter}`}>
                                <label className={`p-4 text-white font-semibold ${styles.boxWidth} ${styles.paragraph}`} htmlFor="name">Nombre</label>
                                <input className={`p-3 text-black
                                        border-t border-b border-solid border-l border-r rounded-lg ${styles.boxWidth}`} type="text" id='name' value={name} onChange={e => setName(e.target.value)} placeholder="Nombre" />
                            </div>
                            <div className={`${styles.flexCenter}`}>
                                <label className={`p-4 text-white font-semibold ${styles.boxWidth} ${styles.paragraph}`} htmlFor="email">E-mail</label>
                                <input className={`p-3 text-black
                                        border-t border-b border-solid border-l border-r rounded-lg ${styles.boxWidth}`} type="text" id='email' value={email} onChange={e => setEmail(e.target.value)} placeholder="ejemplo@correo.com" />
                            </div>
                        </form>
                    </div>
                    {/*footer*/}
                    <div className={`flex items-center justify-end p-1 border-t border-solid border-slate-200 rounded-b`}>

                        <button
                            className={`py-4 px-6 font-poppins font-medium text-[18px] text-white p-6 rounded-[10px] outline-none mt-10 btn-register`}
                            type="button"
                            onClick={submit}
                        >
                            Enviar
                        </button>
                    </div>
                </div>
            </div>


        </section>

    )
}

export default CTA