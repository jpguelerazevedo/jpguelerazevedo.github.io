import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Page1 from './components/pages/page1.jsx'
import Page2 from './components/pages/page2.jsx'
import Page3 from './components/pages/page3.jsx'
import RepoNav from './components/repository/repoNav.jsx'
import Post from './components/post/post.jsx'
import Navbar from './components/navbar/navbar.jsx'
import { people } from './components/data/data.jsx'
import brFlag from './assets/brasil.png';
import usFlag from './assets/eua.png';
import { useLanguage } from './context/LanguageContext';

function App() {
    const { language, toggleLanguage } = useLanguage();
    return (
        <>
            <div className="container justify-content-center align-items-center">
                <div className='row text-center mb-5'>
                    <div className='col-12'>
                        <img className='img-fluid align-self-center w-100' src="letra-j.png" alt="" style={{ maxWidth: '550px' }} />
                        <h6 className='mb-1'>{people[0].codiname} Lab's</h6>
                    </div>
                    <div className='col-12'>
                        <div className='align-items-center'>
                            <button className="btn pe-2 p-0 border-0" type="button" onClick={() => toggleLanguage('pt')}>
                                <img src={brFlag} alt="Brasil" style={{ width: '30px', height: '20px', objectFit: 'cover', opacity: language === 'pt' ? 1 : 0.5 }} />
                            </button>
                            <button className="btn p-0 border-0" type="button" onClick={() => toggleLanguage('en')}>
                                <img src={usFlag} alt="EUA" style={{ width: '30px', height: '20px', objectFit: 'cover', opacity: language === 'en' ? 1 : 0.5 }} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <Navbar />
                    </div>
                </div>
                <div className="mb-5  border border-top-0 overflow-auto" style={{ height: '75vh' }}s>
                    <Routes>
                        <Route path="/" element={<Page1 />} />
                        <Route path="/projetos" element={<Page2 />} />
                        <Route path="/repo" element={<RepoNav />} />
                        <Route path="/post" element={<Page3 />} />
                        <Route path="/inPost" element={<Post />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App
