import React, {useEffect} from 'react';
import eth1 from "../images/eth1.png";
import eth2 from "../images/eth2.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Like = () => {

    useEffect(()=>{
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            <div data-aos="fade-up" className='like'>
                <div className='container'>
                    <div className="content">
                        <div className='image'>
                            <img src={eth1} alt="image" />
                        </div>
                        <h2 className='title'> An NFT like no other </h2>
                        <p className='description'>
                            Don't miss out on the release of our new NFT. Sign up below to receive updates when we go live on 11/22.
                        </p>
                        <p className='description'>
                            Don't miss out on the release of our new NFT. Sign up below to receive updates when we go live on 11/22. Don't miss out on the release of our new NFT.
                        </p>
                    </div>


                    <div className="content">
                        <div className='image'>
                            <img src={eth2} alt="image" />
                        </div>
                        <h2 className='title'> An NFT like no other </h2>
                        <p className='description'>
                            Don't miss out on the release of our new NFT. Sign up below to receive updates when we go live on 11/22.
                        </p>
                        <p className='description'>
                            Don't miss out on the release of our new NFT. Sign up below to receive updates when we go live on 11/22. Don't miss out on the release of our new NFT.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Like