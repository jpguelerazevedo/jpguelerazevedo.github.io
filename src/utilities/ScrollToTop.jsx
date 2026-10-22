import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        // Com âncora na URL (ex.: /#writing) vai até a seção; sem âncora, volta ao topo
        const target = hash && document.getElementById(hash.slice(1));
        if (target) target.scrollIntoView();
        else window.scrollTo(0, 0);
    }, [pathname, hash]);
    return null;
}

export default ScrollToTop;
