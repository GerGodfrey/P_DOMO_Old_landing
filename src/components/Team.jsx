
import { team } from '../constants';
import styles, {layout} from "../style";
import {twitter_icon, link_icon,insta_icon} from "../assets";


const TeamCard = ({ area, name, t_link, l_link, i_link,card }) => (
    <div className='cards px-10 equipo'>
        <img src={card} id="person" alt="star" className="w-[50%] h-[50%] object-contain" />
        <h1 className="font-poppins font-semibold text-pink2 text-[18px] leading-[23.4px] mb-1">
            {area}
        </h1>
        <p className="font-poppins text-grey text-[16px] leading-[21.4px] mb-1">
            {name}
        </p>
        <div className={`flex-1 flex justify-start items-center flex-row m-3`}>
            <a href={t_link}>
                <img src= {twitter_icon}  />
            </a>
            
            <a href={l_link}>
                <img src= {link_icon} />
            </a>
            
            <a href={i_link}>
                <img src= {insta_icon} ></img>
            </a>
            
        </div>
    </div>
);

const Team = () => (

    <section id="equipo">
        <div>
            <h1 className="flex-1 font-dmSans font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                <span className="text-gradient ">
                    CONOCE AL EQUIPO 
                </span>
            </h1>

            <div className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6  gap-5`}>
                {team.map((feature, index) => (
                    <TeamCard key={team.id} {...feature} index={index} />
                ))}
            </div>

            
        </div>
        
    </section>
  )

export default Team