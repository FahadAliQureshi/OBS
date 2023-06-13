import React, { useEffect, useState } from 'react'
import styles from "../../styles/Home.module.scss";
import liner from '../../public/liner.png'
import Image from "next/image";
import randox from '../../public/rando.png'
import Link from 'next/link';
function Randoxc(props) {
    const [name ,setName ] = useState(props.name)
    useEffect(() => {
       setName(props.name)
       console.log("name",props)
    }, [props.name])
    
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.randoxc}>
                    <div className={styles.leftr}>
                        <h2 className={styles.h2}>Sneak Peek to some of our Best Work!</h2>
                        <figure className={styles.liner}>
                            <Image src={liner} alt="web" layout="fill" objectFit="contain" />
                        </figure>
                        <p className={styles.p}>We create a smooth user experience for every design and development project we take.</p>
                        {props.link == "" ? null: <Link href={props.link}><button className={styles.btner}>{props.btn}</button></Link>}
                    </div>
  {props.name == "randox" &&<div className={styles.rightr}>
                <Image src={props.image} alt="web" fill objectFit="fill" />
            </div> }
            {props.name == "webgl" &&<div className={styles.rightr}>
                <Image src={props.image} alt="web" fill objectFit="fill" />
            </div> }
                </div>

            </div>
         
        </>
    )
}

export default Randoxc