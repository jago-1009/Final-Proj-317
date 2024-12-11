"use client";
import { useSearchParams } from "next/navigation";
import styles from "../page.module.css";
import { Suspense } from "react";

function Search() {
  const searchParams = useSearchParams()
  const email = searchParams.get("email");
  const message = searchParams.get("message");
  return <div className={styles.container}>
  <h1 className={styles.pageHeading}>Message Sent Successfully!</h1>
  <section className={styles.messageReviewContainer}>
    <section className={styles.messageReview}>
      <p className={styles.messageReviewText}>
        <strong className={styles.messageParamTag}>Email:</strong> {email}
      </p>
      <p className={styles.messageReviewText}>
        <strong className={styles.messageParamTag}>Message:</strong>{" "}
        {message}
      </p>
    </section>
  </section>
  <a href="/contact" className={styles.contactReturn}>
    Send another message
  </a>
</div>

}
export default function Success() {

  
  return (
    <Suspense>
      <Search />
    </Suspense>
  );
}
