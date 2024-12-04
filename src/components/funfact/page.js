'use client';
import factStyles from './funfact.module.css';
import shield from '../../assets/img/AdobeStock_479006552.png'

export default function Funfact({top, left, fact}) {
    const stylingBase = {
        backgroundImage: `url(${shield.src})`,
        width: "400px",
        height: "400px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position:'absolute',
        top: top,
        left: left
    }
    return (
        <div className={factStyles.container} style={stylingBase}>
            <div className={factStyles.text}>
            <h3>Fun Fact!</h3>
            <p>{fact}</p></div>
        </div>
    );
}