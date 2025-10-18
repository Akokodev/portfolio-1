"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

export default function Contacts() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate sending message (no backend)
    setTimeout(() => {
      setSubmitted(true);
      setEmail("");
      setMessage("");
    }, 500);
  };

  return (
    <div className={styles.container}>
      {/* --- Header Section --- */}
      <h1 className={styles.h1}>Bulunga Wilson Mark</h1>
      <h2 className={styles.h2}>Computer Scientist</h2>

      {/* --- About / Description --- */}
      <section className={styles.section}>
        <p className={styles.desc}>
          A tech-driven enthusiast passionate about learning new technologies
          and solving complex challenges. Skilled in{" "}
          <strong>Next.js</strong>, <strong>React Native</strong>,{" "}
          <strong>FastAPI</strong>, <strong>Django</strong>,{" "}
          <strong>Python</strong>, <strong>C</strong>, <strong>C++</strong>,{" "}
          <strong>Java</strong>, and more.  
          I’m open to collaborations, challenges, and opportunities to learn,
          build, and grow.
        </p>
      </section>

      {/* --- Contact Form --- */}
      <section className={styles.contact}>
        <h3 className={styles.contactHeader}>Contact Me</h3>
        {!submitted ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.label}>Your Email</label>
            <input
              title="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
              className={styles.input1}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className={styles.label}>Message</label>
            <textarea
              title="message"
              placeholder="Type your message..."
              className={styles.textarea}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        ) : (
          <div className={styles.successBox}>
            <h4>✅ Message Sent Successfully!</h4>
            <p>
              Thanks for reaching out! Your message has been recorded locally.
              Once backend support is added, it’ll be sent automatically.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className={styles.submitButton}
            >
              Send Another Message
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
