'use client';
import { SignedOut,SignedIn } from '@clerk/nextjs';
import { useParams } from 'next/navigation';
import useData from '@/hooks/getData';
import detailStyles from './details.module.css';
const data = {
    Armor: {
        desc: "Armor&aposs primary function was to protect the wearer from harm coming from enemies, such as archers, other swordsmen, et cetera. The most common types of armors of the time include mail(which is created with multiple small rings interlocked together) and plate(large metal sheets put together to allow for more protection). Armor eventually fell out of fashion once gunpowder became more common, but it is still used today in recreational circles."
    },
    Sword: {
        desc: "Swords were some of the most common short-range weaponry seen across the medieval period. They were used for both melee and ranged combat and were often used in conjunction with armor. People that use swords as their weapon often trained for years to learn how to use it effectively. Some manuals that existed in the Medieval Period still exist today, and are used by reenactors to learn the art of swordsmanship. Such instructors include Joachim Meyer(1537-1571), who wrote the Thorough Descriptions of the Art of Fencing, the most well known and expansive manual for German Longsword fencing, and Fiore dei Liberi, who wrote Fior di Battaglia, a manual on Italian Longsword Fencing, and one of the oldest surviving manuals that existed in that period.",
    },
    
}
function DetailCard({name}) {
    
    for(var item in data) {
        console.log(item)
        if(item === name) {
            
            return <main className={detailStyles.container}>
                <section className={detailStyles.desc}><h1>{name}</h1><p>{data[item].desc}</p></section></main>
        }
        else {
            continue;
        }
    }
            return <main className={detailStyles.container}><section className={detailStyles.desc}><h1>Error</h1><p>We&apos;re sorry, but your parameter ({name}) is not valid. Please try again with an existing parameter</p></section></main>
        
}

export default function Details() {
    const dataDetails = useData();
    const params = useParams();
    const slug = params.slug
    return (
        <div>
            <SignedIn>
                <DetailCard name={dataDetails.capitalizeFirstLetter(slug)} />
            </SignedIn>
            <SignedOut>
                <h1>In order to view details of a product, you must be signed in. Please sign in using the button above.</h1>
            </SignedOut>
        </div>
    );
}