import {nft2} from "../assets"
import styles, {layout} from '../style';


const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
    <img src={nft2} alt="nft" className="w-[80%] h-[80%] relative z-[5]" />

    <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
    <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />

    </div>

    <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
        Conviértete en dueño de +1 inmueble <br className="sm:block hidden" /> y dale estabilidad a tu portafolio.
    </h2>

    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elige entre los mejores proyectos de inmuebles para ser dueño de màs de uno.
      </p>

    </div>
  </section>
)


export default Billing