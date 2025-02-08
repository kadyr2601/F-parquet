'use client'
import React from 'react';
import Image from "next/image";
import {useParams} from "next/navigation";

const AboutUs = ({props}) => {

    const params = useParams();

    return (
        <div className={'about-us flex flex-row'}>
            <div className="image" data-aos={"fade-up"}>
                <Image src={process.env.API_URL + props.image} alt={'banner'} fill={true}/>
            </div>
            <div className="section">
                <div className="about">
                    <h1 data-aos={"fade-up"}>{params.lang == 'ru' ? "О нас" : "About Us"}</h1>
                    <p data-aos={"fade-down"}>{params.lang == 'ru' ? props.description_ru : props.description_en}</p>
                </div>
                <div className="cards" data-aos={"fade-down"}>
                    <div className="card">
                        <span>{params.lang == "en" ? "17 years" : " 17 лет"}</span>
                        <p>{params.lang == "en" ? "on the restorations market" : "на рынке реставраций"}</p>
                        <span>60+</span>
                        <p>{params.lang == "en" ? "active projects in continuous operation" : "активные проекты в непрерывной работе"}</p>
                    </div>
                    <div className="card">
                        <span>2500+</span>
                        <p>{params.lang == "en" ? "successfully completed projects" : "успешно завершенные проекты"}</p>
                        <span>1500+</span>
                        <p>{params.lang == "en" ? "solved issues per day" : "решенных проблем в день"}</p>
                    </div>
                    <div className="card">
                        <span>50</span>
                        <p>{params.lang == "en" ? "employees in the state" : "сотрудников в штате"}</p>
                        <span>29000+</span>
                        <p>{params.lang == "en" ? "defects repair per day" : "ремонт дефектов в день"}</p></div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;