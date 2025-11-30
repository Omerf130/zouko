"use client";

import { useState } from "react";
import classes from "./page.module.scss";
import { CONSTS } from "../_consts/consts";

const ContactPage = () => {
  const {TITLE, SUBMIT} = CONSTS.CONTACT;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "972501234567"; // <-- PUT YOUR NUMBER HERE

    const text = `New Contact Form:
Name: ${name}
Phone: ${phone}
Message: ${message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>{TITLE}</h1>

      <form className={classes.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="שם מלא"
          value={name}
          onChange={(e) => setName(e.target.value)}
          dir="rtl"
          required
        />

        <input
          type="tel"
          placeholder="מספר טלפון"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          dir="rtl"
          required
        />

        <textarea
          placeholder="טקסט"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          dir="rtl"
          required
        ></textarea>

        <button type="submit">{SUBMIT}</button>
      </form>
    </div>
  );
};

export default ContactPage;
