'use client'
import React from 'react';
import Image from "next/image";
import {useParams} from "next/navigation";


const Projects = ({props}) => {

    const params = useParams();

    return (
        <div className={'projects-section'}>
            <h1>{params.lang == "en" ? "Our Realized Projects" : "Наши реализованные проекты"}</h1>
            <div className="cards">
                {props && props.map((item, index) => {
                    return (
                        <div className="card" key={index}>
                            <Image src={process.env.API_URL + item.icon} alt={'banner'} fill={true}/>
                        </div> )
                } )}
            </div>
        </div>
    );
};

export default Projects;