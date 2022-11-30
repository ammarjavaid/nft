import React, { useState } from 'react'

const ScrollToTop = () => {

const [view, setView] = useState(false);


const visible = ()=>{
    window.pageYOffset > 100 ? setView(true) : setView(false);
};


window.addEventListener("scroll", visible);

  return (
    <>
        <div className={`scrollTop ${view ? "view" : ""}`}>
            <a href='#'>
            <i className="fas fa-chevron-up"></i>
            </a>
        </div>
    </>
  )
}

export default ScrollToTop;