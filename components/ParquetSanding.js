'use client'
import React, {useEffect} from 'react';
import Image from "next/image";
import {useParams} from "next/navigation";
import Link from "next/link";
import AOS from 'aos'

const ParquetSanding = ({props}) => {
    const params = useParams();

    useEffect(() => {
        AOS.init()
    }, [])


    return (
        <div className={'section-2 container'} id="parquet-sanding">
            <div className={'images'}>
                <div className={'image'} data-aos={"fade-right"}>
                    <Image alt={'san1'} src={process.env.API_URL + props.image_left} fill={true}/>
                </div>
                <div className={'image'} data-aos={"fade-left"}>
                    <Image alt={'san1'} src={process.env.API_URL + props.image_right} fill={true}/>
                    <Link className={'btn'} href={`${params.lang}/parquet-sanding`}>{params.lang == 'en' ? "Find out the price" : "Узнать цену"}</Link>
                </div>
            </div>
            <div className="text-banner" data-aos={"fade-up"}>
                <span>{params.lang == 'ru' ? props.title_ru : props.title_en}</span>
                <p>{params.lang == 'ru' ? props.description_ru : props.description_en}</p>
            </div>
        </div>
    );
};

export default ParquetSanding;