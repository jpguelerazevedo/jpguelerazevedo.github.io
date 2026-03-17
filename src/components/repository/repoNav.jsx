import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useLanguage } from '../../utilities/LanguageContext'

export default function RepoNav() {
    const { language } = useLanguage()
    const navigate = useNavigate()
    const { repoName } = useParams()

    const [projeto, setProjeto] = useState(null)

    const labels = {
        back: { pt: '< Voltar', en: '< Back' },
        openOnGitHub: { pt: 'Abrir no GitHub >', en: 'Open on GitHub >' },
        noDescription: { pt: 'Sem descrição.', en: 'No description.' },
        root: { pt: 'Raiz', en: 'Root' },
        loadingStructure: { pt: 'Carregando estrutura...', en: 'Loading structure...' },
        emptyStructure: { pt: 'Estrutura vazia ou não disponível.', en: 'Empty or unavailable structure.' },
        loadingFile: { pt: 'Carregando arquivo...', en: 'Loading file...' },
        noFileSelected: { pt: 'Nenhum arquivo selecionado.', en: 'No file selected.' },
    }

    const [treeEntries, setTreeEntries] = useState([])
    const [nested, setNested] = useState([])
    const [currentFolder, setCurrentFolder] = useState('')
    const [selectedPath, setSelectedPath] = useState('')
    const [fileContent, setFileContent] = useState(null)
    const [fileType, setFileType] = useState(null) // 'text' | 'image' | null

    const [loadingTree, setLoadingTree] = useState(false)
    const [loadingFile, setLoadingFile] = useState(false)
    const [loadingRepo, setLoadingRepo] = useState(true)

    // Efeito para buscar as informações detalhadas do repositório pelo nome (fixando o dono)
    useEffect(() => {
        if (!repoName) return;
        const _owner = 'jpguelerazevedo'; // fixo conforme solicitado

        async function fetchRepoData() {
            setLoadingRepo(true)
            try {
                const res = await fetch(`https://api.github.com/repos/${_owner}/${repoName}`)
                const data = await res.json()
                if (res.ok) {
                    setProjeto({
                        title: data.name,
                        subtitle: data.language || 'GitHub',
                        description: data.description,
                        link: data.html_url,
                        repoName: data.name,
                        owner: data.owner?.login,
                        default_branch: data.default_branch || 'main'
                    })
                } else {
                    console.error("Erro ao buscar repo", data)
                    setProjeto(null)
                }
            } catch (error) {
                console.error("Erro no fetchRepoData:", error)
            } finally {
                setLoadingRepo(false)
            }
        }
        fetchRepoData();
    }, [repoName])

    useEffect(() => {
        if (!projeto) return
        async function loadTree() {
            setLoadingTree(true)
            try {
                const owner = projeto.owner || projeto.repoOwner || projeto.owner_login || projeto.owner_login
                const repo = projeto.repoName || projeto.name
                const branch = projeto.default_branch || projeto.branch || 'main'
                const branchRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/branches/${branch}`)
                const branchJson = await branchRes.json()
                const treeSha = branchJson?.commit?.commit?.tree?.sha
                if (!treeSha) {
                    setTreeEntries([])
                    setNested([])
                    return
                }
                const treeRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/trees/${treeSha}?recursive=1`)
                const treeJson = await treeRes.json()
                const entries = Array.isArray(treeJson.tree) ? treeJson.tree : []
                setTreeEntries(entries)
                setNested(buildTree(entries))
            } catch (err) {
                console.error('Erro ao carregar árvore', err)
                setTreeEntries([])
                setNested([])
            } finally {
                setLoadingTree(false)
            }
        }
        loadTree()
    }, [projeto])

    function buildTree(entries) {
        const root = []
        const map = {}
        entries.forEach(entry => {
            const parts = entry.path.split('/')
            let currentList = root
            let currentPath = ''
            parts.forEach((part, idx) => {
                currentPath = currentPath ? `${currentPath}/${part}` : part
                if (!map[currentPath]) {
                    const isLeaf = idx === parts.length - 1
                    const node = { name: part, path: currentPath, type: isLeaf ? entry.type : 'tree', children: [] }
                    map[currentPath] = node
                    if (idx === 0) currentList.push(node)
                    else {
                        const parentPath = currentPath.split('/').slice(0, -1).join('/')
                        if (map[parentPath]) map[parentPath].children.push(node)
                    }
                }
                currentList = map[currentPath].children
            })
        })
        return root
    }

    function getNodesAtPath(nestedRoot, path) {
        if (!path) return nestedRoot || []
        const parts = path.split('/')
        let nodes = nestedRoot || []
        for (const part of parts) {
            const found = nodes.find(n => n.name === part && n.type === 'tree')
            if (!found) return []
            nodes = found.children
        }
        return nodes
    }

    async function openFile(path) {
        if (!projeto) return
        setLoadingFile(true)
        setSelectedPath(path)
        setFileContent(null)
        setFileType(null)
        try {
            const owner = projeto.owner || projeto.repoOwner || projeto.owner_login
            const repo = projeto.repoName || projeto.name
            const branch = projeto.default_branch || projeto.branch || 'main'
            const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`)
            const json = await res.json()
            if (json && json.content && json.encoding === 'base64') {
                // Detect image by extension and show as data URL, otherwise decode as text
                const ext = path.split('.').pop().toLowerCase()
                const imageTypes = {
                    png: 'image/png',
                    jpg: 'image/jpeg',
                    jpeg: 'image/jpeg',
                    gif: 'image/gif',
                    webp: 'image/webp',
                    svg: 'image/svg+xml',
                    bmp: 'image/bmp',
                }
                const b64 = json.content.replace(/\n/g, '')
                if (imageTypes[ext]) {
                    setFileType('image')
                    setFileContent(`data:${imageTypes[ext]};base64,${b64}`)
                } else {
                    setFileType('text')
                    // Decodifica base64 preservando UTF-8 (acentos)
                    try {
                        const binary = atob(b64)
                        const bytes = Uint8Array.from(binary.split('').map(c => c.charCodeAt(0)))
                        const decoder = new TextDecoder('utf-8')
                        setFileContent(decoder.decode(bytes))
                    } catch (e) {
                        // Fallback para navegadores antigos
                        setFileContent(decodeURIComponent(escape(atob(b64))))
                    }
                }
            } else {
                setFileContent(null)
            }
        } catch (err) {
            console.error('Erro ao abrir arquivo', err)
            setFileContent(null)
        } finally {
            setLoadingFile(false)
        }
    }

    if (loadingRepo || !projeto) {
        return <div className="p-5 text-center">{language === 'en' ? 'Loading repository information...' : 'Carregando informações do repositório...'}</div>
    }

    return (
        <>
            <div className='bg-light p-3'>
                <div className='row m-0 p-0 pt-3'>
                    <div className='col-12 justify-content-between d-flex'>
                        <button className='icon-link  btn btn-link' onClick={() => navigate('/projetos')}>
                            {labels.back[language]}
                        </button>
                        <a
                            href={projeto.link} target='_blank' rel='noopener noreferrer'
                            className='icon-link  btn btn-link'>
                            {labels.openOnGitHub[language]}
                        </a>
                    </div>
                    <div className='col-12 col-lg-6 p-3'>
                        <h3 className='fw-semibold text-break'>{projeto.title}</h3>
                        <h6 className='text-muted'>{projeto.subtitle}</h6>
                        <p>{projeto.description || labels.noDescription[language]}</p>
                    </div>
                    <div className='row m-0 p-0 pb-3'>
                        <div className='col-12 col-lg-4 pb-3 pt-0' style={{ height: '400px' }}>
                            <div className='repo-nav bg-white border h-100 overflow-auto p-3'>
                                <div className='d-flex align-items-center'>
                                    {currentFolder && (
                                        <button className='icon-link  btn btn-link' onClick={() => {
                                            const parent = currentFolder.split('/').slice(0, -1).join('/')
                                            setCurrentFolder(parent)
                                        }}>
                                            {language === 'pt' ? '..' : '..'}
                                        </button>
                                    )}
                                    <span className='text-muted small'>{currentFolder || labels.root[language]}</span>
                                </div>

                                {loadingTree ? (
                                    <div className='small'>{labels.loadingStructure[language]}</div>
                                ) : (nested || []).length === 0 ? (
                                    <div className='small'>{labels.emptyStructure[language]}</div>
                                ) : (
                                    <div className='repo-nav-list'>
                                        {getNodesAtPath(nested, currentFolder).map(node => (
                                            <div key={node.path} className='d-flex justify-content-between align-items-center py-1'>
                                                {node.type === 'tree' ? (
                                                    <button className='icon-link  btn btn-link p-0' onClick={() => setCurrentFolder(node.path)}>
                                                        {node.name}/
                                                    </button>
                                                ) : (
                                                    <button className='icon-link  btn btn-link p-0' onClick={() => openFile(node.path)}>
                                                        {node.name}
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right: file viewer (col-8) */}
                        <div className='col-12 col-lg-8 pt-0' style={{ height: '600px' }}>
                            <div className='bg-white border overflow-auto h-100 '>
                                <div className='small text-muted p-3 pb-0'>{selectedPath}</div>
                                {loadingFile ? (
                                    <div className='small text-muted m-0 ps-3'>{labels.loadingFile[language]}</div>
                                ) : fileContent ? (
                                    fileType === 'image' ? (
                                        <div className='p-3 d-flex justify-content-center align-items-center' style={{ height: '100%' }}>
                                            <img src={fileContent} alt={selectedPath} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                        </div>
                                    ) : (
                                        <pre className='p-3 pt-2 d-inline-block' style={{ minWidth: '100%' }}>{fileContent}</pre>
                                    )
                                ) : (
                                    <div className='small text-muted ps-3'>{labels.noFileSelected[language]}</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
