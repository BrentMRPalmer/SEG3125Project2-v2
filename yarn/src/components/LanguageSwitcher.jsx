import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const {i18n} = useTranslation();
    const [language, setLanguage] = useState(i18n.language);

    const changeLanguage = () => {
        const newLanguage = language === 'en' ? 'fr' : 'en';
        i18n.changeLanguage(newLanguage);
        setLanguage(newLanguage);
    };

    return (
        <container className="space-between" aria-label="Select language">
            <img
                src="/icons/globe.png"
                width="24"
                height="24"
                className="d-inline-block align-top"
                alt="globe"
                aria-hidden="true"
            />
            <button className="btn-custom3" onClick={changeLanguage} aria-label="Confirm language change">
                {language === 'en' ? 'Français' : 'English'}
            </button>
        </container>
    );
}

export default LanguageSwitcher