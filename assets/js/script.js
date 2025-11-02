// jogos

const jogos = [
    {
        nome: "ChronoTeia",
        plataforma: "Win, OSX",
        preco: "R$ 160,00",
        imagem: "../images/1ChronoTeia/chronochars (2).jpg"
    },
    {
        nome: "Horizontes Perdidos",
        plataforma: "Xbox S/X, PS5",
        preco: "R$ 220,00",
        imagem: "../images/2Horizontes-Perdidos/page-img (6).jpg"
    },
    {
        nome: "Ecos do Abismo",
        plataforma: "Win, Xbox S/X",
        preco: "R$ 100,00",
        imagem: "../images/3Ecos-do-Abismo/ecoimg (1).jpg"
    },
    {
        nome: "Lendas Estrelarium",
        plataforma: "Series S/X, PS5",
        preco: "R$ 64,00",
        imagem: "../images/4Lendas-de-Estrelarium/lendaschar.jpg"
    },
    {
        nome: "Sonhos de Neón",
        plataforma: "Series S/X e PS5",
        preco: "R$ 112,50",
        imagem: "../images/2Horizontes-Perdidos/page-img (6).jpg"
    },
    {
        nome: "Reino em Cinzas",
        plataforma: "Win, Xbox S/X",
        preco: "R$ 70,00",
        imagem: "../images/3Ecos-do-Abismo/ecoimg (1).jpg"
    }
];


// carrinho

function adicionarCarrinho(index) {
    const usuarioAtivo = JSON.parse(localStorage.getItem("usuarioAtivo"));

    if (!usuarioAtivo) {
        alert("Você precisa estar logado para adicionar itens ao carrinho!");
        return;
    }

    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.push(jogos[index]);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert(`"${jogos[index].nome}" foi adicionado ao carrinho!`);
}

function renderizarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const container = document.getElementById("grid-carrinho");

    container.innerHTML = "";

    if (!carrinho.length) {
        container.innerHTML = "<p class='text-center'>Carrinho vazio.</p>";
        return;
    }

    carrinho.forEach((jogo, index) => {
        const bloco = document.createElement("div");
        bloco.className = "container p-3 border shadow rounded mb-4";

        bloco.innerHTML = `
        <div class="row align-items-center text-center gy-3 gx-2">
            <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                <img src="${jogo.imagem}" alt="${jogo.nome}" class="img-fluid rounded" style="max-width: 150px;">
            </div>
            <div class="col-6 col-md-4 col-lg-2 fw-semibold">${jogo.nome}</div>
            <div class="col-6 col-md-4 col-lg-2">${jogo.plataforma}</div>
            <div class="col-6 col-md-4 col-lg-2">${jogo.preco}</div>
            <div class="col-12 col-md-8 col-lg-4 d-flex justify-content-center gap-3">
                <button class="btn btn-danger w-50" onclick="removerItem(${index})">Remover</button>
                <button class="btn btn-success w-50">Comprar</button>
            </div>
        </div>`;

        container.appendChild(bloco);
    });
}




function removerItem(index) {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    renderizarCarrinho();
}
window.onload = () => {
    renderizarCarrinho();
};
