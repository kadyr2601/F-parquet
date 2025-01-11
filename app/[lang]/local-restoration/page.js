import React from 'react';
import Image from "next/image";
import Link from "next/link";

async function getData() {
    const res = await fetch(`${process.env.API_URL}/service/local-restoration`, { cache: 'no-store' });
    if (!res.ok) return null;
    const data = await res.json();
    return data
}

const Page = async ({params}) => {
    const data = await getData();
    const {lang} = params

    return (
        <div className="local-restoration">
            <Image alt={'background'} src={process.env.API_URL + data.background_image} fill={true} className={'background-img'}/>
            <div className="up">
                <div className="left">
                    <p>{lang == "en" ? data.description_en : data.description_ru}</p>
                </div>

                <div className="right">
                    <div className="image">
                        <Image alt={'set'} src={process.env.API_URL + data.image1} fill={true}/>
                    </div>
                    <div className="image">
                        <Image alt={'set'} src={process.env.API_URL + data.image2} fill={true}/>
                    </div>
                    <div className="image">
                        <Image alt={'set'} src={process.env.API_URL + data.image3} fill={true}/>
                    </div>
                </div>
            </div>
            <Link className="down" href={`/${lang}`}>
                {lang == "en" ? "Go to back" : "Вернуться назад"}
            </Link>
        </div>
    );
};

export default Page;