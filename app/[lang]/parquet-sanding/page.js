import React from 'react';
import Image from "next/image";
import Link from "next/link";

async function getData() {
    const res = await fetch(`${process.env.API_URL}/service/parquet-sanding`, { cache: 'no-store' });
    if (!res.ok) return null;
    const data = await res.json();
    return data
}

const Page = async ({params}) => {
    const data = await getData();
    const {lang} = params

    return (
        <div className="parquet-sanding">
            <div className="up">
                <div className="video">
                    <video src={process.env.API_URL + data.video} autoPlay muted loop controls={false}/>
                </div>

                <div className="text">
                    {lang == "en" ? data.description_en : data.description_ru}
                </div>

                <div className="image">
                    <Image alt={'img'} src={process.env.API_URL + data.image} fill={true}/>
                </div>
            </div>
            <Link className="down" href={`/${lang}`}>
                {lang == "en" ? "Go to back" : "Вернуться назад"}
            </Link>
        </div>
    );
};

export default Page;