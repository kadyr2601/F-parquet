'use client'
import React from 'react';
import Image from "next/image";
import Button from "@/components/Button";
import {useParams} from "next/navigation";

const ParquetSanding = ({props}) => {

    const params = useParams();

    return (
        <div className={'section-2'} id="parquet-sanding">
            <div className={'images'}>
                <div className={'image'}>
                    <Image alt={'san1'} src={process.env.API_URL + props.image_left} fill={true}/>
                </div>
                <div className={'image'}>
                    <Image alt={'san1'} src={process.env.API_URL + props.image_right} fill={true}/>
                    <Button title={"Find out the price"}/>
                </div>
            </div>
            <div className="text-banner">
                <span>{params.lang == 'ru' ? props.title_ru : props.title_en}</span>
                <p>{params.lang == 'ru' ? props.description_ru : props.description_en}</p>
            </div>
        </div>
    );
};

export default ParquetSanding;