import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useLanguage } from '../../utilities/LanguageContext'
import { post } from '../../utilities/data';

function Post() {
    const navigate = useNavigate()
    const location = useLocation();
    const { state } = location;
    const { language } = useLanguage();

    const currentIndex = post.findIndex(p => {
        // Se houver ID, usa o ID
        if (p.id && state.id) return p.id === state.id;
        // Senão, usa o título em português
        return p.title.pt === state.title.pt;
    });
    const prevPost = post[currentIndex - 1];
    const nextPost = post[currentIndex + 1];

    return (
        <>
            <div className='bg-light p-3'>
                <div className='row m-0 p-0 pt-3'>
                    <div className='col-12 d-flex align-items-center justify-content-between mb-3'>
                        <button className='icon-link  btn btn-link' onClick={() => navigate('/post')}>
                            {'< ' + 'Voltar'}
                        </button>
                        <div className=' d-flex align-items-center justify-content-center gap-3'>
                            <button className='icon-link pe-0 btn btn-link' disabled={!prevPost} onClick={() => navigate('/inPost', { state: prevPost })}>{'<'}</button>
                            <button className=' icon-link btn-link btn p-0'>Paginação</button>
                            <button className='icon-link ps-0 btn btn-link' disabled={!nextPost} onClick={() => navigate('/inPost', { state: nextPost })}>{'>'}</button>
                        </div>
                    </div>


                    <div className='col-12 mt-4 '>
                        <div className='col-12 col-md-10 col-lg-8 mx-auto'>
                            <h6 className='text-center mb-0 text-muted'>{state.subtitle[language]}</h6>
                            <h2 className='fw-bold text-center mb-4'>{state.title[language]}</h2>


                        </div>


                        <div className='clearfix'>

                            <div className='float-md-start me-md-4 mb-2 text-left mx-auto' style={{ maxWidth: '100%', width: '500px' }}>
                                <img
                                    src={state.image.url}
                                    alt={state.image.alt[language]}
                                    className='img-fluid mb-2 pt-md-2'
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <h6 className='text-muted small mb-0 pt-1 fst-italic'>{state.data[language]} - {state.local[language]}</h6>
                            </div>
                            <div></div>
                            <p className='' dangerouslySetInnerHTML={{ __html: state.content[language] }} style={{ textAlign: 'justify' }}></p>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Post;

