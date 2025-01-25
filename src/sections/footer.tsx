// @ts-nocheck
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { DownloadBtn } from "../components/download-btn";
import { toTitleCase } from '../additionalFunctions/additionalFunctions';

export const Footer = ({ footerTranslation }) => {
    const year = new Date().getFullYear();
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (emailRegex.test(email)) {
            setEmailSubmitted(true);
            setErrorMessage('');
            console.log(email);
        } else {
            setErrorMessage(footerTranslation.APP_EMAIL_VALID || 'Please enter a valid email address');
        }
    };

    const footerColumns = [
        [
            { link: "./pass-and-card", label: footerTranslation.FOOTER_pass_and_card || 'CoolPass / Prague Card' },
            { link: "./get-your-pass#using-coolpass", label: footerTranslation.FOOTER_USING_COOLPASS || 'Using CoolPass' },
            { link: "./pass-and-card#how-you-save", label: footerTranslation.FOOTER_how_you_save || 'How You Save' },
            { link: "./get-your-pass", label: footerTranslation.FOOTER_get_your_pass || 'Getting Your Pass' },
            { link: "./get-your-pass#sales-points", label: footerTranslation.FOOTER_sales_points || 'Sales & Collection Points' },
            { link: "./reviews", label: footerTranslation.FOOTER_reviews || 'Customer Reviews' }
        ],
        [
            { link: "./attractions", label: footerTranslation.ATTRACTIONS || 'ATTRACTIONS' },
            { link: "./attractions?category=sightseeing", label: footerTranslation.FOOTER_sightseeing_tours || 'Sightseeing Tours' },
            { link: "./areas", label: footerTranslation.FOOTER_areas || 'Prague Areas' },
            { link: "./news?type=notice", label: footerTranslation.FOOTER_closures || 'Closures & Notices' },
            { link: "./news?type=whats-on", label: footerTranslation.FOOTER_whats_on || "What's On" },
            { link: "./contact-us", label: footerTranslation.FOOTER_contact_us || 'Contact Us' }
        ],
        [
            { link: "./faq", label: footerTranslation.FOOTER_faq || 'FAQ' },
            { link: "./about-us", label: footerTranslation.FOOTER_about_us || 'About Us' },
            { link: "./terms-and-conditions", label: footerTranslation.FOOTER_terms_and_conditions || 'Terms and Conditions' },
            { link: "./cancellation-and-refund", label: footerTranslation.FOOTER_cancellation_and_refund || 'Cancellation & Refund' }
        ]
    ];

    return (
        <footer className="flex justify-center h-auto mt-[70px] text-white bg-bg">
            <div className="container mt-[30px] px-[8px]">
                <div className="grid gap-10 grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(3,1fr)] xl:grid-cols-[repeat(5,1fr)]">
                    {footerColumns.map((column, colIndex) => (
                        <ul key={colIndex} className="ml-[8px]">
                            {column.map((item, index) => (
                                <li
                                    key={index}
                                    className={`${
                                        item.link === "./faq"
                                            ? "bg-primary h-[48px] max-w-[157px] border border-primary w-auto text-center !mb-[12px] leading-[48px] rounded-[5px] uppercase"
                                            : ""
                                    } block text-sm font-semibold text-white mb-[10px] last:mb-0`}
                                >
                                    <Link to={item.link}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    ))}
                    <div className="mb-[32px] ml-[8px]">
                        <h3 className="mb-[12px] text-sm">
                            {footerTranslation.DOWNLOAD?.toUpperCase() || 'DOWNLOAD'}
                        </h3>
                        <h3 className="mb-[12px] text-sm">
                            {footerTranslation.FOOTER_prague_coolpass_app 
                                ? toTitleCase(footerTranslation.FOOTER_prague_coolpass_app) 
                                : 'Prague CoolPass App'}
                        </h3>
                        <div className="flex flex-col">
                            <a href="https://apps.apple.com/us/app/prague-coolpass/id1378275600" target="_blank" rel="noopener noreferrer">
                                <DownloadBtn image="/assets/images/appstore.9b997285.png" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.bookletia.coolpassprague" target="_blank" rel="noopener noreferrer">
                                <DownloadBtn image="/assets/images/googleplay.01cc5f25.png" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm mb-[13px]">
                            {footerTranslation.NEWS_AND_UPDATES || 'NEWS & UPDATES'}
                        </h3>
                        <div className="w-full">
                            <form onSubmit={handleSubscribe} className="w-[304px] min-w-[333px] flex items-center">
                                <label className="w-full">
                                    <input
                                        className="w-full h-[48px] indent-[24px] rounded-[5px] border-0 pr-[106px] text-sm"
                                        name="email"
                                        type="email"
                                        placeholder={footerTranslation.ENTER_EMAIL_PLACEHOLDER || 'Enter your e–mail'}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </label>
                                <button
                                    type="submit"
                                    className="-ml-[106px] text-[15px] bg-primary border-2 border-primary h-[48px] min-w-[106px] rounded-r-[5px] px-[15px] font-semibold uppercase"
                                >
                                    {footerTranslation.SUBSCRIBE_BUTTON || 'Subscribe'}
                                </button>
                            </form>
                            {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
                            {emailSubmitted && <p className="text-green-500 text-sm mt-2">
                                {footerTranslation.FOOTER_sub_text || 'Thank you!'}
                            </p>}
                        </div>
                        <div className="font-Marselis font-bold text-[19px] mx-[8px] mt-[22px] mb-[10px]">
                            {footerTranslation.FOOTER_year_card
                                ? footerTranslation.FOOTER_year_card.replace('$year', year)
                                : `CoolPass 2020-${year}`}
                        </div>
                        <div className="font-Marselis font-bold text-[19px] mx-[8px]">
                            {`Prague Card 1992-${year}`}
                        </div>
                    </div>
                </div>
                <div className="text-xs w-[294px] text-left mt-[31px] mx-[8px] mb-[50px]">
                    {footerTranslation.ALL_RIGHTS_RESERVED_LABEL || 'All rights reserved by Travel CoolPass Ltd. & Prague Card s.r.o.'}
                </div>
            </div>
        </footer>
    );
};
