import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useLanguage } from '../../utilities/LanguageContext'
import { people, post } from '../../utilities/data'
import { slugify, postUrl, readingTime } from '../../utilities/posts.js'
import Header from '../header/header.jsx'
import Footer from '../footer/footer.jsx'

function Post() {
    const { postName } = useParams()
    const { language } = useLanguage()

    const labels = {
        notFound: { pt: 'Post não encontrado.', en: 'Post not found.' },
        back: { pt: 'Voltar para o início', en: 'Back to home' },
        minRead: { pt: 'min de leitura', en: 'min read' },
        more: { pt: 'Mais postagens', en: 'More writing' },
    }

    // Busca batendo o título em português formatado como slug contra o postName da URL
    const currentPost = post.find(p => slugify(p.title.pt) === postName)
    const otherPosts = post.filter(p => p !== currentPost)

    useEffect(() => {
        document.title = currentPost ? `${currentPost.title[language]} - ${people[0].name}` : people[0].name
    }, [language, currentPost])

    return (
        <>
            <Header />
            <main id='content'>
                {!currentPost ? (
                    <section className='section prose'>
                        <p>{labels.notFound[language]} <Link to='/'>{labels.back[language]}</Link></p>
                    </section>
                ) : (
                    <article className='article'>
                        <h1>{currentPost.title[language]}</h1>
                        <p className='meta'>
                            <time dateTime={currentPost.data.iso}>{currentPost.data[language]}</time> · {readingTime(currentPost.content[language])} {labels.minRead[language]}
                        </p>
                        <figure className='figure'>
                            <img src={currentPost.image.url} alt={currentPost.image.alt[language] || ''} />
                        </figure>
                        <div className='post' dangerouslySetInnerHTML={{ __html: currentPost.content[language] }}></div>

                        <section className='article-end'>
                            <h2 className='section-title'>{labels.more[language]}</h2>
                            <ul className='list'>
                                {otherPosts.map(p => (
                                    <li key={p.title.pt}>
                                        <Link className='item' to={postUrl(p)}>
                                            <span className='item-head'>
                                                <span className='item-title'>{p.title[language]}</span>
                                            </span>
                                            <span className='item-desc'>{p.description[language]}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </article>
                )}
            </main>
            <Footer />
        </>
    )
}

export default Post
