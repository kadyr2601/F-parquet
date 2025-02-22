'use client'
import React from 'react';
import Image from "next/image";
import logo from '@/public/Logo.png'
import {useParams} from "next/navigation";

function MainBanner({banner}) {
    const params = useParams();

    const scrollToTarget = () => {
        const targetElement = document.getElementById('parquet-sanding');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <div className={'mainBanner relative h-dvh'}>
            <video src={process.env.API_URL + banner} autoPlay
                muted loop controls={false} />

            <div className="banner-up">
                <div className={'logo-centre'}>
                    <Image src={logo} alt={'main-banner'} fill={true}/>
                </div>
                <div className={'down'} onClick={scrollToTarget}>
                    <div className="down-btn">
                        &darr;
                    </div>
                    {params.lang == 'ru' ? "Узнать больше" : "Learn more"}

               </div>
            </div>
        </div>
    );
}

export default MainBanner;