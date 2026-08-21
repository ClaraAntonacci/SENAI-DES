const API_URL = "http://localhost:3000";


const estadoCompra = {
    filmeId: null,
    filmeNome: "",
    sessaoId: null,
    sala: "",
    horario: "",
    assentoId: null,
    assentoNumero: ""
};


document.addEventListener("DOMContentLoaded", () => {

    carregarFilmes();

});



const trocarAba = (nomeAba) => {

    document
        .querySelectorAll(".aba")
        .forEach((aba) => {

            aba.classList.remove("active");

        });


    document
        .querySelectorAll(".nav-links a")
        .forEach((link) => {

            link.classList.remove("active");

        });


    if (nomeAba === "catalogo") {

        document
            .getElementById("aba-catalogo")
            .classList.add("active");

        document
            .getElementById("link-catalogo")
            .classList.add("active");

    }


    if (nomeAba === "meus-ingressos") {

        document
            .getElementById("aba-meus-ingressos")
            .classList.add("active");

        document
            .getElementById("link-ingressos")
            .classList.add("active");

        buscarIngressosDoBackend();

    }

};



const carregarFilmes = async () => {

    const container =
        document.getElementById("movies-grid");


    try {

        const resposta =
            await fetch(`${API_URL}/filmes/listar`);


        if (!resposta.ok) {

            throw new Error(
                "Erro ao buscar filmes"
            );

        }


        const filmes =
            await resposta.json();


        container.innerHTML = "";


        if (!Array.isArray(filmes) || filmes.length === 0) {

            container.innerHTML = `
                <p class="loading">
                    Nenhum filme encontrado.
                </p>
            `;

            return;

        }


        filmes.forEach((filme) => {

            const card =
                document.createElement("div");


            card.className =
                "movie-card";


            card.onclick = () => {

                iniciarCompra(filme);

            };


            card.innerHTML = `

                <div class="poster-container">

                    <div class="poster-placeholder">

                        🎬

                    </div>

                    <span class="badge">
                        Livre
                    </span>

                </div>


                <div class="movie-details">

                    <div>

                        <h3>
                            ${filme.nome}
                        </h3>

                        <p>
                            ${filme.genero || "Cinema"}
                            •
                            ${filme.duracao || "---"} min
                        </p>

                        <p>
                            ${filme.descricao || ""}
                        </p>

                    </div>


                    <button class="btn">

                        Garantir Ingresso

                    </button>

                </div>

            `;


            container.appendChild(card);

        });


    } catch (error) {

        console.error(
            "Erro ao carregar filmes:",
            error
        );


        container.innerHTML = `

            <p
                class="loading"
                style="color: var(--brand-color);"
            >
                Não foi possível conectar ao Back-end.
                <br>
                Verifique se o servidor está rodando.
            </p>

        `;

    }

};

const iniciarCompra = async (filme) => {

    estadoCompra.filmeId =
        filme.id;

    estadoCompra.filmeNome =
        filme.nome;

    estadoCompra.sessaoId =
        null;

    estadoCompra.assentoId =
        null;

    estadoCompra.assentoNumero =
        "";

    document
        .getElementById(
            "filme-selecionado"
        )
        .textContent =
        filme.nome;


    document
        .querySelectorAll(".aba")
        .forEach((aba) => {

            aba.classList.remove("active");

        });


    document
        .getElementById(
            "aba-checkout"
        )
        .classList.add("active");


    await carregarSessoes(
        filme.id
    );


    exibirPasso(
        "step-sessao"
    );

};


const exibirPasso = (passoId) => {

    document
        .querySelectorAll(".step")
        .forEach((step) => {

            step.style.display = "none";

        });


    const passo =
        document.getElementById(
            passoId
        );


    if (passo) {

        passo.style.display =
            "block";

    }

};



const carregarSessoes = async (filmeId) => {

    const selectHorario =
        document.getElementById(
            "select-horario"
        );


    selectHorario.innerHTML = `

        <option value="">
            Carregando horários...
        </option>

    `;


    try {

        const resposta =
            await fetch(
                `${API_URL}/sessoes/${filmeId}`
            );


        if (!resposta.ok) {

            throw new Error(
                "Erro ao buscar sessões"
            );

        }


        const sessoes =
            await resposta.json();


        selectHorario.innerHTML = `

            <option value="">
                Selecione um horário
            </option>

        `;


        if (
            !Array.isArray(sessoes) ||
            sessoes.length === 0
        ) {

            selectHorario.innerHTML = `

                <option value="">
                    Nenhuma sessão disponível
                </option>

            `;

            return;

        }


        sessoes.forEach((sessao) => {

            const option =
                document.createElement(
                    "option"
                );


            option.value =
                sessao.id;


            option.textContent =
                sessao.horario;


            selectHorario.appendChild(
                option
            );

        });


    } catch (error) {

        console.error(
            "Erro ao carregar sessões:",
            error
        );


        selectHorario.innerHTML = `

            <option value="">
                Erro ao carregar sessões
            </option>

        `;

    }

};



const irParaAssentos = async () => {

    const selectSala =
        document.getElementById(
            "select-sala"
        );


    const selectHorario =
        document.getElementById(
            "select-horario"
        );


    if (!selectHorario.value) {

        alert(
            "Selecione um horário."
        );

        return;

    }


    estadoCompra.sala =
        selectSala.value;


    estadoCompra.sessaoId =
        Number(
            selectHorario.value
        );


    estadoCompra.horario =
        selectHorario
            .options[
            selectHorario.selectedIndex
        ]
            .textContent;


    estadoCompra.assentoId =
        null;


    estadoCompra.assentoNumero =
        "";


    document
        .getElementById(
            "btn-ir-confirmar"
        )
        .disabled = true;


    await carregarAssentos(
        estadoCompra.sessaoId
    );


    exibirPasso(
        "step-assentos"
    );

};



const carregarAssentos = async (sessaoId) => {

    const grid =
        document.getElementById(
            "seats-grid"
        );


    grid.innerHTML = `

        <p class="loading">
            Carregando assentos...
        </p>

    `;


    try {

        const resposta =
            await fetch(
                `${API_URL}/assentos/${sessaoId}`
            );


        if (!resposta.ok) {

            throw new Error(
                "Erro ao buscar assentos"
            );

        }


        const assentos =
            await resposta.json();


        grid.innerHTML = "";


        if (
            !Array.isArray(assentos) ||
            assentos.length === 0
        ) {

            grid.innerHTML = `

                <p class="loading">
                    Nenhum assento cadastrado
                    para esta sessão.
                </p>

            `;

            return;

        }


        assentos.forEach((assento) => {

            const seat =
                document.createElement(
                    "div"
                );


            seat.className =
                "seat";


            seat.textContent =
                assento.numero;


            if (assento.ocupado) {

                seat.classList.add(
                    "ocupado"
                );


                seat.title =
                    "Assento ocupado";


                return;

            }


            seat.onclick = () => {

                document
                    .querySelectorAll(
                        ".seat"
                    )
                    .forEach((s) => {

                        s.classList.remove(
                            "selected"
                        );

                    });


                seat.classList.add(
                    "selected"
                );


                estadoCompra.assentoId =
                    assento.id;


                estadoCompra.assentoNumero =
                    assento.numero;


                document
                    .getElementById(
                        "btn-ir-confirmar"
                    )
                    .disabled = false;

            };


            grid.appendChild(
                seat
            );

        });


    } catch (error) {

        console.error(
            "Erro ao carregar assentos:",
            error
        );


        grid.innerHTML = `

            <p
                class="loading"
                style="color: var(--brand-color);"
            >
                Erro ao carregar os assentos.
            </p>

        `;

    }

};



const irParaConfirmacao = () => {

    if (!estadoCompra.assentoId) {

        alert(
            "Selecione um assento."
        );

        return;

    }


    document
        .getElementById(
            "input-sala-confirm"
        )
        .value =
        `${estadoCompra.sala} - ${estadoCompra.horario}`;


    document.querySelector('#input-cadeira-confirm').value = estadoCompra.assentoNumero;


    document
        .getElementById(
            "input-filme-confirm"
        )
        .value = "";


    exibirPasso(
        "step-confirmacao"
    );

};


const verificarCompra = async () => {

    const nomeFilme =
        document
            .getElementById(
                "input-filme-confirm"
            )
            .value
            .trim();


    const assentoDigitado =
        document
            .getElementById(
                "input-cadeira-confirm"
            )
            .value
            .trim();


    if (!nomeFilme) {

        alert(
            "Digite o nome do filme."
        );

        return;

    }


    if (!assentoDigitado) {

        alert(
            "Digite o número do assento."
        );

        return;

    }


    try {

        const respostaVerificacao =
            await fetch(
                `${API_URL}/verificacao`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        filmeId:
                            estadoCompra.filmeId,

                        sessaoId:
                            estadoCompra.sessaoId,

                        nomeFilme:
                            nomeFilme,

                        assento:
                            assentoDigitado

                    })

                }
            );


        const verificacao =
            await respostaVerificacao.json();


        if (!respostaVerificacao.ok) {

            alert(
                verificacao.mensagem ||
                "Verificação recusada."
            );

            return;

        }


        const respostaCompra =
            await fetch(
                `${API_URL}/compras`,
            {
                 method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        filmeId:
                            estadoCompra.filmeId,

                        sessaoId:
                            estadoCompra.sessaoId,

                        assentoId:
                            verificacao.assentoId,

                        verificacao: {

                            assento:
                                assentoDigitado

                        }

                    })

                }
            );


        const compra =
            await respostaCompra.json();


        if (!respostaCompra.ok) {

            alert(
                compra.erro ||
                "Erro ao realizar compra."
            );

            return;

        }


        const quantidade =
            compra.compra.quantidade;


        const valorTotal =
            Number(
                compra.compra.valorTotal
            ).toFixed(2);


        const resultado =
            document.getElementById(
                "resultado-compra"
            );


        resultado.innerHTML = `

            <div class="resultado-compra sucesso">

                <div class="resultado-icon">
                    🎟️
                </div>

                <h2>
                    Compra realizada!
                </h2>

                <p>
                    Filme:
                    <strong>
                        ${estadoCompra.filmeNome}
                    </strong>
                </p>

                <p>
                    Sessão:
                    ${estadoCompra.horario}
                </p>

                <p>
                    Assento:
                    ${assentoDigitado}
                </p>

                <p>
                    Quantidade:
                    <strong>
                        ${quantidade}
                    </strong>
                </p>

                <p>
                    Valor total:
                    <strong>
                        R$ ${valorTotal}
                    </strong>
                </p>

                <br>

                <button
                    class="btn"
                    onclick="trocarAba('meus-ingressos')"
                >
                    Ver Meus Ingressos
                </button>

            </div>

        `;


        exibirPasso(
            "step-resultado"
        );


    } catch (error) {

        console.error(
            "Erro na compra:",
            error
        );


        alert(
            "Erro de comunicação com o Back-end."
        );

    }

};



const buscarIngressosDoBackend = async () => {

    const container =
        document.getElementById(
            "lista-ingressos"
        );


    container.innerHTML = `

        <p class="loading">
            Buscando ingressos...
        </p>

    `;


    try {

        const resposta =
            await fetch(
                `${API_URL}/compras`
            );


        if (!resposta.ok) {

            throw new Error(
                "Erro ao buscar compras"
            );

        }


        const compras =
            await resposta.json();


        if (
            !Array.isArray(compras) ||
            compras.length === 0
        ) {

            container.innerHTML = `

                <p
                    class="loading"
                    style="grid-column: 1 / -1;"
                >
                    Nenhum ingresso encontrado.
                </p>

            `;

            return;

        }


        container.innerHTML = "";


        compras.forEach((compra) => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "ticket-card";


            const assento =
                compra
                    .ingressos?.[0]
                    ?.assento?.numero ||
                "---";


            card.innerHTML = `

                <div class="ticket-header">

                    <h3>
                        ${compra.filme?.nome ||
                "Filme"
                }
                    </h3>

                    <span
                        style="
                            color: var(--accent-green);
                            font-size: 0.75rem;
                            font-weight: 700;
                        "
                    >
                        ● CONFIRMADO
                    </span>

                </div>


                <div class="ticket-body">

                    <div class="ticket-info">

                        <label>
                            Horário
                        </label>

                        <span>
                            ${compra
                    .sessao
                    ?.horario ||
                "---"
                }
                        </span>

                    </div>


                    <div class="ticket-info">

                        <label>
                            Assento
                        </label>

                        <span>
                            ${assento}
                        </span>

                    </div>


                    <div class="ticket-info">

                        <label>
                            Ingressos
                        </label>

                        <span>
                            ${compra.quantidade
                }
                        </span>

                    </div>


                    <div class="ticket-info">

                        <label>
                            Valor
                        </label>

                        <span>
                            R$
                            ${Number(
                    compra.valorTotal
                ).toFixed(2)
                }
                        </span>

                    </div>

                </div>


                <div class="ticket-footer">

                    <span
                        style="
                            font-size: 0.75rem;
                            color: var(--text-muted);
                        "
                    >
                        #${compra.id}
                    </span>

                    <div class="barcode-stub"></div>

                </div>

            `;


            container.appendChild(
                card
            );

        });


    } catch (error) {

        console.error(
            "Erro ao carregar ingressos:",
            error
        );


        container.innerHTML = `

            <p
                class="loading"
                style="color: var(--brand-color);"
            >
                Erro ao carregar os ingressos.
            </p>

        `;

    }

};