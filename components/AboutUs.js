'use client'
import React, {useEffect} from 'react';
import Image from "next/image";
import {useParams} from "next/navigation";
import AOS from "aos";

const AboutUs = ({props}) => {

    const params = useParams();

    useEffect(() => {
        AOS.init(
            {
                delay: 300,
                duration: 1200,
            }
        )
    }, [])

    return (
        <div className={'about-us flex flex-row'}>
            <div className="image" data-aos={"fade-right"}>
                <Image src={process.env.API_URL + props.image} alt={'banner'} fill={true}/>
            </div>
            <div className="section">
                <div className="about">
                    <h1 data-aos={"fade-up"}>{params.lang == 'ru' ? "О нас" : "About Us"}</h1>
                    <p data-aos={"fade-down"}>{params.lang == 'ru' ? props.description_ru : props.description_en}</p>
                </div>
                <div className="cards" data-aos={"fade-down"}>
                    <div className="card">
                        <span>17 years</span>
                        <p>on the restorations market</p>
                        <span>60+</span>
                        <p>active projects in continious operation</p>
                    </div>
                    <div className="card">
                        <span>2500+</span>
                        <p>successfully completed projects</p>
                        <span>1500+</span>
                        <p>solved issues per day</p>
                    </div>
                    <div className="card">
                        <span>50</span>
                        <p>emplayees in the state</p>
                        <span>29000+</span>
                        <p>defects repair per day</p></div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;