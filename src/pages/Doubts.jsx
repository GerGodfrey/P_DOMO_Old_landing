import React, { useEffect, useState } from 'react';
import Navbar2 from '../components/Navbar2';
import { NotionRenderer } from 'react-notion';
import axios from 'axios';
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import styles from '../style';

const Doubts = () => {

    const [data, setData] = useState({});


    useEffect(() => {
        axios.get('https://notion-api.splitbee.io/v1/page/6d496c9ace17468f95412d3fd38c8aea')
            .then(res => setData(res.data))
        console.log(data);

    }, []);

    return (
        <div>
            <div className='bg-black w-full overflow-hidden'>
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Navbar2 />
                    </div>
                </div>
            </div>
            <div className='flex pl-[10%] pr-[10%] pt-[50px]'>
                <NotionRenderer blockMap={data} />
            </div>
        </div>
    );
};

export default Doubts;