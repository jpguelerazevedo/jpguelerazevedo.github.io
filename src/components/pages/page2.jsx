
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext';

function Page2() {
    const { language } = useLanguage();
    const labels = {
        title: { pt: 'Projetos', en: 'Projects' },
        descriptionBadge: { pt: 'Descrição', en: 'Description' },
        viewProject: { pt: 'Ver projeto >', en: 'View project >' }
    }
    const [githubProjects, setGithubProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Busca os repositórios públicos do GitHub do usuário jpguelerazevedo
        fetch('https://api.github.com/users/jpguelerazevedo/repos')
            .then(response => response.json())
            .then(data => {
                if (!Array.isArray(data)) {
                    console.error("API não retornou uma lista de repositórios:", data);
                    setGithubProjects([]);
                    setLoading(false);
                    return;
                }

                // Ordena por data de atualização (mais recentes primeiro)
                const sortedData = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

                // Formata os dados da API para o mesmo formato dos projetos estáticos
                const formatted = sortedData.map(repo => ({
                    title: repo.name,
                    subtitle: repo.language || 'GitHub',
                    description: repo.description, // Mantém original ou null
                    link: repo.html_url,
                    repoName: repo.name,
                    owner: repo.owner?.login,
                    default_branch: repo.default_branch || 'main'
                }));
                setGithubProjects(formatted);
                setLoading(false);
            })
            .catch(error => {
                console.error("Erro ao buscar projetos do GitHub:", error);
                setGithubProjects([]); // Garante que em caso de erro, a lista fique vazia
                setLoading(false);
            });
    }, []);

    // Usa apenas os projetos do GitHub
    const todosProjetos = githubProjects;

    if (loading && githubProjects.length === 0) {
        // Opcional: mostrar loading ou apenas renderizar o que tem
    }

    const navigate = useNavigate()

    return (
        <div className='row m-3'>
            <div className='col-12  p-3'>
                <h3>{labels.title[language]}</h3>
            </div>
            {todosProjetos.map((projeto, index) => {
                const raw = projeto.description || (language === 'pt' ? 'Sem descrição.' : 'No description.')
                // const desc = raw && raw.length > 200 ? raw.slice(0, 200) + '...' : raw
                return (
                    <div key={index} className='col-12 col-lg-6 pb-3' style={{ height: '250px' }}>
                        <div className='p-3  border-start border-3 bg-light h-100 d-flex flex-column'>
                            <h4 className='fw-semibold'>{projeto.title}</h4>
                            <h6 className='text-muted'>{projeto.subtitle}</h6>
                            <p className='overflow-hidden m-0' style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', textOverflow: 'ellipsis' }}>
                                {raw}
                            </p>
                            <button className='icon-link btn btn-link align-self-start mt-auto p-0' onClick={() => navigate('/repo', { state: projeto })}>{labels.viewProject[language]}</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Page2;