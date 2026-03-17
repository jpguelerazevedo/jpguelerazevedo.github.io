import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useLanguage } from '../../utilities/LanguageContext'
import { post } from '../../utilities/data';

function Post() {
    const navigate = useNavigate()
    const { postName } = useParams()
    const { language } = useLanguage();

    // Função utilitária para transformar um título em slug/nome na url segurando caracteres especiais
    const slugify = (text) => text.toString().toLowerCase().trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-');

    const currentIndex = post.findIndex(p => {
        // Busca batendo o título em português formatado como slug contra o postName da URL
        return slugify(p.title.pt) === postName;
    });

    // Se digitou id inválido retorna mensagem
    if (currentIndex === -1) {
        return <div className='p-3 text-center'>Post não encontrado.</div>
    }

    const currentPost = post[currentIndex];
    const prevPost = post[currentIndex - 1];
    const nextPost = post[currentIndex + 1];

    // Helpers pros botões Next/Prev
    const getDestUrl = (p) => slugify(p.title.pt)

    return (
        <>
            <div className='bg-light p-3'>
                <div className='row m-0 p-0 pt-3'>
                    <div className='col-12 d-flex align-items-center justify-content-between mb-3'>
                        <button className='icon-link  btn btn-link' onClick={() => navigate('/post')}>
                            {'< ' + (language === 'pt' ? 'Voltar' : 'Back')}
                        </button>
                        <div className=' d-flex align-items-center justify-content-center gap-3'>
                            <button className='icon-link pe-0 btn btn-link' disabled={!prevPost} onClick={() => navigate(`/post/${getDestUrl(prevPost)}`)}>{'<'}</button>
                            <button className=' icon-link btn-link btn p-0'>{language === 'pt' ? 'Paginação' : 'Pagination'}</button>
                            <button className='icon-link ps-0 btn btn-link' disabled={!nextPost} onClick={() => navigate(`/post/${getDestUrl(nextPost)}`)}>{'>'}</button>
                        </div>
                    </div>


                    <div className='col-12 mt-4 '>
                        <div className='col-12 col-md-10 col-lg-8 mx-auto'>
                            <h6 className='text-center mb-0 text-muted'>{currentPost.subtitle[language]}</h6>
                            <h2 className='fw-bold text-center mb-4'>{currentPost.title[language]}</h2>


                        </div>


                        <div className='clearfix'>

                            <div className='float-md-start me-md-4 mb-2 text-left mx-auto' style={{ maxWidth: '100%', width: '500px' }}>
                                <img
                                    src={currentPost.image.url}
                                    alt={currentPost.image.alt[language] || ''}
                                    className='img-fluid mb-2 pt-md-2'
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <h6 className='text-muted small mb-0 pt-1 fst-italic'>{currentPost.data[language]} - {currentPost.local[language]}</h6>
                            </div>
                            <div></div>
                            <div className='text-break' dangerouslySetInnerHTML={{ __html: currentPost.content[language] }} style={{ textAlign: 'justify' }}></div>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Post;

