import React from 'react';
import Image from "next/image";
import Link from "next/link";

async function getData() {
    const res = await fetch(`${process.env.API_URL}/service/parquet-refinishing`, { cache: 'no-store' });
    if (!res.ok) return null;
    const data = await res.json();
    return data
}

const Page = async ({params}) => {
    const data = await getData();
    const {lang} = params

    return (
        <div className="parquet-refinishing">
            <div className="up">
                <div className="left">
                    <Image alt={''} src={process.env.API_URL + data.image} fill={true}/>
                </div>

                <div className="right">
                    <span>{lang == 'ru' ? data.title_ru : data.title_en}</span>
                    <span>{lang == 'ru' ? data.price_ru : data.price_en}</span>

                    <p>{lang == 'ru' ? data.description_ru : data.description_en}</p>
                </div>
            </div>
            <Link className="down" href={`/${lang}`}>
                {lang == "en" ? "Go to back" : "Вернуться назад"}
            </Link>
        </div>
    );
};

export default Page;