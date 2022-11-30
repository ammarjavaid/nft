import React, {useEffect} from 'react';
import super1 from "../images/super1.png";
import super2 from "../images/super2.png";
import super3 from "../images/super3.png";
import super4 from "../images/super4.png";
import Card from "./Card";
import Aos from "aos";
import "aos/dist/aos.css";

const SuperRare = () => {

    useEffect(()=>{
        Aos.init({ duration: 2000 });
    }, []);

    const data = [
        {
            image: super1,
            series: "Gloop Series",
            title: "Purple Man",
            price: 2.99,
            tag: 12983,
            time: 1
        },
        {
            image: super2,
            series: "Gloop Series",
            title: "Beige",
            price: 2.99,
            tag: 12983,
            time: 1
        },
        {
            image: super3,
            series: "Gloop Series",
            title: "Red Man",
            price: 2.99,
            tag: 12983,
            time: 1
        },
        {
            image: super4,
            series: "Gloop Series",
            title: "Green",
            price: 2.99,
            tag: 12983,
            time: 1
        }
    ]


    return (
        <>
            <div data-aos="fade-up" className='super-rare'>
                <div className='title-container'>
                    <h2 className='title'> LE Super Rare Auction </h2>
                    <p className='description'> We have released four limited edition NFT's early which ca be bid on via <a href='#'> OpenSea </a> </p>
                </div>
                <div className='cards'>
                    {
                        data.map((curElm, index) => {
                            return (
                                <>
                                    <Card
                                        image={curElm.image}
                                        series={curElm.series}
                                        title={curElm.title}
                                        price={curElm.price}
                                        tag={curElm.tag}
                                        time={curElm.time}
                                        key={index}
                                    />
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default SuperRare