import React, {useEffect} from 'react';
import release1 from "../images/release1.png";
import release2 from "../images/release2.png";
import Card from './Card';
import Aos from "aos";
import "aos/dist/aos.css";

const Release = () => {

    useEffect(()=>{
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            <div className='releases'>
                <div data-aos="fade-up" className='release orange'>
                    <div className='content'>
                        <h2 className='title'> Initial Release 4/11 </h2>
                        <p className='description'>
                            We have released four limited edition NFT's early which ca be bid on via <a href='#'> OpenSea </a>
                        </p>
                        <p className='description'>
                            There will be the only four of these NFTs we ever make, so be sure not to miss out!
                        </p>
                        <p className='description'>
                            50% of proceeds go to charity
                        </p>
                        <a href='#' className='link'>
                            Check them out <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>
                    <div className='image'>
                        <img src={release1} alt="image" />
                        <div className='ellipse pink'></div>
                    </div>
                </div>



                <div data-aos="fade-up" className='release green'>
                    <div className='card-container'>
                        <Card 
                            image={release2}
                            series="Floop Series"
                            title="Purple Man"
                            price={2.99}
                            tag={12983}
                            time={1}
                            />
                        <div className='ellipse orange '></div>
                    </div>
                    <div className='content'>
                        <h2 className='title'> Initial Release 4/11 </h2>
                        <p className='description'>
                            We have released four limited edition NFT's early which ca be bid on via <a href='#'> OpenSea </a>
                        </p>
                        <p className='description'>
                            There will be the only four of these NFTs we ever make, so be sure not to miss out!
                        </p>
                        <p className='description'>
                            50% of proceeds go to charity
                        </p>
                        <a href='#' className='link'>
                            Check them out <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Release