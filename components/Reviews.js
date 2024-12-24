'use client'
import React from 'react';
import Image from "next/image";
import banner from '@/public/s61.webp'
import banner2 from '@/public/s62.webp'
import review from '@/public/r1.webp'
import {useParams} from "next/navigation";


const Reviews = ({props}) => {

    const params = useParams();

    return (
        <div className={'reviews-section'}>
            <div className="left">
                <div className="image"><Image src={banner} alt={'docs'} fill={true}/></div>
                <div className="image"><Image src={banner2} alt={'docs'} fill={true}/></div>
            </div>

            <div className="right">
                <div className={'title'}>
                    <h1>{params.lang == 'en' ? 'Reviews' : "Отзывы"}</h1>
                </div>
                <div className="review-cards">
                    {props && props.map((item, index) => {
                        return (
                            <div className={'review'} key={index}>
                                <span className={'comment'}>
                                    {params.lang == 'en' ? item.comment_en : item.comment_ru}
                                </span>
                                <div className={'review-content'}>
                                    <div className={'image'}>
                                        <Image src={process.env.API_URL + item.image} alt={'review'} fill={true}/>
                                    </div>
                                    <div className={'text'}>
                                        <div className={'name'}>{item.fullname}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    );
};

export default Reviews;