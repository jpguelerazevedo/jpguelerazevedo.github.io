import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { people, post, sites } from '../../utilities/data.jsx'
import { useLanguage } from '../../utilities/LanguageContext.jsx'
import { postUrl, shortDate } from '../../utilities/posts.js'
import { GitHubIcon, ExternalIcon } from '../../utilities/icons.jsx'
import Header from '../header/header.jsx'
import Footer from '../footer/footer.jsx'

const MIN_STRIP_ITEMS = 8

function Home() {
    const { language } = useLanguage()
    const person = people[0]
    const [projects, setProjects] = useState([])

    const labels = {
        about: { pt: 'Sobre', en: 'About' },
        sites: { pt: 'Sites', en: 'Websites' },
        projects: { pt: 'Projetos', en: 'Projects' },
        allProjects: { pt: 'Todos os projetos', en: 'All projects' },
        star: { pt: 'estrela', en: 'star' },
        stars: { pt: 'estrelas', en: 'stars' },
        noDescription: { pt: 'Sem descrição.', en: 'No description.' },
        writing: { pt: 'Postagens', en: 'Writing' },
        ai: { pt: 'IA & Automação', en: 'AI & Automation' },
        contact: { pt: 'Contato', en: 'Contact' },
        contactText: { pt: 'Para um projeto ou uma dúvida, escreva para', en: 'For a project or a question, write to' },
    }

    // Repete a lista até ter itens suficientes para a faixa preencher a coluna inteira
    const stripSites = Array.from({ length: Math.ceil(MIN_STRIP_ITEMS / sites.length) }, () => sites).flat()

    useEffect(() => {
        document.title = `${person.name} - ${person.role[language]}`
    }, [language])

    useEffect(() => {
        // Busca os repositórios públicos do GitHub e mantém só os fixados, na ordem do perfil
        fetch(`https://api.github.com/users/${person.codiname}/repos?per_page=100`)
            .then(response => response.json())
            .then(data => {
                if (!Array.isArray(data)) {
                    console.error('API não retornou uma lista de repositórios:', data)
                    return
                }
                setProjects(person.pinnedRepos.map(name => data.find(repo => repo.name === name)).filter(Boolean))
            })
            .catch(error => console.error('Erro ao buscar projetos do GitHub:', error))
    }, [])

    return (
        <>
            <Header isHome />
            <main id='content'>
                <section id='about' className='section prose'>
                    <h2 className='section-title'>{labels.about[language]}</h2>
                    <div dangerouslySetInnerHTML={{ __html: person.about[language] }}></div>
                </section>

                <section id='sites' className='section section-tight' aria-label={labels.sites[language]}>
                    <div className='strip'>
                        <div className='strip-mask'>
                            <div className='strip-track' style={{ animationDuration: `${stripSites.length * 5}s` }}>
                                {/* Duas cópias iguais lado a lado: quando a primeira sai da tela, a animação recomeça sem salto */}
                                {[false, true].map(isCopy => (
                                    <div key={isCopy} className='strip-copy' aria-hidden={isCopy || undefined}>
                                        {stripSites.map((site, index) => {
                                            const preview = site.image
                                                ? <img src={site.image} alt={site.name} />
                                                : <span className='strip-placeholder'>Preview</span>
                                            // Sem link ainda: mostra só o preview, sem ser clicável
                                            return site.url ? (
                                                <a key={index} href={site.url} title={site.name} target='_blank' rel='noopener noreferrer'
                                                    tabIndex={isCopy || index >= sites.length ? -1 : undefined}>
                                                    {preview}
                                                </a>
                                            ) : (
                                                <span key={index} title={site.name}>{preview}</span>
                                            )
                                        })}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section id='projects' className='section'>
                    <h2 className='section-title'>{labels.projects[language]}</h2>
                    <ul className='list'>
                        {projects.map(repo => (
                            <li key={repo.id}>
                                <a className='item' href={repo.html_url} target='_blank' rel='noopener noreferrer'>
                                    <span className='item-head'>
                                        <span className='item-title'>{repo.name}<ExternalIcon /></span>
                                        {repo.stargazers_count > 0 ? (
                                            <span className='item-stat'><GitHubIcon size={13} />{repo.stargazers_count} {(repo.stargazers_count === 1 ? labels.star : labels.stars)[language]}</span>
                                        ) : repo.language && (
                                            <span className='item-stat'>{repo.language}</span>
                                        )}
                                    </span>
                                    <span className='item-desc'>{repo.description || labels.noDescription[language]}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <p className='list-more'>
                        <a href={`${person.socialAcount.github}?tab=repositories`} target='_blank' rel='noopener noreferrer'>
                            {labels.allProjects[language]} <span aria-hidden='true'>→</span>
                        </a>
                    </p>
                </section>

                <section id='writing' className='section'>
                    <h2 className='section-title'>{labels.writing[language]}</h2>
                    <ul className='list'>
                        {post.map(p => (
                            <li key={p.title.pt}>
                                <Link className='item' to={postUrl(p)}>
                                    <span className='item-head'>
                                        <span className='item-title'>{p.title[language]}</span>
                                        <time className='item-stat' dateTime={p.data.iso}>{shortDate(p.data.iso, language)}</time>
                                    </span>
                                    <span className='item-desc'>{p.description[language]}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>

                <section id='ai' className='section prose'>
                    <h2 className='section-title'>{labels.ai[language]}</h2>
                    <div dangerouslySetInnerHTML={{ __html: person.ai[language] }}></div>
                </section>

                <section id='contact' className='section prose'>
                    <h2 className='section-title'>{labels.contact[language]}</h2>
                    <p>{labels.contactText[language]} <a href={`mailto:${person.email}`}>{person.email}</a>.</p>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home
