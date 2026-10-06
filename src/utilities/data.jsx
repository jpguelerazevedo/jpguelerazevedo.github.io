import post1 from '../assets/post1.png';
import post2 from '../assets/post2.png';
import post3 from '../assets/post3.webp';

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
        // Repositórios fixados (pinned) no perfil do GitHub, na ordem em que aparecem lá
        pinnedRepos: [
            'intelligent-banking-agent',
            'ai-agent-powerbi',
            'brazilian-music-NER-project',
            'CNPJ-export-automation',
            'jpguelerazevedo.github.io',
            'okno-website',
        ],
        role: {
            pt: 'Desenvolvedor de software & IA',
            en: 'Software developer & AI',
        },
        about: {
            pt: `
<p>Desenvolvo sistemas full-stack e automações com Inteligência Artificial. Formado em Sistemas de Informação pelo IFES, trabalho como desenvolvedor na prefeitura da minha cidade e como freelancer na Handshake, com testes para Inteligência Artificial. Hoje meus estudos estão voltados para IA e Python.</p>
`,
            en: `
<p>I build full-stack systems and AI automations. With a degree in Information Systems from IFES, I work as a developer for my city's government and freelance for Handshake on AI testing. These days my studies are focused on AI and Python.</p>
`,
        },
        ai: {
            pt: `
<p>Crio agentes de IA e automações para atendimento e análise de dados, principalmente com Python, LangChain e LangGraph. Dois desses projetos estão no meu GitHub: <a href="https://github.com/jpguelerazevedo/intelligent-banking-agent" target="_blank" rel="noopener noreferrer">um atendimento bancário feito por agentes de IA especializados</a> e <a href="https://github.com/jpguelerazevedo/ai-agent-powerbi" target="_blank" rel="noopener noreferrer">um assistente de BI que gera gráficos e análises a partir de perguntas em linguagem natural</a>.</p>
`,
            en: `
<p>I build AI agents and automations for customer service and data analysis, mostly with Python, LangChain, and LangGraph. Two of these projects are on my GitHub: <a href="https://github.com/jpguelerazevedo/intelligent-banking-agent" target="_blank" rel="noopener noreferrer">a banking support system run by specialized AI agents</a> and <a href="https://github.com/jpguelerazevedo/ai-agent-powerbi" target="_blank" rel="noopener noreferrer">a BI assistant that generates charts and analyses from natural-language questions</a>.</p>
`,
        },
        linguage: {
            pt: 'Português (Nativo), Inglês (Avançado)',
            en: 'Portuguese (Native), English (Advanced)'
        }
    }
];

// Sites reais exibidos logo abaixo do "Sobre".
// Para preencher: coloque o print em src/assets, importe no topo deste arquivo
// (como as imagens dos posts) e use em `image`; em `url` vai o link do site.
export const sites = [
    { name: 'Nome do site 1', url: '', image: null },
    { name: 'Nome do site 2', url: '', image: null },
    { name: 'Nome do site 3', url: '', image: null },
    { name: 'Nome do site 4', url: '', image: null },
];

export const post = [
    {
        title: {
            pt: 'Como o Model Context Protocol muda tudo o que sabemos sobre utilização de IA',
            en: 'How the Model Context Protocol changes everything we know about AI usage'
        },
        subtitle: {
            pt: 'Inteligência Artificial',
            en: 'Artificial Intelligence'
        },
        description: {
            pt: 'O MCP está resolvendo o maior problema das LLMs, a falta de conexão com o mundo real. Entenda como esse protocolo funciona e como ele padroniza a forma como a IA interage com seus arquivos e ferramentas.',
            en: 'The MCP is solving the biggest problem of LLMs, the lack of connection with the real world. Understand how this protocol works and how it standardizes the way AI interacts with its files and tools.'
        },
        content: {
            pt: `
<p>Até pouco tempo atrás, o uso de <strong>IA</strong> era limitado a um fluxo de copiar e colar informações. Você pegava um log de erro ou um trecho de código, colava no chat e aguardava uma resposta. Mesmo com o avanço dos agentes, integrar a <strong>IA</strong> ao seu fluxo de trabalho ainda exigia a criação de conectores específicos para cada ferramenta ou banco de dados, o que tornava o processo trabalhoso e difícil de escalar. O <strong>Model Context Protocol (MCP)</strong> surge para resolver esse isolamento, criando um padrão de comunicação que facilita a conexão entre o modelo e as ferramentas que você já usa.</p>

<p>A proposta do <strong>MCP</strong> é simples: em vez de desenvolver uma integração para cada plataforma, utiliza-se uma interface comum. Funciona como um padrão universal onde o "host" (seu editor de código ou aplicativo de chat) se comunica com um "server" (o serviço que acessa seus dados). Isso muda a forma como utilizamos a <strong>IA</strong>, porque o foco deixa de ser a barreira técnica da integração e passa a ser o que a <strong>IA</strong> pode acessar, seja um banco de dados SQL ou seu próprio sistema de arquivos.</p>

<p>Um exemplo prático dessa aplicação é o gerenciamento de diretórios. O servidor de <strong>Filesystem</strong> mostra como a <strong>IA</strong> pode atuar diretamente no seu computador. Com as permissões configuradas, ela consegue navegar por pastas, ler o conteúdo de arquivos e realizar tarefas de organização, como mover documentos para pastas específicas baseando-se no que está escrito neles. Na prática, você pode pedir para a <strong>IA</strong> analisar uma pasta de downloads e agrupar scripts Python em um diretório de projetos e notas fiscais em outro, sem precisar mover um arquivo sequer manualmente.</p>

<p>Para quem trabalha com <strong>Python</strong>, a implementação desses servidores é simplificada pelo SDK <strong>FastMCP</strong>. Abaixo, um exemplo de como estruturar um servidor que permite à <strong>IA</strong> listar, ler e organizar arquivos localmente:</p>

<pre><code><span style="color: #cf222e; font-weight: bold;">from</span> mcp.server.fastmcp <span style="color: #cf222e; font-weight: bold;">import</span> FastMCP
<span style="color: #cf222e; font-weight: bold;">import</span> os
<span style="color: #cf222e; font-weight: bold;">import</span> shutil

<span style="color: #6a737d;"># Inicializa o servidor MCP</span>
mcp = FastMCP("Gerenciador de Arquivos JLab")

@mcp.tool()
<span style="color: #cf222e; font-weight: bold;">def</span> <span style="color: #8250df; font-weight: bold;">listar_arquivos</span>(diretorio: str) -> list:
    <span style="color: #6a737d;">"""Lista os arquivos presentes em um diretório específico."""</span>
    <span style="color: #cf222e; font-weight: bold;">return</span> os.listdir(diretorio)

@mcp.tool()
<span style="color: #cf222e; font-weight: bold;">def</span> <span style="color: #8250df; font-weight: bold;">organizar_arquivo</span>(origem: str, destino_pasta: str):
    <span style="color: #6a737d;">"""
    Move um arquivo para uma pasta específica. 
    Cria o diretório automaticamente se ele não existir.
    """</span>
    <span style="color: #cf222e; font-weight: bold;">if</span> <span style="color: #cf222e; font-weight: bold;">not</span> os.path.exists(destino_pasta):
        os.makedirs(destino_pasta)
    
    nome_arquivo = os.path.basename(origem)
    caminho_final = os.path.join(destino_pasta, nome_arquivo)
    
    shutil.move(origem, caminho_final)
    <span style="color: #cf222e; font-weight: bold;">return</span> f"Arquivo {nome_arquivo} movido para {destino_pasta}"

@mcp.tool()
<span style="color: #cf222e; font-weight: bold;">def</span> <span style="color: #8250df; font-weight: bold;">ler_contexto_arquivo</span>(caminho: str) -> str:
    <span style="color: #6a737d;">"""Lê os primeiros caracteres de um arquivo para identificação de conteúdo."""</span>
    <span style="color: #cf222e; font-weight: bold;">with</span> open(caminho, 'r', encoding='utf-8') <span style="color: #cf222e; font-weight: bold;">as</span> f:
        <span style="color: #cf222e; font-weight: bold;">return</span> f.read(500)

<span style="color: #cf222e; font-weight: bold;">if</span> __name__ == "__main__":
    mcp.run()
</code></pre>

<p>Com esse servidor rodando, a <strong>IA</strong> ganha a capacidade de executar tarefas operacionais. Ela utiliza a ferramenta de listagem para identificar os arquivos, lê os metadados ou o início do conteúdo para entender o contexto e utiliza a ferramenta de organização para mover os itens. O <strong>MCP</strong> não é apenas mais uma tecnologia para acompanhar, mas sim uma infraestrutura que torna o uso de <strong>IA</strong> mais prático e menos dependente de entradas manuais. Para quem desenvolve automações ou trabalha em projetos de software, adotar esse padrão ajuda a transformar modelos de linguagem em assistentes que realmente interagem com o ambiente de desenvolvimento.</p>

<p>Para explorar outros exemplos de servidores prontos, como integrações com Google Drive, Slack e bancos de dados, acesse o repositório oficial: <a href="https://github.com/modelcontextprotocol/servers/tree/main" target="_blank" rel="noopener noreferrer">github.com/modelcontextprotocol/servers</a></p>
            `,
            en: `
<p>Until recently, using <strong>AI</strong> was limited to a copy-and-paste workflow. You would take an error log or a code snippet, paste it into the chat, and wait for a response. Even with the advancement of agents, integrating <strong>AI</strong> into your workflow still required building connectors for each tool or database, making the process laborious and hard to scale. The <strong>Model Context Protocol (MCP)</strong> addresses this isolation by creating a communication standard that makes it easier to connect the model to the tools you already use.</p>

<p>The MCP's proposal is simple: instead of building an integration for every platform, use a common interface. It acts as a universal standard where the "host" (your code editor or chat application) communicates with a "server" (the service that accesses your data). This changes how we use <strong>AI</strong>, because the focus shifts from the technical barrier of integration to what the <strong>AI</strong> can access, whether it's a SQL database or your filesystem.</p>

<p>A practical example is directory management. The Filesystem server demonstrates how the <strong>AI</strong> can operate directly on your machine. With permissions configured, it can navigate folders, read file contents, and perform organization tasks like moving documents into specific folders based on their contents. In practice, you can ask the <strong>AI</strong> to analyze a downloads folder and group Python scripts into a projects directory and invoices into another, without manually moving a single file.</p>

<p>For Python users, implementing these servers is simplified by the <strong>FastMCP</strong> SDK. Below is an example of structuring a server that lets the <strong>AI</strong> list, read, and organize files locally:</p>

<pre><code><span style="color: #cf222e; font-weight: bold;">from</span> mcp.server.fastmcp <span style="color: #cf222e; font-weight: bold;">import</span> FastMCP
<span style="color: #cf222e; font-weight: bold;">import</span> os
<span style="color: #cf222e; font-weight: bold;">import</span> shutil

<span style="color: #6a737d;"># Initialize the MCP server</span>
mcp = FastMCP("File Manager JLab")

@mcp.tool()
<span style="color: #cf222e; font-weight: bold;">def</span> <span style="color: #8250df; font-weight: bold;">list_files</span>(directory: str) -> list:
    <span style="color: #6a737d;">"""Return the files present in a specific directory."""</span>
    <span style="color: #cf222e; font-weight: bold;">return</span> os.listdir(directory)

@mcp.tool()
<span style="color: #cf222e; font-weight: bold;">def</span> <span style="color: #8250df; font-weight: bold;">organize_file</span>(source: str, destination_folder: str):
    <span style="color: #6a737d;">"""
    Move a file to a specific folder.
    Create the directory automatically if it does not exist.
    """</span>
    <span style="color: #cf222e; font-weight: bold;">if</span> <span style="color: #cf222e; font-weight: bold;">not</span> os.path.exists(destination_folder):
        os.makedirs(destination_folder)

    filename = os.path.basename(source)
    final_path = os.path.join(destination_folder, filename)

    shutil.move(source, final_path)
    <span style="color: #cf222e; font-weight: bold;">return</span> f"File {filename} moved to {destination_folder}"

@mcp.tool()
<span style="color: #cf222e; font-weight: bold;">def</span> <span style="color: #8250df; font-weight: bold;">read_file_context</span>(path: str) -> str:
    <span style="color: #6a737d;">"""Read the first characters of a file to identify content context."""</span>
    <span style="color: #cf222e; font-weight: bold;">with</span> open(path, 'r', encoding='utf-8') <span style="color: #cf222e; font-weight: bold;">as</span> f:
        <span style="color: #cf222e; font-weight: bold;">return</span> f.read(500)

<span style="color: #cf222e; font-weight: bold;">if</span> __name__ == "__main__":
    mcp.run()
</code></pre>

<p>With this server running, the <strong>AI</strong> gains the ability to perform operational tasks. It uses the listing tool to identify files, reads metadata or the start of file contents to understand context, and uses the organize tool to move items. The <strong>MCP</strong> is not just another technology to follow — it is an infrastructure that makes <strong>AI</strong> more practical and less dependent on manual inputs. For developers building automations or working on software projects, adopting this pattern helps turn language models into assistants that truly interact with the development environment.</p>

<p>To explore other ready-made server examples, such as integrations with Google Drive, Slack, and databases, visit the official repository: <a href="https://github.com/modelcontextprotocol/servers/tree/main" target="_blank" rel="noopener noreferrer">github.com/modelcontextprotocol/servers</a></p>
            `
        },
        image: {
            url: post3,
            alt: {
                pt: 'Imagem referente ao post sobre MCP',
                en: 'Image for the post about MCP'
            }
        },
        data: {
            iso: '2026-03-16',
            pt: '16 de Março de 2026',
            en: 'March 16, 2026'
        },
        local: {
            pt: 'Vitória, ES',
            en: 'Vitória, ES'
        }
    },
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

<pre><code><span style="color: #cf222e; font-weight: bold;">import</span> pytest
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

<pre><code><span style="color: #cf222e; font-weight: bold;">import</span> pytest
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
            iso: '2026-03-02',
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
            iso: '2026-02-25',
            pt: '25 de Fevereiro de 2026',
            en: 'February 25, 2026'
        },
        local: {
            pt: 'Vitória, ES',
            en: 'Vitória, ES'
        }
    },

];
