import { people } from '../../utilities/data.jsx'
import { useLanguage } from '../../utilities/LanguageContext.jsx'

function Footer() {
    const { language, toggleLanguage } = useLanguage()
    const person = people[0]

    return (
        <footer className='site-footer'>
            <span>© {new Date().getFullYear()} {person.name}</span>
            <button type='button' className='link' lang={language === 'pt' ? 'en' : 'pt'}
                onClick={() => toggleLanguage(language === 'pt' ? 'en' : 'pt')}>
                {language === 'pt' ? 'English' : 'Português'}
            </button>
        </footer>
    )
}

export default Footer
