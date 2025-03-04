import React from 'react';
import Image from "next/image";

const Contacts = () => {
    return (
        <div className={'contacts-section'}>
            {/*<Image alt={'contacs'} src={backImage} fill={true}/>*/}

            <div className={'upper'}>
                <div className="left">
                    <div className="bg1"></div>
                    <div className="bg2"></div>
                </div>

                <div className="right">
                    <div className="up">
                        <div className="column">
                            <h1>E-mail</h1>
                            <span>info@fixworks-team.com</span>
                        </div>
                        <div className="column">
                            <h1>Contacts numbers</h1>
                            <span>+ 971 56 508 31 49</span>
                            <span>+ 971 56 714  01 01</span>
                        </div>
                    </div>
                    <div className="down">
                        <h1>Follow us</h1>
                        <div className="row">
                            <div className="col">Instagram</div>
                            <div className="col">Tiktok</div>
                            <div className="col">Youtube</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;