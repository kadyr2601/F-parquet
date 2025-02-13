'use client'
import { useState } from 'react';

export default function BeforeAfterSlider({beforeImage, afterImage}) {
    const [value, setValue] = useState(50);

    return (
        <section className="main-w">
            <div className="container-w" style={{ '--position': `${value}%` }}>
                <div className="image-container">
                    <img className="image-before slider-image" src={beforeImage} alt="Color photo" />
                    <img className="image-after slider-image" src={afterImage} alt="Black and white" />
                </div>

                <input
                    type="range"
                    min="0"
                    max="100"
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                    aria-label="Percentage of before photo shown"
                    className="slider"
                />

                <div className="slider-line" aria-hidden="true"></div>

                <div className="slider-button" aria-hidden="true">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                    >
                        <line
                            x1="128"
                            y1="40"
                            x2="128"
                            y2="216"
                            stroke="currentColor"
                            strokeWidth="16"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <line
                            x1="96"
                            y1="128"
                            x2="16"
                            y2="128"
                            stroke="currentColor"
                            strokeWidth="16"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <polyline
                            points="48 160 16 128 48 96"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="16"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <line
                            x1="160"
                            y1="128"
                            x2="240"
                            y2="128"
                            stroke="currentColor"
                            strokeWidth="16"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <polyline
                            points="208 96 240 128 208 160"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="16"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
}
