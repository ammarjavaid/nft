import React, {useEffect} from 'react';
import clients1 from "../images/clients1.png";
import clients2 from "../images/clients2.png";
import clients3 from "../images/clients3.png";
import clients4 from "../images/clients4.png";
import clients5 from "../images/clients5.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Clients = () => {

    useEffect(()=>{
        Aos.init({ duration: 2000 });
    }, []);

    const data = [clients1, clients2, clients3, clients4, clients5];

    return (
        <>
            <div data-aos="fade-up" className='clients'>
                <div className='container'>
                    <div className='clients-container'>
                        {
                            data.map((client, index) => {
                                return (
                                    <>
                                        <div className='client' key={index}>
                                            <img src={client} alt="image" />
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clients