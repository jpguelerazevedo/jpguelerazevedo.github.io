import { useState } from 'react';
import './navbar.css'
import { NavLink, useLocation } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext';


function navbar() {
    const { language } = useLanguage();
    const location = useLocation()
    const isProjectsRoute = location.pathname.startsWith('/projetos')
    const isRepoRoute = location.pathname.startsWith('/repo')
    const isPostpageRoute = location.pathname.startsWith('/post')
    const isPostRoute = location.pathname.startsWith('/inPost')

    function scrollMainToBottom() {
        try {
            const top = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)
            window.scrollTo({ top, behavior: 'smooth' })
        } catch (e) {
            // fallback
            window.scrollTo(0, document.documentElement.scrollHeight || document.body.scrollHeight)
        }
    }

    return (
        <nav>
            <div className="nav nav-tabs" role="tablist">
                <NavLink to="/" onClick={scrollMainToBottom} className="nav-link" end>{language === 'pt' ? 'Perfil' : 'Profile'}</NavLink>
                <NavLink to="/projetos" onClick={scrollMainToBottom} className={(isProjectsRoute || isRepoRoute) ? 'nav-link active' : 'nav-link'}>{language === 'pt' ? 'Projetos' : 'Projects'}</NavLink>
                
                {isRepoRoute && (
                    <style>{`.nav .nav-link.active { background-color: var(--bs-light) !important; border-bottom: 2px solid var(--bs-light) !important; }`}</style>
                )}
                <NavLink to="/post" onClick={scrollMainToBottom} className={(isPostpageRoute || isPostRoute) ? 'nav-link active' : 'nav-link'}>{language === 'pt' ? 'Postagens' : 'Posts'}</NavLink>
                {isPostRoute && (
                    <style>{`.nav .nav-link.active { background-color: var(--bs-light) !important; border-bottom: 2px solid var(--bs-light) !important; }`}</style>
                )}
                {/* <NavLink to="/disabled" className="nav-link disabled">Modo IA</NavLink> */}
                
                


            </div>
        </nav>
    )
}

export default navbar 
