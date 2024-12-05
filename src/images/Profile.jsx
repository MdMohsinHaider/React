import React from 'react'
import style from "./profile.module.css";
import PIC from "./download (1).jpg";

export default function Profile() {
    return (
        <section id={style.card}>
            <img src={PIC} alt="" />
        </section>
    )
}
