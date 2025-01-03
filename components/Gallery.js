'use client'
import React from 'react';
import {useParams} from "next/navigation";
import Image from "next/image";

const Gallery = ({props}) => {
    const params = useParams();

    return (
        <div className={'gallery-section'}>
            <h1>{params.lang == 'en' ? 'Our Gallery' : "Наша галерея"}</h1>

            <div className="cards">
                {props && props.map((item, index) => {
                    return (
                        <div className="card" key={index}>
                            <Image src={process.env.API_URL + item.image} alt={'banner'} fill={true}/>
                        </div> )
                } )}
            </div>
        </div>
    );
};

export default Gallery;