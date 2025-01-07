import React from 'react';
import Image from "next/image";
import Link from "next/link";

async function getData() {
    const res = await fetch(`${process.env.API_URL}/service/parquet-installation`, { cache: 'no-store' });
    if (!res.ok) return null;
    const data = await res.json();
    return data
}

const Page = async ({params}) => {
    const data = await getData();
    const {lang} = params

    return (
        <div className="parquet-installation">
            <div className="up">
                <h1>{lang == "ru" ? "Установка паркета" : "Parquet Installation"}</h1>

                <div className="cards">
                    {data.map((item, index) => (
                        <div key={index} className="card">
                            <Image src={process.env.API_URL + item.image} alt={'card-icon'} fill={true}/>
                            <span>{lang == 'ru' ? item.title_ru : item.title_en}</span>
                            <span>{lang == 'ru' ? item.description_ru : item.description_en}</span>
                        </div>
                    ))}
                </div>
            </div>
            <Link className="down" href={`/${lang}`}>
                {lang == "en" ? "Go to back" : "Вернуться назад"}
            </Link>
        </div>
    );
};

export default Page;