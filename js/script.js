
let sectionCards = document.querySelector('.cards');
const url = 'participantes-bbb23.json';
let clickLider = document.querySelector('.btnLider');
let clickAnjo = document.querySelector('.btnAnjo');
let clickMonstro = document.querySelector('.btnMonstro');
let clickImunizado = document.querySelector('.btnImunizado');
let clickParedao = document.querySelector('.btnParedao');
let clickEliminado = document.querySelector('.btnEliminado');
let clickTodos = document.querySelector('.btnTodos');

//Ler o arquivo JSON (API)

fetch('participantes-bbb23.json')
.then( response => response.json(url))
.then( data => {
    // console.log(data)
    data.map( participante => {
        // console.log(participante)
        // criar um card para cada participante do arquivo json
        let card = document.createElement('article')
        card.classList.add('card')
        // console.log(card)

        let icone1 = participante.situacao[0]
        let icone2 = participante.situacao[1] || "participando"

        card.innerHTML = `
            <div class="flip">
                <section class="front-card">
                <img class="foto" src="./images/300x300/${participante.imagem_verso}.png" alt="Goblin Guide">
                <span class="textGrupoFrente">${participante.grupo}</span>
                </section>

                <section class="back-card">
                <div class="situacao">
                    <img class="icone" src="./icones/${icone2}.png">
                    <img class="icone" src="./icones/${icone1}.png">
                </div>
                <img class="foto" src="./images//300x300//${participante.imagem}.png" alt="Back Card">
                <div class="center">
                    <span class="textGrupoVerso">${participante.nome} / ${participante.idade} anos</span><br>
                    <span class="textGrupoVerso">${participante.ocupacao}</span>
                </div>
                </section>
            </div>
        `
        sectionCards.appendChild(card)
        console.log(card);

            //Verificar os participantes para efetuar filtros nos cards visiveis
            //   if (participante.situacao[0] == 'participando') {
            //       card.classList.add('hide')
            //   }   

        //Verificar os participantes eliminados
        if (participante.situacao[0] == 'eliminado') {
            card.classList.add('eliminado')
        }

        clickLider.addEventListener('click', function showLider() {
            if (participante.situacao[0] !== 'lider') {
                card.classList.add('hide')
            }
        })
        clickAnjo.addEventListener('click', function showAnjo() {
            if (participante.situacao[0] !== 'anjo') {
            card.classList.add('hide')
            } 
        })
        clickMonstro.addEventListener('click', function showMonstro() {
            if (participante.situacao[0] !== 'monstro') {
            card.classList.add('hide')
            } 
        })
        clickImunizado.addEventListener('click', function showImunizado() {
            if (participante.situacao[0] !== 'imunizado') {
            card.classList.add('hide')
            } 
        })
        clickParedao.addEventListener('click', function showParedao() {
            if (participante.situacao[0] !== 'paredao') {
            card.classList.add('hide')
            } if (participante.situacao[1] == 'paredao') {
                card.classList.remove("hide");
            }
        })
        clickEliminado.addEventListener('click', function showEliminado() {
            if (participante.situacao[0] !== 'eliminado') {
            card.classList.add('hide')
            }
            
        })
        clickTodos.addEventListener('click', function showTodos() {
            if (participante.situacao[0] !== 'card') {
            card.classList.remove("hide");
            card.classList.add('card')
            } 
            console.log(card) 
        })

    })

})












