// função para obter a inicial do nome inserido
function obterInicial(nome) {
    return nome[0].toUpperCase();
}

// função que busca o adjetivo de acordo com a inicial identificada
function obterAdjetivos(inicialNome) {
    //acessa o valor da chave [inicialNome] associada ao objeto de adjetivosPositivos
    //se o valor não for encontrado, retorna ['N/A]
     return adjetivosPositivos [inicialNome] || ['N/A'];
}

//função que cria o resultado de acordo com as duas funções anteriores
function criarResultado(adjetivo) {
    //obtem o elemento HTML resultado
    const resultado = document.getElementById('resultado');
    // o textContent obtem o conteúdo de texto de um elemento HTML
    resultado.textContent = `Your adjective is: `;

}

// função que exibe o resultado criado em uma página
function geraAdjetivo(){
    // variável que busca a section no HTML
    let section = document.getElementById("resultado-gerador");
    // constante que obtem o valor digitado pelo usuário no campo 'nome'
    const nome = document.getElementById('nome').value;
    //se...
    if (nome){
        // for obtido a inicial e o adjetivo
        const inicialNome = obterInicial(nome);
        const adjetivos = obterAdjetivos (inicialNome);
        // um adjetivo dentro do dicionário é sorteado para aparecer
        const adjetivoAleatorio = adjetivos[Math.floor(Math.random()*adjetivos.length)];
        criarResultado(adjetivoAleatorio);

        // adiciona o adjetivo ao HTML da section e exibe na tela
        section.innerHTML=`
        <div class="item-gerado">
            <h3>
                <p class="adjetivoGerado"> ${adjetivoAleatorio}</p>
            </h3>
        </div>`;
    } else {
        // se não, é exibida a mensagem ('Por favor, insira um nome')
        criarResultado('Por favor, insira um nome.');

}
section.innerHTML;
}


