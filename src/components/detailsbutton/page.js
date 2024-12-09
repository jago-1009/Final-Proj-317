"use client";

import buttonStyles from './detailsbutton.module.css'
export default function DetailsButton({top, left, href, details}) {
    return (
       
        <button className={buttonStyles.button} style={{top: top, left: left}} onClick={() => window.location.href = href}>
            <p className={buttonStyles.text}>{details}</p>
        </button>
       
    );
}