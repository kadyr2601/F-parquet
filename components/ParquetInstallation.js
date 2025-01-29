'use client'
import React from 'react';
import Image from "next/image";
import Button from "@/components/Button";
import {useParams} from "next/navigation";
import Link from "next/link";

const ParquetInstallation = ({props}) => {

    const params = useParams();

    return (
        <div className={'section-3'} id={'parquet-installation'}>
            <div className={'images'}>
                <div className={'image'} data-aos={"fade-up"}>
                    <Image alt={'san1'} src={process.env.API_URL + props.image_left} fill={true}/>
                </div>
                <div className={'image'} data-aos={"fade-up"}>
                    <Image alt={'san1'} src={process.env.API_URL + props.image_right} fill={true}/>
                    <Link className={'btn'} href={`${params.lang}/parquet-installation`}>{params.lang == 'en' ? "Find out the price" : "Узнать цену"}</Link>
                </div>
            </div>
            <div className="text-banner" data-aos={"fade-down"}>
                <span>{params.lang == 'ru' ? props.title_ru : props.title_en}</span>
                <p>{params.lang == 'ru' ? props.description_ru : props.description_en}</p>
            </div>
        </div>
    );
};

export default ParquetInstallation;