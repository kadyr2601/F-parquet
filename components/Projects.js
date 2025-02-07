'use client'
import React, {useEffect} from 'react';
import Image from "next/image";
import {useParams} from "next/navigation";
import AOS from "aos";

const Projects = ({props}) => {

    const params = useParams();

    // useEffect(() => {
    //     AOS.init(
    //         {
    //             delay: 300,
    //             once: false,
    //             duration: 1200,
    //         }
    //     )
    // }, [])

    return (
        <div className={'projects-section'}>
            <h1 data-aos={"fade-up"}>{params.lang == "en" ? "Our Realized Projects" : "Наши реализованные проекты"}</h1>
            <div className="cards">
                {props && props.map((item, index) => {
                    return (
                        <div className="card" key={index}  data-aos={index > 4 ? "fade-left" : "fade-right"}>
                            <Image src={process.env.API_URL + item.icon} alt={'banner'} fill={true}/>
                        </div> )
                } )}
            </div>
        </div>
    );
};

export default Projects;