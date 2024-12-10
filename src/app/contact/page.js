import Image from "next/image";
import styles from "./page.module.css";
import DetailsButton from "@/components/detailsbutton/page";
export default function Knight() {
    return (
        <div className={styles.container}>
            <h1>Contact Us</h1>
            <section className={styles.desc}>
            <p>Feel Free to dispatch ye olde messaging pigeon to these coordinates:</p>
            <p>42.064969, -88.076129 (2001 North Roselle Rd., Schaumburg, IL 60195)</p>
            <br/>
            <br/>
            <p>
                Or just send us an email!
            </p>
            
            </section>
        </div>
    );
}