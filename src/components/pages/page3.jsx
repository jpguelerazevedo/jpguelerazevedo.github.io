import React from 'react'
import { post } from '../data/data';
import './style.css'
import { useLanguage } from '../../context/LanguageContext'
import { useNavigate } from 'react-router-dom'

function page3() {
    const navigate = useNavigate()
    const { language } = useLanguage()
    const labels = {
        title: { pt: 'Postagens', en: 'Posts' },
        viewPost: { pt: 'Ler mais >', en: 'Read more >' }
    }

    return (


        <div className='row m-3 '>
            <div className='col-12 p-3 pb-0'>
                <h3>{labels.title[language]}</h3>
            </div>
            {post.map((p, index) => {
                return (
                    <div key={index} className='col-12 pb-3 pt-3'>
                        <div className='row align-items-stretch'>
                            <div className='col-lg-5 col-12 pe-lg-0'>
                                <img src={p.image.url} alt={p.image.alt} className='img-fluid w-100 h-100 object-fit-cover' />
                            </div>
                            <div className='bg-light p-3 mx-auto mx-lg-0 m-lg-3 ms-lg-0 col-lg-6 col-10 d-flex flex-column justify-content-between custom-card-border' >
                                <div>
                                    <h6 className='text-muted text-uppercase mt-lg-3  mb-0 '>{p.subtitle[language]}</h6>
                                    <h4 className='mb-1 fw-semibold'>{p.title[language]}</h4>
                                    <h6 className='overflow-hidden mb-3 m-lg-0' style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', textOverflow: 'ellipsis' }}>
                                        {p.description[language]}
                                    </h6>
                                </div>

                                <div>
                                    <div className='d-flex align-items-baseline gap-2'>
                                        <p className='text-muted small mb-0 mb-lg-3 lh-1'>
                                            {p.data[language]} - {p.local[language]}
                                        </p>
                                        <button className='icon-link btn btn-link ms-auto ms-lg-auto p-0 mb-0 mb-lg-3 pe-lg-3 text-nowrap flex-shrink-0 align-self-baseline' onClick={() => navigate('/inPost', { state: p })}>{labels.viewPost[language]}</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default page3;
