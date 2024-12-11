"use client";
import Image from "next/image";
import styles from "./page.module.css";
import DetailsButton from "@/components/detailsbutton/page";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const messageSubmit = (e) => {
    e.preventDefault();

    const queryString = new URLSearchParams({ email, message }).toString();
    router.push(`/contact/success?${queryString}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.pageHeading}>Contact Us</h1>
      <section className={styles.desc}>
        <p>
          Feel Free to dispatch ye olde messaging pigeon to these coordinates:
        </p>
        <p>
          42.064969, -88.076129 (2001 North Roselle Rd., Schaumburg, IL 60195)
        </p>
        <br />
        <br />
        <p className={styles.callToAction}>Or just send us a message!</p>
        <form
          onSubmit={messageSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <label htmlFor="email" className={styles.formLabel}>
            Email:
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.formInput}
            />
          </label>
          <label htmlFor="message" className={styles.formLabel}>
            Message:
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className={styles.formInput}
            />
          </label>
          <SignedIn>
            <button
            type="submit"
            className={styles.submitButton}
          >
            Send
          </button>
          </SignedIn>
          <SignedOut>
            <p>Please Sign In to Send a Message!</p>
          </SignedOut>
        </form>
      </section>
    </div>
  );
}
