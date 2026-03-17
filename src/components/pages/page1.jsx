
import { people } from '../../utilities/data.jsx'
import { useLanguage } from '../../utilities/LanguageContext.jsx'
import { useEffect } from 'react';

function Page1() {
    const { language } = useLanguage()

    const labels = {
        title: { pt: 'Perfil', en: 'Profile' },
        fullName: { pt: 'Nome completo', en: 'Full name' },
        birth: { pt: 'Nascimento', en: 'Birth' },
        parents: { pt: 'Progenitores', en: 'Parents' },
        mother: { pt: 'Mãe', en: 'Mother' },
        father: { pt: 'Pai', en: 'Father' },
        social: { pt: 'Redes Sociais', en: 'Socials' },
        contact: { pt: 'Contato', en: 'Contact' },
        lastYear: { pt: 'em 2024', en: 'in 2024' },
        lenguage: { pt: 'Idioma', en: 'Language' },
    }

    useEffect(() => {
        // Atualiza o título da aba quando a página carrega ou o idioma muda
        document.title = `JLab - ${labels.title[language]}`;
    }, [language]);

    const person = people[0] // Pegando o João (primeiro da lista)

    const born = (person.born && (person.born[language] || person.born)) || { data: '', city: '', state: '', country: '' }

    return (
        <div className='row m-3'>
            <div className='col-12 text-center p-3'>
                <h3 >{labels.title[language]}</h3>
            </div>
            <div className='col-12 p-2 pt-0 pb-1'>
                <div className='clearfix'>
                    <div className='float-md-end pt-2  ms-md-4  col-12 col-md-6 col-lg-4 text-break'>
                        <div className='p-3 d-flex flex-column bg-light border'>
                            <p className='mb-2 text-center'>{person.name}</p>
                            <img src={person.src} className="img-fluid mb-2 align-self-center w-100" style={{ maxWidth: '350px' }} alt={person.name} />
                            <p className='mb-0 text-center'>{person.lastName} {labels.lastYear[language]}</p>
                            <ul className="list-unstyled" >
                                <li><strong>{labels.fullName[language]}: </strong>{person.name}</li>
                                <li><strong>{labels.birth[language]}: </strong>{born.data + ", " + born.city + ", " + born.state + ", " + born.country}</li>
                                {/*<li className="d-flex">
                            <strong>{labels.parents[language]}: </strong>
                            <ul className="list-unstyled text-left mb-0 ms-2">
                                <li>{labels.mother[language]}: {person.parents.mother}</li>
                                <li>{labels.father[language]}: {person.parents.father}</li>
                            </ul>
                        </li> */}
                                <li><strong>{labels.lenguage[language]}: </strong>{person.linguage[language]}</li>
                                <li className='d-flex flex-wrap align-items-center'>
                                    <strong className="me-2 ">{labels.social[language]}:</strong>
                                    <a className='icon-link ' href={person.socialAcount.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                                    <span className="mx-2">.</span>
                                    <a className='icon-link ' href={person.socialAcount.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                                    <span className="mx-2">.</span>
                                    <a className='icon-link ' href={person.socialAcount.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                </li>
                                <li>
                                    <strong>{labels.contact[language]}: </strong><a className='icon-link ' href={`mailto:${person.email}`}>{person.email}</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='pt-3 pt-md-0' style={{ textAlign: 'justify' }}>
                        <div className='post-content' dangerouslySetInnerHTML={{ __html: person.description[language] }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page1;