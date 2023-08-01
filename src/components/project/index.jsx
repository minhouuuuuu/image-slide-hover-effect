'use client'
import styles from './style.module.css';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Image from 'next/image';

const anim = {
    initial: {width: 0},
    open: {width: "auto", transition: {duration: 0.4, ease: [0.23, 1, 0.32, 1]}},
    closed: {width: 0}
}

export default function Index({project}) {

    const [isActive, setIsActive] = useState(false);

    const { id, title1, title2, src } = project;
    return (
        <div onMouseEnter={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}} className={styles.project} key={id}>
            <p>{title1}</p>
            <motion.div variants={anim} animate={isActive ? "open" : "closed"} className={styles.imgContainer}>
                <Image src={`/medias/${src}`} alt='picture gallery' />
            </motion.div>
            <p>{title2}</p>
        </div>
    )
}
