import React from 'react'
import { withTranslation } from 'react-i18next';
import './languageSwitcher.scss'

function LanguageSwitcherItem({ language, switchLanguage }) {
    return (
        <span className="language-switcher-item" onClick={switchLanguage}>{language}</span>
    )
}

function LanguageSwitcher({ t, i18n }) {
    const languages = Object.keys(i18n.options.resources).filter(item => item !== i18n.language)
    const switchLanguage = (language) => () => i18n.changeLanguage(language)
    return (
        <div className="language-switcher">
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