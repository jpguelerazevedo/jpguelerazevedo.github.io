import post1 from '../assets/post1.png';
import post2 from '../assets/post2.png';

export const people = [
    {
        name: 'João Paulo Gueller Azevedo',
        lastName: 'Azevedo',
        codiname: 'jpguelerazevedo',
        email: 'jpguelerazevedo@gmail.com',
        src: 'https://github.com/jpguelerazevedo.png',
        born: {
            data: '10 de Dezembro de 2002',
            city: 'Vitória',
            state: 'Espírito Santo',
            country: 'Brasil',
            en: {
                data: 'December 10, 2002',
                city: 'Vitória',
                state: 'Espírito Santo',
                country: 'Brazil'
            }
        },
        parents: {
            mother: 'Mara Luiza Campos Gueller',
            father: 'Fabrício Faccin Azevedo',
            brother: {
                b1: 'Lucas Gueller Azevedo',
                b2: 'Samuel Gueller Azevedo'
            }
        },
        socialAcount: {
            github: 'https://github.com/jpguelerazevedo',
            instagram: 'https://www.instagram.com/joaopaulog_a/',
            linkedin: 'https://www.linkedin.com/in/jpguelerazevedo',
        },
        description: {
            pt: `
<p>Olá, sou <strong>João Paulo Gueller Azevedo</strong> (mas pode me chamar de João), um desenvolvedor de software brasileiro e entusiasta na área de Inteligência Artificial. Atuo na interseção entre o Processamento de Linguagem Natural (NLP) e a eficiência operacional. Atualmente, foco minha carreira na especialização em automações inteligentes, empregando meu laboratório pessoal para criar posts que transformam informação bruta em conhecimento rápido sobre essa jornada.</p>
<p>Tive a oportunidade de obter destaque acadêmico e técnico ao projetar soluções de Inteligência Artificial para o <a href="https://www.ifes.edu.br/" target="_blank" rel="noopener noreferrer">IFES</a>, pesquisa que serviu como base para meu <a href="https://repositorio.ifes.edu.br/handle/123456789/7323" target="_blank" rel="noopener noreferrer">Trabalho de Conclusão de Curso (TCC)</a>. O projeto aplica modelos de IA para interpretar editais complexos, facilitando o acesso à informação por meio de uma interface inteligente. Além disso, no setor logístico, liderei a criação de um sistema de gestão de frotas para a Prefeitura Municipal de Castelo.</p>
<p>Minha base técnica é marcada pela versatilidade entre o poder de processamento e a clareza visual. Domino o ecossistema <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">Python</a> para automações e IA, integrando essas capacidades ao <a href="https://powerbi.microsoft.com/" target="_blank" rel="noopener noreferrer">Power BI</a> para gerar análises preditivas profundas. No desenvolvimento back-end, emprego <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a> e <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">PostgreSQL</a> na construção de APIs robustas e escaláveis. Já no front-end, aplico <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a> e <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a> para conceber interfaces modernas e responsivas, priorizando uma navegação fluida que torna a tecnologia verdadeiramente acessível. Complemento minha stack com experiência em <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a> e gestão de versão com <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git</a>.</p>
<p>Meus estudos e foco profissional concentram-se na criação de agentes de IA e pipelines de automação, recorrendo a ferramentas e bibliotecas como <a href="https://python.langchain.com/en/latest/" target="_blank" rel="noopener noreferrer">LangChain</a>, <a href="https://www.langchain.com/langsmith" target="_blank" rel="noopener noreferrer">LangSmith</a>, <a href="https://scikit-learn.org/stable/" target="_blank" rel="noopener noreferrer">scikit-learn</a>, <a href="https://numpy.org/" target="_blank" rel="noopener noreferrer">NumPy</a> e <a href="https://pandas.pydata.org/" target="_blank" rel="noopener noreferrer">pandas</a>. Orquestro essas tecnologias para construir agentes que integram ferramentas externas, realizam pré-processamento de dados e validam fluxos em ambientes de produção.</p>
<p>Além das linhas de código do dia a dia, mantenho este 'Lab' como um verdadeiro sandbox vivo. Mais do que um portfólio, é um blog onde documento minha trajetória e os testes que faço com novas tecnologias. Transformei esse espaço em um caderno de estudos aberto, onde compartilho meus experimentos práticos e troco ideias sobre o desenvolvimento de soluções e a aplicação de Inteligência Artificial no mundo real.</p>            

`,
            en: `
<p>Hello, I'm <strong>João Paulo Gueller Azevedo</strong> (but you can call me João), a Brazilian software developer and Artificial Intelligence enthusiast. I work at the intersection of Natural Language Processing (NLP) and operational efficiency. Currently, I focus my career on specializing in intelligent automations, using my personal lab to create posts that transform raw information into quick knowledge about this journey.</p>
<p>I had the opportunity to achieve academic and technical recognition by designing Artificial Intelligence solutions for <a href="https://www.ifes.edu.br/" target="_blank" rel="noopener noreferrer">IFES</a>, research that served as the foundation for my <a href="https://repositorio.ifes.edu.br/handle/123456789/7323" target="_blank" rel="noopener noreferrer">Capstone Project (TCC)</a>. The project applies AI models to interpret complex public notices, facilitating access to information through an intelligent interface. Furthermore, in the logistics sector, I led the creation of a fleet management system for the City Hall of Castelo.</p>
<p>My technical foundation is marked by versatility, balancing processing power with visual clarity. I master the <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">Python</a> ecosystem for automations and AI, integrating these capabilities with <a href="https://powerbi.microsoft.com/" target="_blank" rel="noopener noreferrer">Power BI</a> to generate deep predictive analyses. In back-end development, I use <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a> and <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">PostgreSQL</a> to build robust and scalable APIs. On the front-end, I apply <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a> and <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a> to design modern and responsive interfaces, prioritizing fluid navigation that makes technology truly accessible. I round out my stack with experience in <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a> and version control using <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git</a>.</p>
<p>My studies and professional focus are centered on creating AI agents and automation pipelines, using tools and libraries such as <a href="https://python.langchain.com/en/latest/" target="_blank" rel="noopener noreferrer">LangChain</a>, <a href="https://www.langchain.com/langsmith" target="_blank" rel="noopener noreferrer">LangSmith</a>, <a href="https://scikit-learn.org/stable/" target="_blank" rel="noopener noreferrer">scikit-learn</a>, <a href="https://numpy.org/" target="_blank" rel="noopener noreferrer">NumPy</a>, and <a href="https://pandas.pydata.org/" target="_blank" rel="noopener noreferrer">pandas</a>. I orchestrate these technologies to build agents that integrate external tools, perform data preprocessing, and validate workflows in production environments.</p>
<p>Beyond my everyday coding, I keep this 'Lab' as a true living sandbox. Much more than a portfolio, it's a blog where I document my background and the tests I run with emerging technologies. I've turned this space into an open journal, sharing my hands-on experiments and exchanging ideas about building solutions and applying Artificial Intelligence in the real world.</p>
            
`,
        },
        linguage: {
            pt: 'Português (Nativo), Inglês (Avançado)',
            en: 'Portuguese (Native), English (Advanced)'
        }
    }
];

export const post = [
    {
        title: {
            pt: 'Por que utilizar Mocking com Pytest em Sistemas de IA',
            en: 'Why use Mocking with Pytest in AI Systems'
        },
        subtitle: {
            pt: 'Inteligência Artificial',
            en: 'Artificial Intelligence'
        },
        description: {
            pt: 'Uma introdução técnica ao uso de Pytest e mocking para o desenvolvimento de agentes e sistemas de IA robustos através da validação determinística de tools e configurações de LLMs.',
            en: 'A technical introduction to using Pytest and mocking for developing robust AI agents and systems through deterministic validation of tools and LLM configurations.'
        },
        content: {
            pt: `
<p>O desenvolvimento de software moderno vive um choque de paradigmas entre a rigidez lógica do <strong>Python</strong> e a natureza fluida dos modelos de linguagem. Em sistemas que dependem de <strong>LLMs</strong>, frameworks como <strong>LangChain</strong> ou bibliotecas de agentes como <strong>CrewAI</strong>, o desafio é garantir previsibilidade em um ambiente probabilístico. O <strong>Pytest</strong> atua como uma ferramenta de controle, permitindo estabelecer um domínio determinístico sobre o comportamento da inteligência artificial através do uso estratégico de <code>mocks</code>.</p>
<p>Mockar uma <strong>LLM</strong> isola a inteligência do modelo da integridade da engenharia. Ao utilizar <code>monkeypatch</code> ou <code>unittest.mock</code>, substituímos o oráculo imprevisível por uma versão controlada que responde exatamente o necessário para validar a lógica de negócio. Isso é fundamental pois chamadas reais a <strong>APIs</strong> são lentas, custosas e não-determinísticas. Um pipeline de <strong>CI/CD</strong> eficiente exige que o sucesso dos testes dependa da qualidade do código em <strong>Python</strong>, e não da latência ou oscilação de serviços externos.</p>
<p>Na arquitetura de agentes, o rigor deve ser aplicado às <strong>Tools</strong> e à configuração dos <strong>Agents</strong>. No nível das ferramentas, o foco é a execução isolada de cada função. Ao interceptar acessos a <strong>CSV</strong>, <strong>PostgreSQL</strong> ou <strong>APIs</strong> com <code>mocks</code>, garantimos que regras de negócio, cálculos e validações de formato estejam corretos. Testar uma ferramenta de forma independente assegura que o agente receba dados íntegros, evitando que falhas de infraestrutura resultem em alucinações do modelo.</p>
<p>Simultaneamente, o teste de unidade nos agentes valida sua estrutura estática. Isso envolve verificar o registro correto de ferramentas e se os <strong>System Prompts</strong> mantêm a integridade e restrições de segurança definidas. Em vez de testar a resposta final da <strong>IA</strong>, validamos se o agente foi montado corretamente, prevenindo regressões onde alterações no código poderiam desativar capacidades críticas. O <strong>Pytest</strong> transforma sistemas experimentais em software resiliente, onde cada componente é validado em seu próprio domínio de certeza.</p>
<p>Para materializar esses conceitos, apresento abaixo um exemplo prático de implementação. No primeiro teste, simulamos uma ferramenta de análise de vendas onde o acesso ao disco é interceptado: o <code>monkeypatch</code> substitui a função de leitura do <strong>pandas</strong> para que ela retorne um conjunto de dados fixo em memória, permitindo validar a lógica de cálculo sem depender de arquivos reais. No segundo teste, verificamos a arquitetura do agente, garantindo que ele possua as ferramentas necessárias e o comportamento básico esperado antes de entrar em execução.</p>

<pre><code>
<span style="color: #cf222e; font-weight: bold;">import</span> pytest
<span style="color: #cf222e; font-weight: bold;">import</span> pandas <span style="color: #cf222e; font-weight: bold;">as</span> pd
<span style="color: #cf222e; font-weight: bold;">from</span> unittest.mock <span style="color: #cf222e; font-weight: bold;">import</span> MagicMock
<span style="color: #cf222e; font-weight: bold;">from</span> meu_projeto.agents <span style="color: #cf222e; font-weight: bold;">import</span> AnalistaFinanceiro

<span style="color: #cf222e; font-weight: bold;">def</span> <span style="color: #8250df; font-weight: bold;">test_tool_calculo_media_vendas</span>(monkeypatch):
    <span style="color: #6a737d;"># Simulamos um retorno fixo para isolar a lógica de negócio</span>
    mock_data = pd.DataFrame({"vendas": [100, 200, 300]})
    mock_read = MagicMock(return_value=mock_data)
    monkeypatch.setattr(pd, "read_csv", mock_read)

    <span style="color: #6a737d;"># Chamada da função que está sendo testada</span>
    resultado = tool_media_vendas("caminho/falso.csv")
    
    <span style="color: #6a737d;"># Asserts para validação</span>
    <span style="color: #cf222e; font-weight: bold;">assert</span> resultado == 200.0
    mock_read.assert_called_once()

<span style="color: #cf222e; font-weight: bold;">def</span> <span style="color: #8250df; font-weight: bold;">test_configuracao_agente_vendas</span>():
    <span style="color: #6a737d;"># Verificamos se o agente foi instanciado com a configuração correta</span>
    agente = AnalistaFinanceiro()
    nomes_tools = [tool.name <span style="color: #cf222e; font-weight: bold;">for</span> tool <span style="color: #cf222e; font-weight: bold;">in</span> agente.tools]
    
    <span style="color: #6a737d;"># Validação da estrutura do agente</span>
    <span style="color: #cf222e; font-weight: bold;">assert</span> "calculadora_de_vendas" <span style="color: #cf222e; font-weight: bold;">in</span> nomes_tools
    <span style="color: #cf222e; font-weight: bold;">assert</span> "Você é um especialista em finanças" <span style="color: #cf222e; font-weight: bold;">in</span> agente.system_prompt
</code></pre>

<p>Este fluxo permite que a infraestrutura de suporte à <strong>IA</strong> seja testada de forma rigorosa. O <strong>Pytest</strong> fornece a validação necessária para que o desenvolvimento ocorra com a estabilidade exigida em ambientes de produção.</p>        


`,
            en: `
<p>Modern software development often involves a balance between the logical rigidity of <strong>Python</strong> and the fluid nature of language models. In systems relying on <strong>LLMs</strong>, frameworks like <strong>LangChain</strong>, or agent libraries like <strong>CrewAI</strong>, the objective is to maintain consistency within a probabilistic environment. <strong>Pytest</strong> serves as a reliable tool, allowing developers to define and verify the behavior of artificial intelligence through the use of <code>mocks</code>.</p>
<p>Mocking an <strong>LLM</strong> separates the model's responses from the core engineering. By using <code>monkeypatch</code> or <code>unittest.mock</code>, we use controlled responses to validate business logic. This is helpful because real <strong>API</strong> calls are slower and non-deterministic. An efficient <strong>CI/CD</strong> pipeline relies on the quality of the <strong>Python</strong> code, independent of external service fluctuations.</p>
<p>In agent architecture, this approach applies to both <strong>Tools</strong> and <strong>Agent</strong> configurations. At the tool level, the focus is on the execution of each function. By intercepting <strong>CSV</strong>, <strong>PostgreSQL</strong>, or <strong>API</strong> access with <code>mocks</code>, we ensure that business rules and data formats are correct. Testing a tool independently helps ensure the agent receives relevant data, reducing the risk of errors caused by infrastructure issues.</p>
<p>Unit testing for agents also validates their setup. This includes verifying the registration of tools and ensuring that <strong>System Prompts</strong> follow the defined constraints. Instead of only testing the final response, we validate that the agent is configured as intended, preventing potential regressions. <strong>Pytest</strong> helps make experimental systems more stable, where each component is verified within a controlled environment.</p>
<p>Here is a practical example. In the first test, we simulate a sales analysis tool where disk access is intercepted: <code>monkeypatch</code> replaces the <strong>pandas</strong> read function to return a fixed dataset, allowing us to validate calculation logic without external dependencies. In the second test, we verify the agent's configuration, ensuring it has the necessary tools and expected behavior.</p>

<pre><code>
<span style="color: #cf222e; font-weight: bold;">import</span> pytest
<span style="color: #cf222e; font-weight: bold;">import</span> pandas <span style="color: #cf222e; font-weight: bold;">as</span> pd
<span style="color: #cf222e; font-weight: bold;">from</span> unittest.mock <span style="color: #cf222e; font-weight: bold;">import</span> MagicMock
<span style="color: #cf222e; font-weight: bold;">from</span> my_project.agents <span style="color: #cf222e; font-weight: bold;">import</span> FinanceAnalyst

<span style="color: #cf222e; font-weight: bold;">def</span> <span style="color: #8250df; font-weight: bold;">test_tool_sales_average_calculation</span>(monkeypatch):
    <span style="color: #6a737d;"># We simulate a fixed return to isolate business logic</span>
    mock_data = pd.DataFrame({"sales": [100, 200, 300]})
    mock_read = MagicMock(return_value=mock_data)
    monkeypatch.setattr(pd, "read_csv", mock_read)

    <span style="color: #6a737d;"># Call to the function being tested</span>
    result = tool_sales_average("fake/path.csv")
	
    <span style="color: #6a737d;"># Asserts for validation</span>
    <span style="color: #cf222e; font-weight: bold;">assert</span> result == 200.0
    mock_read.assert_called_once()

<span style="color: #cf222e; font-weight: bold;">def</span> <span style="color: #8250df; font-weight: bold;">test_sales_agent_configuration</span>():
    <span style="color: #6a737d;"># We verify if the agent was instantiated with the correct config</span>
    agent = FinanceAnalyst()
    tool_names = [tool.name <span style="color: #cf222e; font-weight: bold;">for</span> tool <span style="color: #cf222e; font-weight: bold;">in</span> agent.tools]
	
    <span style="color: #6a737d;"># Validation of the agent structure</span>
    <span style="color: #cf222e; font-weight: bold;">assert</span> "sales_calculator" <span style="color: #cf222e; font-weight: bold;">in</span> tool_names
    <span style="color: #cf222e; font-weight: bold;">assert</span> "You are a finance expert" <span style="color: #cf222e; font-weight: bold;">in</span> agent.system_prompt
</code></pre>

<p>This workflow allows the <strong>AI</strong> support infrastructure to be rigorously tested. <strong>Pytest</strong> provides the necessary validation for development to occur with the stability required for production environments.</p>
            
            `
        },
        image: {
            url: post1,
            alt: {
                pt: 'Imagem referente ao post sobre pytest e mocking',
                en: 'Image for the post about pytest and mocking'
            }
        },
        data: {
            pt: '2 de Março de 2026',
            en: 'March 2, 2026'
        },
        local: {
            pt: 'Vitória, ES',
            en: 'Vitória, ES'
        }
    },

    {
        title: {
            pt: 'Como os Embeddings moldam a topologia do Espaço Latente',
            en: 'How Embeddings shape the topology of Latent Space'
        },
        subtitle: {
            pt: 'Inteligência Artificial',
            en: 'Artificial Intelligence'
        },
        description: {
            pt: 'Uma análise sobre a arquitetura do espaço latente e como as distâncias vetoriais e a similaridade de cosseno definem a organização do conhecimento, permitindo que as máquinas naveguem por relações conceituais complexas.',
            en: 'A analysis of the architecture of latent space and how vector distances and cosine similarity define the organization of knowledge, enabling machines to navigate complex conceptual relationships.'
        },
        content: {
            pt: `
            <p>A inteligência de uma <strong>IA</strong> não reside apenas em um dicionário de definições, mas em sua organização geométrica. O <strong>Espaço Latente</strong> é um ambiente multidimensional onde cada conceito é representado por um <strong>Embedding</strong> — um vetor de números reais que serve como uma coordenada. A proximidade entre esses vetores no espaço (geralmente medida pela <strong>Similaridade de Cosseno</strong>) reflete a relação de significado entre os conceitos.</p>
            <p>Para visualizar essa lógica, considere o exemplo de operações vetoriais no <strong>Espaço Latente</strong>. Se subtrairmos o vetor do conceito "Homem" do vetor "Rei" e somarmos o vetor "Mulher", o resultado será um novo ponto no espaço próximo ao <strong>Embedding</strong> de "Rainha":</p>
            
            <div style="margin: 20px 0; text-align: center; ">
                <i>v⃗</i><sub>Rei</sub> − <i>v⃗</i><sub>Homem</sub> + <i>v⃗</i><sub>Mulher</sub> ≈ <i>v⃗</i><sub>Rainha</sub>
            </div>
            
            <p>Essa capacidade de processar significados permite manipular <strong>LLMs</strong> com precisão. Ao invés de apenas testar <strong>prompts</strong>, podemos utilizar técnicas de <strong>Latent Space Traversal</strong>. Se identificarmos o vetor que representa um estilo ou tom específico em um conjunto de dados, podemos ajustar outros <strong>Embeddings</strong> para aplicar essa característica, mantendo o conteúdo central. É o uso da álgebra linear aplicado à linguística.</p>
            <p>O entendimento da relação entre <strong>Embeddings</strong> e o <strong>Espaço Latente</strong> é fundamental para a construção de sistemas de busca semântica e <strong>RAG (Retrieval-Augmented Generation)</strong>. Ao buscar uma informação, o sistema identifica vetores que ocupam regiões próximas no mapa de dados. Dessa forma, o desenvolvimento de soluções de IA envolve a navegação por dimensões complexas onde o conhecimento está estruturado de forma vetorial.</p>

            `,
            en: `
            <p>AI intelligence is often structured as a geometric organization rather than a simple dictionary. <strong>Latent Space</strong> is a multidimensional environment where concepts are represented by <strong>Embeddings</strong> — vectors of real numbers that serve as coordinates. The distance between these vectors (often measured by <strong>cosine similarity</strong>) reflects the relationships and meanings between different data points.</p>
            <p>To visualize this logic, consider vector operations in <strong>Latent Space</strong>. For example, if we subtract the vector for "Man" from "King" and add "Woman", the resulting point in space is typically close to the <strong>Embedding</strong> for "Queen":</p>
            
            <div style="margin: 20px 0; text-align: center; ">
                <i>v⃗</i><sub>King</sub> − <i>v⃗</i><sub>Man</sub> + <i>v⃗</i><sub>Woman</sub> ≈ <i>v⃗</i><sub>Queen</sub>
            </div>
            
            <p>This capability allows for precise manipulation of <strong>LLMs</strong>. Beyond prompt engineering, techniques like <strong>Latent Space Traversal</strong> can be used. By identifying vectors that represent specific tones or styles, it's possible to adjust other <strong>Embeddings</strong> to apply those characteristics while preserving the core content. This demonstrates the application of linear algebra to linguistic tasks.</p>
            <p>Understanding the relationship between <strong>Embeddings</strong> and <strong>Latent Space</strong> is key to building efficient semantic search systems and <strong>RAG (Retrieval-Augmented Generation)</strong>. When retrieving information, the system looks for vectors in similar regions of the data map. Developing AI solutions increasingly involves navigating these complex dimensions where knowledge is stored in vector form.</p>

            `
        },
        image: {
            url: post2,
            alt: {
                pt: 'Imagem referente ao post sobre embeddings e espaço latente',
                en: 'Image for the post about embeddings and latent space'
            }
        },
        data: {
            pt: '25 de Fevereiro de 2026',
            en: 'February 25, 2026'
        },
        local: {
            pt: 'Vitória, ES',
            en: 'Vitória, ES'
        }
    },
];
