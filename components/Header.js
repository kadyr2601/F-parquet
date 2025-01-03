'use client'
import React, {useState, useEffect} from 'react';
import Image from "next/image";
import Logo from '@/public/logo-color.svg'
import Link from 'next/link'
import {useParams} from "next/navigation";


function Header() {

    const params = useParams();

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const stickyElement = document.getElementById('sticky-element');
        const targetElement = document.getElementById('target-id');

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

    useEffect(() => {
        const sections = [
            document.getElementById('parquet-sanding'),
            document.getElementById('parquet-installation'),
            document.getElementById('parquet-refinishing'),
            document.getElementById('local-restoration'),
        ];

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .map((entry) => entry.target.id);

                // Update the active section or clear it if none of the observed sections are visible
                if (visibleSections.length > 0) {
                    setActiveSection(visibleSections[0]); // Use the first visible section
                } else {
                    setActiveSection(''); // No observed section is in view
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);


    return (
        <div id="sticky-element" className={`flex flex-row justify-between items-center header-section ${isSticky ? "is-sticky" : ''}`}>
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
            </div>
            <div className="language flex items-center gap-5">
                <Link href={'/en'}>EN</Link>
                <Link href={'/ru'}>РУ</Link>
            </div>
        </div>
    );
}

export default Header;