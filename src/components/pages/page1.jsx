
import { people } from '../data/data.jsx'
import { useLanguage } from '../../context/LanguageContext'

function Page1() {
    const { language } = useLanguage()
    const person = people[0] // Pegando o João (primeiro da lista)


    const labels = {
        fullName: { pt: 'Nome completo', en: 'Full name' },
        birth: { pt: 'Nascimento', en: 'Birth' },
        parents: { pt: 'Progenitores', en: 'Parents' },
        mother: { pt: 'Mãe', en: 'Mother' },
        father: { pt: 'Pai', en: 'Father' },
        social: { pt: 'Redes Sociais', en: 'Socials' },
        contact: { pt: 'Contato', en: 'Contact' },
        lastYear: { pt: 'em 2024', en: 'in 2024' }
    }

    const born = (person.born && (person.born[language] || person.born)) || { data: '', city: '', state: '', country: '' }

    return (
        <div className='row m-3'>
            <div className='col-12 col-lg-8 order-2 p-3 order-md-1' style={{ textAlign: 'justify' }}>
                <h4>{person.name}.</h4>
                <p dangerouslySetInnerHTML={{ __html: person.description[language] }}></p>
            </div>
            <div className='col-12 col-md-6 col-lg-4 order-1 order-md-2 h-100 align-self-center mx-auto'>
                <div className=' p-3 d-flex flex-column bg-light border'>
                    <p className='mb-2 text-center'>{person.name}</p>
                    <img src={person.src} className="img-fluid mb-2 align-self-center w-100" style={{ maxWidth: '350px' }} alt={person.name} />
                    <p className='mb-2 text-center'>{person.lastName} {labels.lastYear[language]}</p>
                    <ul className="list-unstyled" >
                        <li><strong>{labels.fullName[language]}: </strong>{person.name}</li>
                        <li><strong>{labels.birth[language]}: </strong>{born.data + ", " + born.city + ", " + born.state + ", " + born.country}</li>
                        <li className="d-flex">
                            <strong>{labels.parents[language]}: </strong>
                            <ul className="list-unstyled text-left mb-0 ms-2">
                                <li>{labels.mother[language]}: {person.parents.mother}</li>
                                <li>{labels.father[language]}: {person.parents.father}</li>
                            </ul>
                        </li>
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
        </div>
    );
}

export default Page1;