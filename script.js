const lapis = {
    tamanho: 20,
    tipo:"HB",
    cor: "Grafite",
    temBorrachaAtras: false
    }
{
    const caixaPrincipal = document.querySelector(“.caixa-principal”);
    
    const caixaPerguntas = document.querySelector(“.caixa-perguntas”);
    
    const caixaAlternativas = document.querySelector(“.caixa-alternativas”);
    
    const caixaResultado = document.querySelector(“.caixa-resultado”);
    
    const textoResultado = document.querySelector(“.texto- resultado”);
    
    const perguntas = [{ enunciado: “Pergunta 1”, alternativas: [“Alternativa 1”, “Alternativa 2”],},
}
    
    {  
    enunciado: “Pergunta 2”,
    alternativas: [“Alternativa 1”, “Alternativa 2”],
    },
    ];

    function mostraPergunta() {
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado
        mostraAlternativas();
        }
        function mostraAlternativas() {

            {

enunciado: “Assim que saiu da escola, você se
depara com uma nova tecnologia: um chat que consegue
responder a todas as dúvidas que uma pessoa pode ter.
Além disso, o chat também gera imagens e áudios
hiper-realistas. Qual o seu primeiro pensamento?”,

alternativas: [
“Isso é assustador!”,
“Isso é maravilhoso!”
]
},
function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;

    perguntaAtual.alternativas

    const alternativa

    function mostraAlternativas() {
        for (const alternativa of perguntaAtual.alternativas) {

            
            function mostraAlternativas() {
                for (const alternativa of perguntaAtual.alternativas) {
                const botaoAlternativas = document.
                
                createElement(“button”);
                
                botaoAlternativas.textContent = alternativa;

<div class=”caixa-alternativas”></div>     

const caixaAlternativas = document.querySelector
(“.caixa-alternativas”);

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document. createElement(“button”);
    
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);