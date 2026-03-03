import { post } from '../../utilities/data';
import './style.css'
import { useEffect } from 'react';
import { useLanguage } from '../../utilities/LanguageContext'
import { useNavigate } from 'react-router-dom'

function page3() {
    const navigate = useNavigate()
    const { language } = useLanguage()

    useEffect(() => {
        // Atualiza o título da aba quando a página carrega ou o idioma muda
        document.title = `JLab - ${labels.title[language]}`;
    }, [language]);

    const labels = {
        title: { pt: 'Postagens', en: 'Posts' },
        viewPost: { pt: 'Ler mais >', en: 'Read more >' }
    }

    // Função utilitária para transformar um título em slug/nome na url pegando do texto
    const slugify = (text) => text.toString().toLowerCase().trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-');

    return (


        <div className='row m-3 justify-content-center'>
            <div className='col-12 p-3 text-center'>
                <h3>{labels.title[language]}</h3>
            </div>
            {post.map((p, index) => {
                return (
                    <div key={index} className='row pt-0 p-3 pe-2 ps-2 p-lg-2 ps-lg-0'>

                            <div className='col-lg-5 col-12 p-0 ps-lg-2 '>
                                <img src={p.image.url} alt={p.image.alt} className='img-fluid w-100 h-100 object-fit-cover border' />
                            </div>
                            <div className='bg-light p-3 mx-auto mx-lg-0 m-lg-4 ms-lg-0 col-lg-7 col-10 d-flex flex-column justify-content-between custom-card-border' >
                                <div className='d-flex flex-column gap-2'>
                                    <h6 className='text-muted text-uppercase mt-lg-3  mb-0 '>{p.subtitle[language]}</h6>
                                    <h4 className='mb-1 fw-semibold'>{p.title[language]}</h4>
                                    <h6 className='overflow-hidden mb-3 m-lg-0' style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', textOverflow: 'ellipsis' }}>
                                        {p.description[language]}
                                    </h6>
                                </div>
                                <div className='d-flex align-items-baseline gap-2 mt-auto'>
                                    <p className='text-muted small mb-0  lh-1'>
                                        {p.data[language]} - {p.local[language]}
                                    </p>
                                    <button className='icon-link btn btn-link ms-auto ms-lg-auto p-0 mb-0 mb-lg-3  text-nowrap flex-shrink-0 align-self-baseline' onClick={() => navigate(`/post/${slugify(p.title.pt)}`)}>{labels.viewPost[language]}</button>
                                </div>
                            </div>
                      
                    </div>
                )
            })}
        </div>
    )
}
export default page3;
