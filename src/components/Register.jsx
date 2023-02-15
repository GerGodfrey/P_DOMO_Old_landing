import React from 'react';
import { useState } from 'react';
import styles from '../style';


const Register = ({ showModal, setShowModal }) => {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [registerChecked, setRegisterChecked] = useState(true)

    const submit = () => {
        const user = {
            name,
            age,
            email
        }
        console.log(user);
        setRegisterChecked(false)
        setAge("")
        setEmail("")
        setName("")
    }

    const closeModal = () => {
        setShowModal(false)
        setRegisterChecked(true)
    }

    return (
        <div>
            {showModal ? (
                <>
                <div className='fixed z-50 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
                    <div className={`${styles.boxWidth} max-w-3xl px-10`}>
                        <div className='bg-black border-t border-b border-solid border-l border-r rounded-lg'>
                            <div className="flex items-start justify-between bg-transparent p-10 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold text-gradient">
                                    Registro
                                </h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModal(false)}
                                >
                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        ×
                                    </span>
                                </button>
                            </div>
                            {/*body*/}
                            <div className="p-6 flex-auto">
                                {registerChecked ? <form className='flex-auto justify-center items-center' onSubmit={submit} >
                                    <div className={`${styles.flexCenter}`}>
                                        <label className={`p-6 text-white font-semibold ${styles.boxWidth}`} htmlFor="name">Nombre</label>
                                        <input className={`bg-black p-3 text-white
                                        border-t border-b border-solid border-l border-r rounded-lg ${styles.boxWidth}`} type="text" id='name' value={name} onChange={e => setName(e.target.value)} placeholder="Nombre" />
                                    </div>
                                    <div className={`${styles.flexCenter}`}>
                                        <label className={`p-6 text-white font-semibold ${styles.boxWidth}`} htmlFor="age">Edad</label>
                                        <input className={`bg-black p-3 text-white
                                        border-t border-b border-solid border-l border-r rounded-lg ${styles.boxWidth}`}  type="number" id='age' value={age} onChange={e => setAge(e.target.value)} placeholder="Edad" />
                                    </div>
                                    <div className={`${styles.flexCenter}`}>
                                        <label className={`p-6 text-white font-semibold ${styles.boxWidth}`} htmlFor="email">E-mail</label>
                                        <input className={`bg-black p-3 text-white
                                        border-t border-b border-solid border-l border-r rounded-lg ${styles.boxWidth}`}  type="email" id='email' value={email} onChange={e => setEmail(e.target.value)} placeholder="ejemplo@correo.com"/>
                                    </div>
                                </form> : <div className='flex justify-center items-center trasit trasit1'>
                                    <h1 className=' text-white font-semibold'>
                                        Gracias por tu interes, pronto recibiras información de nosotros.
                                    </h1>
                                </div>}
                                
                            </div>
                            {/*footer*/}
                            <div className={`flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b gap-4`}>
                                <button
                                    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none mt-10`}
                                    type="button"
                                    onClick={closeModal}
                                >
                                    Cerrar
                                </button>
                                <button
                                    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-pink-500 rounded-[10px] outline-none mt-10 btn-register`}
                                    type="button"
                                    onClick={submit}
                                >
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>

                    
            ) : null}
        </div>
    );
}

export default Register;