'use client'
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import banner from '@/public/s61.webp'
import banner2 from '@/public/s62.webp'
import {useParams} from "next/navigation";
import ReviewModal from "@/components/ReviewModal";
import AOS from 'aos';

const Reviews = ({props}) => {

    const params = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [review, setReview] = useState(null);

    const handleClick = (obj) => {
        setReview(obj);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        AOS.init(
            {
                once: false,
            }
        )
    }, [])

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
                            <div className={'review'} key={index} onClick={() => handleClick(item)}>
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

            <ReviewModal isOpen={isModalOpen} onClose={handleCloseModal}>
                    {
                        review &&
                        <div className={'modal-content'}>
                            <div
                                className={'comment'}>{params.lang == 'en' ? review?.comment_en : review?.comment_ru}</div>
                            <div className={'name'}>{review?.fullname}</div>
                        </div>
                    }
            </ReviewModal>
        </div>
    )
        ;
};

export default Reviews;