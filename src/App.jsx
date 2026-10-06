import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from './utilities/ScrollToTop.jsx'
import './App.css'
import Home from './components/pages/home.jsx'
import Post from './components/post/post.jsx'
import { useLanguage } from './utilities/LanguageContext.jsx'

function App() {
    const { language } = useLanguage()

    useEffect(() => {
        document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
    }, [language])

    return (
        <>
            <a href='#content' className='skip-link'>{language === 'pt' ? 'Pular para o conteúdo' : 'Skip to content'}</a>
            <ScrollToTop />
            <div className='page'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/post/:postName' element={<Post />} />
                    <Route path='*' element={<Navigate to='/' replace />} />
                </Routes>
            </div>
        </>
    )
}

export default App
