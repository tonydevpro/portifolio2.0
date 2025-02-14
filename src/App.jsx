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
import projetoFormulario from './assets/projetoFormulario.png';
import projetoQrCode from './assets/projetoQrCode.png';
import projetoXDevs from './assets/projetoXDevs.png';
import relogio from './assets/relogio.png';
import relogioData from './assets/relogioData.png';

function App() {
  const projetos = [
    {
      imagem: buscadorDeNomes,
      titulo: "Buscador de Nomes",
      descricao: "Um projeto para buscar nomes em uma lista.",
      linkGitHub: "https://github.com/seu-usuario/buscador-de-nomes",
      linkDemo: "https://demo-buscador-de-nomes.com"
    },
    {
      imagem: calculadora,
      titulo: "Calculadora",
      descricao: "Uma calculadora simples e funcional.",
      linkGitHub: "https://github.com/seu-usuario/calculadora",
      linkDemo: "https://demo-calculadora.com"
    },
    {
      imagem: card,
      titulo: "Card",
      descricao: "Um componente de card estilizado.",
      linkGitHub: "https://github.com/seu-usuario/card",
      linkDemo: "https://demo-card.com"
    },
    {
      imagem: cloneX,
      titulo: "Clone X",
      descricao: "Um clone da interface do X.",
      linkGitHub: "https://github.com/seu-usuario/clone-x",
      linkDemo: "https://demo-clone-x.com"
    },
    {
      imagem: cronometro,
      titulo: "Cronômetro",
      descricao: "Um cronômetro simples e eficiente.",
      linkGitHub: "https://github.com/seu-usuario/cronometro",
      linkDemo: "https://demo-cronometro.com"
    },
    {
      imagem: escolhaSeuEstilo,
      titulo: "Escolha Seu Estilo",
      descricao: "Um projeto para escolher estilos personalizados.",
      linkGitHub: "https://github.com/seu-usuario/escolha-seu-estilo",
      linkDemo: "https://demo-escolha-seu-estilo.com"
    },
    {
      imagem: formulario,
      titulo: "Formulário",
      descricao: "Um formulário de cadastro responsivo.",
      linkGitHub: "https://github.com/seu-usuario/formulario",
      linkDemo: "https://demo-formulario.com"
    },
    {
      imagem: geradorDeSenhas,
      titulo: "Gerador de Senhas",
      descricao: "Um gerador de senhas seguras.",
      linkGitHub: "https://github.com/seu-usuario/gerador-de-senhas",
      linkDemo: "https://demo-gerador-de-senhas.com"
    },
    {
      imagem: ingressos,
      titulo: "Ingressos",
      descricao: "Um sistema de reserva de ingressos.",
      linkGitHub: "https://github.com/seu-usuario/ingressos",
      linkDemo: "https://demo-ingressos.com"
    },
    {
      imagem: jogoDaVelha,
      titulo: "Jogo da Velha",
      descricao: "O clássico jogo da velha.",
      linkGitHub: "https://github.com/seu-usuario/jogo-da-velha",
      linkDemo: "https://demo-jogo-da-velha.com"
    },
    {
      imagem: jogoVelha,
      titulo: "Jogo da Velha 2",
      descricao: "Outra versão do jogo da velha.",
      linkGitHub: "https://github.com/seu-usuario/jogo-velha",
      linkDemo: "https://demo-jogo-velha.com"
    },
    {
      imagem: jogoPedraPapelTesoura,
      titulo: "Jogo Pedra, Papel e Tesoura",
      descricao: "O clássico jogo de pedra, papel e tesoura.",
      linkGitHub: "https://github.com/seu-usuario/jogo-pedra-papel-tesoura",
      linkDemo: "https://demo-jogo-pedra-papel-tesoura.com"
    },
    {
      imagem: linkDev,
      titulo: "Link Dev",
      descricao: "Um agregador de links para desenvolvedores.",
      linkGitHub: "https://github.com/seu-usuario/link-dev",
      linkDemo: "https://demo-link-dev.com"
    },
    {
      imagem: listaDeTarefa,
      titulo: "Lista de Tarefas",
      descricao: "Um gerenciador de tarefas simples.",
      linkGitHub: "https://github.com/seu-usuario/lista-de-tarefas",
      linkDemo: "https://demo-lista-de-tarefas.com"
    },
    {
      imagem: listaMercado,
      titulo: "Lista de Mercado",
      descricao: "Um app para gerenciar listas de compras.",
      linkGitHub: "https://github.com/seu-usuario/lista-mercado",
      linkDemo: "https://demo-lista-mercado.com"
    },
    {
      imagem: lojaPg,
      titulo: "Loja PG",
      descricao: "Uma loja virtual simples.",
      linkGitHub: "https://github.com/seu-usuario/loja-pg",
      linkDemo: "https://demo-loja-pg.com"
    },
    {
      imagem: previsaoTempo,
      titulo: "Previsão do Tempo",
      descricao: "Um app para consultar a previsão do tempo.",
      linkGitHub: "https://github.com/seu-usuario/previsao-tempo",
      linkDemo: "https://demo-previsao-tempo.com"
    },
    {
      imagem: projetoFormulario,
      titulo: "Projeto Formulário",
      descricao: "Um formulário de cadastro avançado.",
      linkGitHub: "https://github.com/seu-usuario/projeto-formulario",
      linkDemo: "https://demo-projeto-formulario.com"
    },
    {
      imagem: projetoQrCode,
      titulo: "Projeto QR Code",
      descricao: "Um gerador de QR codes.",
      linkGitHub: "https://github.com/seu-usuario/projeto-qrcode",
      linkDemo: "https://demo-projeto-qrcode.com"
    },
    {
      imagem: projetoXDevs,
      titulo: "Projeto X Devs",
      descricao: "Um projeto colaborativo com vários desenvolvedores.",
      linkGitHub: "https://github.com/seu-usuario/projeto-xdevs",
      linkDemo: "https://demo-projeto-xdevs.com"
    },
    {
      imagem: relogio,
      titulo: "Relógio",
      descricao: "Um relógio digital simples.",
      linkGitHub: "https://github.com/seu-usuario/relogio",
      linkDemo: "https://demo-relogio.com"
    },
    {
      imagem: relogioData,
      titulo: "Relógio e Data",
      descricao: "Um relógio digital com exibição de data.",
      linkGitHub: "https://github.com/seu-usuario/relogio-data",
      linkDemo: "https://demo-relogio-data.com"
    }
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
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Git</li>
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
            <a href="link-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="link-github" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="link-instagram" target="_blank" rel="noopener noreferrer">WhatsApp</a>
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
