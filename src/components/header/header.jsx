import { Link } from 'react-router-dom'
import { people } from '../../utilities/data.jsx'
import { useLanguage } from '../../utilities/LanguageContext.jsx'
import { GitHubIcon, LinkedInIcon, InstagramIcon } from '../../utilities/icons.jsx'

// isHome: na página inicial o nome é o <h1>; nos posts o <h1> é o título do post
function Header({ isHome = false }) {
    const { language } = useLanguage()
    const person = people[0]

    const socials = [
        { label: 'GitHub', href: person.socialAcount.github, Icon: GitHubIcon },
        { label: 'LinkedIn', href: person.socialAcount.linkedin, Icon: LinkedInIcon },
        { label: 'Instagram', href: person.socialAcount.instagram, Icon: InstagramIcon },
    ]

    const name = <Link className='site-name' to='/'>{person.name}</Link>

    return (
        <header className='site-header'>
            <div className='site-id'>
                {isHome ? <h1 className='site-name-heading'>{name}</h1> : name}
                <span className='site-role'>{person.role[language]}</span>
            </div>
            <nav aria-label={language === 'pt' ? 'Redes sociais' : 'Elsewhere'}>
                <ul className='socials'>
                    {socials.map(({ label, href, Icon }) => (
                        <li key={label}>
                            <a href={href} target='_blank' rel='noopener noreferrer' aria-label={label}>
                                <Icon size={16} />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header
