const baseUrl = "http://localhost:3000";

const lista = document.getElementById("lista");
const modal = document.getElementById("modal");

function limparFormulario() {
    document.querySelectorAll("#modal input, #modal textarea")
        .forEach(el => el.value = "");
}

function abrirModal() {
    if (modal) {
        modal.style.display = "block";
        limparFormulario();
    }
}

function fecharModal() {
    if (modal) {
        modal.style.display = "none";
        limparFormulario();
    }
}

async function carregar() {
    if (!lista) return;

    const res = await fetch(`${baseUrl}/eventos/listar`);
    const eventos = await res.json();

    lista.innerHTML = "";

    eventos.forEach(e => {
        const div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <span class="lixeira" onclick="excluir(${e.id}, event)">🗑</span>
            <h3>${e.titulo}</h3>
            <p>${e.local}</p>
        `;

        div.onclick = () => {
            window.location.href = `detalhes.html?id=${e.id}`;
        };

        lista.appendChild(div);
    });
}

async function salvarEvento() {
    const data = {
        titulo: document.getElementById("titulo").value,
        descricao: document.getElementById("descricao").value,
        data_evento: document.getElementById("data").value,
        local: document.getElementById("local").value,
        capacidade_maxima: 10
    };

    await fetch(`${baseUrl}/eventos/cadastrar`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    fecharModal();
    carregar();
}

async function excluir(id, event) {
    event.stopPropagation();

    if (!confirm("Excluir evento?")) return;

    const res = await fetch(`${baseUrl}/eventos/excluir/${id}`, {
        method: "DELETE"
    });

    const data = await res.json();

    if (!res.ok) {
        alert(data.erro);
        return;
    }

    alert(data.mensagem);
    carregar();
}

if (window.location.pathname.includes("detalhes.html")) {

    const info = document.getElementById("infoEvento");
    const galeria = document.getElementById("galeria");

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    async function carregarDetalhes() {
        const res = await fetch(`${baseUrl}/eventos/buscar/${id}`);
        const evento = await res.json();

        info.innerHTML = `
            <h2>${evento.titulo}</h2>
            <p>${evento.descricao}</p>
            <p><strong>Local:</strong> ${evento.local}</p>
            <p><strong>Data:</strong> ${evento.data_evento}</p>
        `;

        galeria.innerHTML = "";

        evento.imagens?.forEach(img => {
            const el = document.createElement("img");
            el.src = `${baseUrl}/${img.path}`;
            el.width = 150;

            galeria.appendChild(el);
        });
    }

    async function adicionarImagem() {
        const file = document.getElementById("imagem").files[0];

        if (!file) return alert("Selecione uma imagem");

        const formData = new FormData();
        formData.append("imagem", file);

        await fetch(`${baseUrl}/imagens-eventos/cadastrar/${id}`, {
            method: "POST",
            body: formData
        });

        carregarDetalhes();
    }

    function voltar() {
        window.location.href = "index.html";
    }

    carregarDetalhes();

    window.adicionarImagem = adicionarImagem;
    window.voltar = voltar;
}

carregar();