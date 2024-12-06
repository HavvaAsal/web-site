import React from "react";
import translations from "./translations";
import { useLanguage } from "../context/LanguageContext";

const Profile = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <section className="bg-[#4731D3] dark:bg-[#171043] text-white py-12 px-8">
            <div className="max-w-4xl mx-auto">

                <h1 className="text-6xl font-semibold text-[#CBF281] mb-4 text-center"> {translations[language].profileTitle}</h1>
                <div className="flex space-x-12">        {/* Ekranı Üç Bölüme Ayırıyor*/}

                    {/*****Sol Taraf *****/}
                    <div className="w-1/3">
                        <h2 className="text-4xl font-semibold text-[#FFFFFF] mb-4">{translations[language].profileInfo}</h2>
                        <p className="text-lg mb-4 text-[#CBF281]">{translations[language].dateOfBirth} <span className="text-[#FFFFFF]">26.05.1999</span></p>
                        <p className="text-lg mb-4 text-[#CBF281]">{translations[language].residency} <span className="text-[#FFFFFF]">Denizli</span></p>
                        <p className="text-lg mb-4 text-[#CBF281]">{translations[language].education} <span className="text-[#FFFFFF]">Adnan Menderes Ünv. Matematik Lisans</span></p>
                        <p className="text-lg mb-4 text-[#CBF281]">{translations[language].role} <span className="text-[#FFFFFF]">Frontend, UI</span></p>
                    </div>

                    {/***** Ortada Resim *****/}
                    <div className="w-1/3 flex justify-center items-center">
                        <img src="https://s3-alpha-sig.figma.com/img/ec36/93fd/2fc15cffc612b2448fb1f38e4c8c72fd?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SYSrxLdI1~bl4daQvgWUtYHELpqwWuTwa6V-2boQI9zjrsxuoosDkSMGUzCm7EUSOrsnd0O-8UmtjGrEyVCahioihPvh2RQZSVxLbABI0Xq5TTIk~zJZqSiZLlsFxArEJwYSOBA1PMGK3tXTRnGaefX~BYFKkJym-BmBjrksONASFwb2nQ3bLtfFL7IPDUsITLgDC0oQdY3lGf-KbdHKQJKgZYETs6slp-U-R4~kSKGx6ttpBRmjFNn~IliykJrBn-yS0lFWnQ7Kb-edx~JYAByGV2nahmDI0~pSWOt0eQhfqvVQRpISHCkfS9SWBSDScCruo-Kfk6lq1Uc5d-hs5Q__" alt="Profile" className="w-full h-full object-cover rounded" />
                    </div>

                    {/***** Sağ Taraf ******/}
                    <div className="w-1/3">
                        <h2 className="text-4xl font-semibold text-[#FFFFFF] mb-4">{translations[language].about}</h2>
                        <p className="text-lg text-[#FFFFFF]">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.
                            Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Profile;
