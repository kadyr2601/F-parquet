'use client'
import React from 'react';
import Image from "next/image";
import logo from '@/public/Logo.png'


function MainBanner({banner}) {

    const scrollToTarget = () => {
        const targetElement = document.getElementById('target-id');
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
                   Learn more
               </div>
            </div>
        </div>
    );
}

export default MainBanner;