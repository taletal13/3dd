const lapis = {
    tamanho: 20,
    tipo:"HB",
    cor: "Grafite",
    temBorrachaAtras: false
    }
{
    const caixaPrincipal = document.querySelector(".caixa-principal");
    const caixaPerguntas = document.querySelector(".caixa-perguntas");
    const caixaAlternativas = document.querySelector(".caixa-alternativas");
    const caixaResultado = document.querySelector(".caixa-resultado");
    const textoResultado = document.querySelector(".texto- resultado");
    const perguntas = [{ enunciado: "Assim que saiu da escola, você sedepara com uma nova tecnologia: um chat que consegueresponder a todas as dúvidas que uma pessoa pode ter.Além disso, o chat também gera imagens e áudioshiper-realistas. Qual o seu primeiro pensamento?", alternativas: ["Isso é assustador!", "Isso é maravilhoso!"],}];
}
const perguntas = [  
    {  
    enunciado: "Pergunta 1",
    alternativas:["Alternativa 1", "Alternativa 2"],
    },
    {
    enunciado: "Insira o enunciado da Pergunta 2",
    alternativas: ["Alternativa 1", "Alternativa 2"],
    }
    {
    enunciado: "Insira o enunciado da Pergunta 3",
    alternativas :["Alternativa 1", "Alternativa 2"],
    },
]

    function mostraPergunta() {
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado
        mostraAlternativas();
        }
        function mostraAlternativas() {

            


}
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
                
                createElement("button");
                
                botaoAlternativas.textContent = alternativa;

<div class="caixa-alternativas"></div>     

const caixaAlternativas = document.querySelector
(".caixa-alternativas");

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document. createElement("button");
    
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);

    function mostraPergunta() {
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado
        mostraAlternativas();
        }
        function mostraAlternativas() {

            enunciado: "Assim que saiu da escola, você sedepara com uma nova tecnologia: um chat que consegueresponder a todas as dúvidas que uma pessoa pode ter.Além disso, o chat também gera imagens e áudioshiper-realistas. Qual o seu primeiro pensamento?",

alternativas: [
"Isso é assustador!",
"Isso é maravilhoso!",
]
}
{function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document. createElement("button");
    
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);}
}
}

const perguntas = [
    {
    enunciado: "Pergunta 1",
    alternativas: ["Alternativa 1", "Alternativa 2"],
    },
    
    {
    enunciado: "Pergunta 2",
    alternativas: ["Alternativa 1", "Alternativa 2"],
    },

    function mostraAlternativa() {
        for (const alternativa of perguntaAtual.alternativas)
        {
        const botaoAlternativas = document. createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
        }
        }

    function mostraAlternativa() {
            for (const alternativa of perguntaAtual.alternativas) {
            const botaoAlternativas = document. createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click")
            function () {
            atual++;
            mostraPergunta();
            };
            caixaAlternativas.appendChild(botaoAlternativas);
            }
            }    

            const perguntas = [
                {
                enunciado: "Insira o enunciado da Pergunta 1",
                alternativas: ["Alternativa 1", "Alternativa 2"],
                },
                {
                enunciado: "Insira o enunciado da Pergunta 2",
                alternativas: ["Alternativa 1", "Alternativa 2"],
                },
                {
                enunciado: "Insira o enunciado da Pergunta 3",
                alternativas: ["Alternativa 1", "Alternativa 2"],
                }
                ];        
                let atual = 0;
                let perguntaAtual;
                function mostraPergunta() {
                    perguntaAtual = perguntas[atual];
                    caixaPerguntas.textContent = perguntaAtual.enunciado;
                    }
                    mostraPergunta()