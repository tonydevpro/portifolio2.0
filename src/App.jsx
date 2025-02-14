//import { useState } from 'react'
import './App.css'
import buscadorDeNomes from './assets/buscadordeNomes.png';
import calculadora from './assets/calculadora.png';
import card from './assets/card.png';
import cloneX from './assets/clone-x.png';
import cronometro from './assets/cronometro.png';
import escolhaSeuEstilo from './assets/escolhaSeuEstilo.png';
import formulario from './assets/formulario.png';
import geradorDeSenhas from './assets/geradordeSenhas.png';
import ingressos from './assets/ingressos.png';
import jogoDaVelha from './assets/jogo-da-velha.png';
import jogoVelha from './assets/jogo-velha.png';
import jogoPedraPapelTesoura from './assets/jogoPedraPapelTesoura.png';
import linkDev from './assets/Link-Dev.png';
import listaDeTarefa from './assets/listadeTarefa.png';
import listaMercado from './assets/listaMercado.png';
import lojaPg from './assets/lojaPg.png';
import previsaoTempo from './assets/previsaoTempo.png';
import projetoQrCode from './assets/projetoQrCode.png';
import projetoXDevs from './assets/projetoXDevs.png';
import relogio from './assets/relogio.png';
import relogioData from './assets/relogioData.png';
import { FaReact, FaHtml5, FaCss3, FaJs, FaGitAlt } from 'react-icons/fa';

function App() {
  const projetos = [
    {
      imagem: buscadorDeNomes,
      titulo: "Buscador de Nomes",
      descricao: "Um projeto para buscar nomes em uma lista.",
      linkGitHub: "https://github.com/tonydevpro/pesquisar-nomes",
      linkDemo: "https://tonydevpro.github.io/pesquisar-nomes/",
      ferramentas: "React, HTML, CSS, JavaScript"
    },
    {
      imagem: calculadora,
      titulo: "Calculadora",
      descricao: "Uma calculadora simples e funcional.",
      linkGitHub: "https://github.com/tonydevpro/calculadora1",
      linkDemo: "https://tonydevpro.github.io/calculadora1/",
      ferramentas: "React, HTML, CSS, JavaScript"
    },
    
    {
      imagem: cloneX,
      titulo: "Clone X",
      descricao: "Um clone da interface do X.",
      linkGitHub: "https://github.com/tonydevpro/clone-twitter-x",
      linkDemo: "https://tonydevpro.github.io/clone-twitter-x/",
      ferramentas: "React, HTML, CSS, JavaScript"
    },
    {
      imagem: cronometro,
      titulo: "Cronômetro",
      descricao: "Um cronômetro simples e eficiente.",
      linkGitHub: "https://github.com/tonydevpro/Cronometros",
      linkDemo: "https://tonydevpro.github.io/Cronometros/",
      ferramentas: "React, HTML, CSS, JavaScript"
    },
    {
      imagem: escolhaSeuEstilo,
      titulo: "Escolha Seu Estilo",
      descricao: "Um projeto para escolher estilos personalizados.",
      linkGitHub: "https://github.com/tonydevpro/mudando-temas",
      linkDemo: "https://tonydevpro.github.io/mudando-temas/",
      ferramentas: "React, HTML, CSS, JavaScript"
    },
    
    {
      imagem: geradorDeSenhas,
      titulo: "Gerador de Senhas",
      descricao: "Um gerador de senhas seguras.",
      linkGitHub: "https://github.com/tonydevpro/gerador-de-Senhas-Aleat-rias",
      linkDemo: "https://tonydevpro.github.io/gerador-de-Senhas-Aleat-rias/",
      ferramentas: "HTML, CSS, JavaScript"
    },
    
    {
      imagem: jogoDaVelha,
      titulo: "Jogo da Velha",
      descricao: "O clássico jogo da velha.",
      linkGitHub: "https://github.com/tonydevpro/jogo-da-velha-danki",
      linkDemo: "https://tonydevpro.github.io/jogo-da-velha-danki/",
      ferramentas: "React, HTML, CSS, JavaScript"
    },
    {
      imagem: jogoVelha,
      titulo: "Jogo da Velha 2",
      descricao: "Outra versão do jogo da velha.",
      linkGitHub: "https://github.com/tonydevpro/jogo-da-velha",
      linkDemo: "https://tonydevpro.github.io/jogo-da-velha/",
      ferramentas: "React, HTML, CSS, JavaScript"
    },
    {
      imagem: jogoPedraPapelTesoura,
      titulo: "Jogo Pedra, Papel e Tesoura",
      descricao: "O clássico jogo de pedra, papel e tesoura.",
      linkGitHub: "https://github.com/tonydevpro/Projeto-pedra--Papel-e-tesoura",
      linkDemo: "https://tonydevpro.github.io/Projeto-pedra--Papel-e-tesoura/",
      ferramentas: "HTML, CSS, JavaScript"
    },
    
    {
      imagem: listaDeTarefa,
      titulo: "Lista de Tarefas",
      descricao: "Um gerenciador de tarefas simples.",
      linkGitHub: "https://github.com/tonydevpro/lista-de-tarefa",
      linkDemo: "https://tonydevpro.github.io/lista-de-tarefa/",
      ferramentas: "React, HTML, CSS, JavaScript"
    },
    {
      imagem: listaMercado,
      titulo: "Lista de Mercado",
      descricao: "Um app para gerenciar listas de compras.",
      linkGitHub: "https://github.com/tonydevpro/SuperMercado",
      linkDemo: "https://tonydevpro.github.io/SuperMercado/",
      ferramentas: "HTML, CSS, JavaScript"
    },
    
    {
      imagem: previsaoTempo,
      titulo: "Previsão do Tempo",
      descricao: "Um app para consultar a previsão do tempo.",
      linkGitHub: "https://github.com/tonydevpro/previsao-do-tempo",
      linkDemo: "https://tonydevpro.github.io/previsao-do-tempo/",
      ferramentas: "React, HTML, CSS, JavaScript, API de Clima"
    },
    {
      imagem: linkDev,
      titulo: "Link Dev",
      descricao: "Um agregador de links para desenvolvedores.",
      linkGitHub: "https://github.com/tonydevpro/projeto-dev-links",
      linkDemo: "https://tonydevpro.github.io/projeto-dev-links/",
      ferramentas: "HTML, CSS"
    },
    {
      imagem: lojaPg,
      titulo: "Loja PG",
      descricao: "Uma loja virtual simples.",
      linkGitHub: "https://github.com/tonydevpro/pagina-de-produtos-de-ecomece---frontend-mentor",
      linkDemo: "https://tonydevpro.github.io/pagina-de-produtos-de-ecomece---frontend-mentor/",
      ferramentas: "HTML, CSS, JavaScript"
    },
    {
      imagem: projetoQrCode,
      titulo: "Projeto QR Code",
      descricao: "Um gerador de QR codes.",
      linkGitHub: "https://github.com/tonydevpro/fontend-mentor-QR-Code-Desafio",
      linkDemo: "https://tonydevpro.github.io/fontend-mentor-QR-Code-Desafio/",
      ferramentas: "HTML, CSS"
    },
    {
      imagem: projetoXDevs,
      titulo: "Projeto X Devs",
      descricao: "Um projeto colaborativo com vários desenvolvedores.",
      linkGitHub: "https://github.com/tonydevpro/projeto-xdevs",
      linkDemo: "https://tonydevpro.github.io/projeto-xdevs/",
      ferramentas: "HTML, CSS"
    },
    {
      imagem: relogio,
      titulo: "Relógio",
      descricao: "Um relógio digital simples.",
      linkGitHub: "https://github.com/tonydevpro/relogio",
      linkDemo: "https://tonydevpro.github.io/relogio/",
      ferramentas: "HTML, CSS, JavaScript"
    },
    {
      imagem: relogioData,
      titulo: "Relógio e Data",
      descricao: "Um relógio digital com exibição de data.",
      linkGitHub: "https://github.com/tonydevpro/relogio",
      linkDemo: "https://tonydevpro.github.io/des10/",
      ferramentas: "HTML, CSS, JavaScript"
    },
    {
      imagem: ingressos,
      titulo: "Ingressos",
      descricao: "Um sistema de reserva de ingressos.",
      linkGitHub: "https://github.com/tonydevpro/pagina-de-ingressos",
      linkDemo: "https://tonydevpro.github.io/pagina-de-ingressos/",
      ferramentas: "HTML, CSS"
    },
    {
      imagem: formulario,
      titulo: "Formulário",
      descricao: "Um formulário de cadastro responsivo.",
      linkGitHub: "https://github.com/tonydevpro/Formulario",
      linkDemo: "https://tonydevpro.github.io/Formulario/",
      ferramentas: "HTML, CSS"
    },
    
    {
      imagem: card,
      titulo: "Card",
      descricao: "Um componente de card estilizado.",
      linkGitHub: "https://github.com/tonydevpro/desafio-card",
      linkDemo: "https://tonydevpro.github.io/desafio-card/",
      ferramentas: "HTML, CSS"
    }
  ];
  const habilidades = [
    { nome: 'HTML', icone: <FaHtml5 /> },
    { nome: 'CSS', icone: <FaCss3 /> },
    { nome: 'JavaScript', icone: <FaJs /> },
    { nome: 'React', icone: <FaReact /> },
    { nome: 'Git', icone: <FaGitAlt /> },
  ];

  return (
    <>
      <div className='geral'>
        <div className='geralMenu'>
          <nav>
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre Mim</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
        <div className='geralInicio' id="inicio">
          <h1>Olá, eu sou Tony</h1>
          <p>Desenvolvedor Front-End</p>
          <button onClick={() => window.location.href = '#projetos'}>Ver Projetos</button>
        </div>
        <div className='geralSobreMin' id="sobre">
          <h2>Sobre Mim</h2>
          
          <p>
          Olá! Sou um Desenvolvedor Junior. apaixonado pelo mundo da tecnologia.sempre buscando aperfeiçoar minhas habilidades e acompanhar as tendências do mercado. Acredito que a programação é uma forma poderosa de transformar ideias em realidade, e estou animado para aplicar meu conhecimento em projetos desafiadores. Sou detalhista e sempre busco entregar um trabalho de qualidade, respeitando prazos e necessidades dos clientes. Estou aberto a novas oportunidades e disposto a aprender sempre mais. Se você está procurando alguém comprometido para colaborar em seu projeto, ficarei feliz em conversar!
          Vamos criar algo incrível juntos!
          </p>
        </div>
        <div className='geralHabilidades' id="habilidades">
          <h2>Habilidades</h2>
          <ul>
            {habilidades.map((habilidade, index) => (
              <li key={index}>
                <div className="habilidadeIcone">{habilidade.icone}</div>
                <span>{habilidade.nome}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='geralProjetos' id="projetos">
          <h2>Projetos</h2>
          <div className='projetosContainer'>
            {projetos.map((projeto, index)=>(
              <div className="projetoCard" key={index}>
                <img src={projeto.imagem} alt={projeto.titulo} />
                <h3>{projeto.titulo}</h3>
                <p>{projeto.descricao}</p>
                <div className='ferramentasContainer'>
                {projeto.ferramentas.split(', ').map((ferramenta, i) => {
  let Icone;
  switch (ferramenta) {
    case 'React':
      Icone = FaReact;
      break;
    case 'HTML':
      Icone = FaHtml5;
      break;
    case 'CSS':
      Icone = FaCss3;
      break;
    case 'JavaScript':
      Icone = FaJs;
      break;
    default:
      Icone = null;
  }


return ( // <--- ERRO: Este return está fora do escopo do map
  <div key={i} className="tooltip">
    {Icone && <Icone className="ferramentaIcon" />}
    <span className="tooltipText">{ferramenta}</span>
  </div>
);
})}
                </div>
               <div className="projetoLinks">
                 <a href={projeto.linkGitHub} target="_blank" rel="noopener noreferrer">GitHub</a>
                 <a href={projeto.linkDemo} target="_blank" rel="noopener noreferrer">Demo</a>
               </div>
             </div>

            ))}
            
          
          </div>
        </div>

        <div className='geralContato' id="contato">
          <h2>Contato</h2>
          <form>
            <input type="text" placeholder="Seu Nome" required />
            <input type="email" placeholder="Seu E-mail" required />
            <textarea placeholder="Sua Mensagem" required></textarea>
            <button type="submit">Enviar</button>
          </form>
          <div className='redesSociais'>
            <a href="https://www.linkedin.com/in/antonio-josé-alves" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/tonydevpro" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://wa.me/5581989923733" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
        <footer className='geralRodape'>
          <p>© Tony - 2025</p>
          <a href="#inicio">Voltar ao Topo</a>
        </footer>
        

        
      </div>
      
    </>
  )
}

export default App
