'use client'
import React, {useState} from 'react';
import {useParams} from "next/navigation";
import Image from "next/image";
import Modal from "@/components/Modal";


const Gallery = ({props}) => {
    const params = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [image, setImage] = useState(null);

    const handleImageClick = (img) => {
        setImage(img);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={'gallery-section'}>
            <h1>{params.lang == 'en' ? 'Our Gallery' : "Наша галерея"}</h1>

            <div className="cards">
                {props && props.map((item, index) => {
                    return (
                        <div className="card" key={index}>
                            <Image src={process.env.API_URL + item.image} onClick={() => handleImageClick(process.env.API_URL + item.image)} alt={'banner'} fill={true}/>
                        </div> )
                } )}
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <div className={'modal-img'}>
                    {image != null && <Image src={image} alt="Example image in modal" fill={true}/>}
                </div>
            </Modal>
        </div>
    );
};

export default Gallery;