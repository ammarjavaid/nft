import React,{useEffect} from 'react'
import icon from "../images/icon.png";
import Card from './Card';
import super1 from "../images/super1.png";
import release2 from "../images/release2.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Free = () => {

    useEffect(()=>{
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            <div data-aos="fade-up" className='free'>
                <div className='container'>
                    <div className='background'>
                        <div className='ellipse pink'></div>
                        <div className='ellipse green'></div>
                    </div>
                    <div className='content'>
                        <div className='image'>
                            <img src={icon} alt="image" />
                        </div>
                        <h2 className='title'> Free NFT for early birds </h2>
                        <p className='description'>
                            Sign up today and you'll get a free NFT when we launch
                        </p>
                    </div>
                </div>
                <div className='cards'>
                    <div className='card1'>
                        <Card
                            image={super1}
                            series="Floop Series"
                            title="Purple Man"
                            price={2.99}
                            tag={12983}
                            time={1}
                        />
                    </div>
                    <div className='card2'>
                        <Card
                            image={release2}
                            series="Gloop Series"
                            title="Purple Man"
                            price={3.95}
                            tag={12983}
                            time={2}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Free