'use client'
import React, {useState, useEffect, useRef} from 'react';
import Image from "next/image";
import Logo from '@/public/logo-color.svg'
import Link from 'next/link'
import {useParams} from "next/navigation";


function Header() {

    const params = useParams();

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const stickyElement = document.getElementById('sticky-element');
        const targetElement = document.getElementById('parquet-sanding');

        const handleScroll = () => {
            if (stickyElement && targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top;
                setIsSticky(targetPosition <= 0);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [activeSection, setActiveSection] = useState('');

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    const overlayRef = useRef(null);

    // Toggle open/close when the button is clicked
    const handleToggle = () => {
        setOpen(prev => !prev);
    };

    // Close when clicking outside
    useEffect(() => {
        function handleOutsideClick(event) {
            if (
                overlayRef.current &&
                !overlayRef.current.contains(event.target)
            ) {
                // If click is outside overlayRef => close
                setOpen(false);
            }
        }

        // Add a "mousedown" or "click" listener
        document.addEventListener("mousedown", handleOutsideClick);

        // Cleanup listener on unmount
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);


    return (
        <div id="sticky-element"
             className={`flex flex-row justify-between items-center header-section ${isSticky ? "is-sticky" : ''}`}>
            <div className="logo">
                <Image alt={'Logo'} src={Logo} fill={true}/>
            </div>
            <div className="nav flex gap-5">
                <Link
                    href={'#parquet-sanding'}
                    className={activeSection === 'parquet-sanding' ? 'active' : ''}
                >{params.lang == "en" ? "Parquet Sanding & Parquet toning" : "Шлифовка и тонирование паркета"}</Link>
                <Link
                    href={'#parquet-installation'}
                    className={activeSection === 'parquet-installation' ? 'active' : ''}
                >{params.lang == "en" ? "Parquet Installation" : "Установка паркета"}</Link>
                <Link
                    href={'#parquet-refinishing'}
                    className={activeSection === 'parquet-refinishing' ? 'active' : ''}
                >{params.lang == "en" ? "Parquet Refinishing" : "Полировка паркета"}</Link>

                <Link
                    href={'#local-restoration'}
                    className={activeSection === 'local-restoration' ? 'active' : ''}
                >{params.lang == "en" ? "Local Restoration" : "Локальное восстановление"}</Link>
                {/*<div className={'contacts-btn'}>*/}
                {/*    <div className={open ? "open" : "disable"}>*/}
                {/*        <div className="contacts">*/}
                {/*            <Link href="tel:+971565083179">+ 971 56 508 31 79</Link>*/}
                {/*            <Link href="tel:+971567140101">+ 971 56 714 01 01</Link>*/}
                {/*            <Link href="mailto:info@fixworks-team.com">info@fixworks-team.com</Link>*/}
                {/*        </div>*/}
                {/*        <div className="close" onClick={handleClick}>{params.lang == 'en' ? "Close" : "Закрыть"}</div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <div className="nav-contacts">
                <Link
                    href={'#'}
                    className={'cntc-btn'}
                    onClick={handleClick}
                >{params.lang == "en" ? "Contacts" : "Контакты"}</Link>
                <div className={'contacts-btn'} ref={overlayRef}>
                    <div className={`open ${open ? "open-active" : ""}`}>
                        <div className="contacts">
                            <Link href="tel:+971565083179">+ 971 56 508 31 79</Link>
                            <Link href="tel:+971567140101">+ 971 56 714 01 01</Link>
                            <Link href="mailto:info@fixworks-team.com">info@fixworks-team.com</Link>
                        </div>
                        <div className="close" onClick={handleClick}>{params.lang == 'en' ? "Close" : "Закрыть"}</div>
                    </div>
                </div>
            </div>

            <div className="nav-mobile">

                <div className="nav-contacts-m">
                    <Link
                        href={'#'}
                        className={'cntc-btn'}
                        onClick={handleClick}
                    >{params.lang == "en" ? "Contacts" : "Контакты"}</Link>
                    <div className={'contacts-btn'} ref={overlayRef}>
                        <div className={`open ${open ? "open-active" : ""}`}>
                            <div className="contacts">
                                <Link href="tel:+971565083179">+ 971 56 508 31 79</Link>
                                <Link href="tel:+971567140101">+ 971 56 714 01 01</Link>
                                <Link href="mailto:info@fixworks-team.com">info@fixworks-team.com</Link>
                            </div>
                            <div className="close"
                                 onClick={handleClick}>{params.lang == 'en' ? "Close" : "Закрыть"}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="language flex items-center gap-5">
                <Link href={'/en'}>EN</Link>
                <Link href={'/ru'}>РУ</Link>
            </div>
        </div>
    );
}

export default Header;