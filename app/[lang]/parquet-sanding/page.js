import React from 'react';
import Image from "next/image";
import Link from "next/link";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

async function getData() {
    const res = await fetch(`${process.env.API_URL}/service/parquet-sanding`, { cache: 'no-store' });
    if (!res.ok) return null;
    const data = await res.json();
    return data
}

const Page = async ({params}) => {
    const data = await getData();
    const {lang} = await params

    if (!data) return <div>Failed to load</div>;

    return (
        <div className="parquet-sanding">
            <div className="up">
                {
                    data.map((item, index) => (
                        <div key={index} className="ps-card">
                            <h1>{lang == "en" ? item.title_en : item.title_ru}</h1>
                            <BeforeAfterSlider
                                beforeImage={process.env.API_URL + item.image_before}
                                afterImage={process.env.API_URL + item.image_after}
                            />
                            <p>{lang == "en" ? item.price_en : item.price_ru}</p>
                        </div>
                    ))
                }
            </div>
            <Link className="down" href={`/${lang}`}>
                {lang == "en" ? "Go to back" : "Вернуться назад"}
            </Link>
        </div>
    );
};

export default Page;