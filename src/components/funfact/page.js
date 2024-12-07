'use client';
import factStyles from './funfact.module.css';
import shield from '../../assets/img/AdobeStock_479006552.png'
import { useEffect } from 'react';

export default function Funfact({top, left, fact, width}) {
    let width;
    const stylingBase = {
        backgroundImage: `url(${shield.src})`,
        width: width,
        height: width,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position:'absolute',
        top: top,
        left: left
    }
    const textSyling = {
        width: width,
    }
    
    useEffect     (() => {
        width = window.innerWidth;
    })
    function GetData() {
        
        if (width > 600) {
            return  <div className={factStyles.container} style={stylingBase}>
            <div style={textSyling} className={factStyles.text}>
            <h3>Fun Fact!</h3>
            <p>{fact}</p></div>
        </div>
    }
    else {
        return <div className={factStyles.containerMobile} >
        <div style={textSyling} className={factStyles.text}>
        <h3>Fun Fact!</h3>
        <p>{fact}</p></div>
    </div>
    }
}
    return (
     <GetData />
    );
}