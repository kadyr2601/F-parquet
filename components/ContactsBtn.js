'use client'
import React, {useState} from 'react';
import {useParams} from "next/navigation";
import Link from "next/link";

const ContactsBtn = () => {
    const params = useParams();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <div className={'contacts-btn'}>
            <div className={!open ? "not-open" : "disable"} onClick={handleClick}>
                <span>{params.lang == 'en' ? "Contacts" : "Связаться"}</span>
            </div>

            <div className={open ? "open" : "disable"}>
                <div className="contacts">
                    <Link href="tel:+971565083179">+ 971 56 508 31 79</Link>
                    <Link href="tel:+971567140101">+ 971 56 714 01 01</Link>
                    <Link href="mailto:info@fixworks-team.com">info@fixworks-team.com</Link>
                </div>
                <div className="close" onClick={handleClick}>{params.lang == 'en' ? "Close" : "Закрыть"}</div>
            </div>
        </div>
    );
};

export default ContactsBtn;