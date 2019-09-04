import React from 'react'
import { withTranslation } from 'react-i18next';

function LanguageSwitcherItem({ language, switchLanguage }) {
    return (
        <span onClick={switchLanguage}>{language}</span>
    )
}

function LanguageSwitcher({ t, i18n }) {
    const languages = Object.keys(i18n.options.resources)

    const switchLanguage = (language) => () => i18n.changeLanguage(language)
    return (
        <div>
            {languages.map(language => (
            <LanguageSwitcherItem 
            key={language} 
            language={language} 
            switchLanguage={switchLanguage(language)} 
            />)
            )}
        </div>
    )
}

export default withTranslation()(LanguageSwitcher)