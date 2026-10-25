var map = L.map('map').setView([-14.8612, -40.8444], 14); //chama a biblioteca do leaflet (L), procura uma div com id "map", e adiciona o mapa nela. 14 é o zoom padrão

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map); // 

const pontosSustentaveis = [ //ponto teste para criação de pin no mapa

    {
    nome: "Recicla Conquista",
    categoria: "Reciclagem",
    lat: -14.8711,
    lng: -40.8278,
    bairro: "Candeias",
    descricao: "Ponto de coleta seletiva e apoio à reciclagem de resíduos sólidos.",
    beneficios: "Redução do lixo nos aterros, incentivo à economia circular e preservação ambiental.",
    link: "https://maps.app.goo.gl/JNWKY4QreYxnx439A"    
    },

    {
    nome: "Recicla Conquista",
    categoria: "Reciclagem",
    lat: -14.8526,
    lng: -40.8622,
    bairro: "Urbis II",
    descricao: "Ponto de entrega voluntária de recicláveis localizado no Centro Social Urbano (CSU).",
    beneficios: "Facilita o descarte correto de resíduos para os moradores da Zona Oeste e fortalece a cata seletiva local.",
    link: "https://maps.app.goo.gl/FAHr8fatkRMMqYQd7"    
    },

    {
    nome: "H2i Recicla",
    categoria: "Eletronicos",
    lat: -14.8732,
    lng: -40.8471,
    bairro: "Jurema",
    descricao: "Empresa especializada na gestão e destinação correta de resíduos eletrônicos. Recebimento exclusivo no local, não realiza coleta domiciliar.",
    beneficios: "Descarte seguro de lixo eletrônico, prevenção de contaminação do solo e reciclagem adequada de componentes.",
    link: "https://maps.app.goo.gl/gAGpe6VQWkRLuN9q6"    
    },

    {
    nome: "SBS Sucatas de Placas Eletrônicas",
    categoria: "Eletronicos",
    lat: -14.8938,
    lng: -40.8395,
    bairro: "Boa Vista",
    descricao: "Empresa especializada na compra e reciclagem de placas eletrônicas em grande volume (mínimo de 100 kg para retirada/compra).",
    beneficios: "Destinação adequada para resíduos eletrônicos em escala, valorização de sucata tecnológica e incentivo à economia circular.",
    link: "https://maps.app.goo.gl/G4AK7Q2zRTyKvvE6A"    
    },

    {
    nome: "Sucata Prescom Metais",
    categoria: "Reciclagem",
    lat: -14.8469,
    lng: -40.8798,
    bairro: "Bairro Brasil",
    descricao: "Empresa voltada para a compra, venda e comércio atacadista de sucatas e resíduos metálicos como ferro, alumínio e cobre.",
    beneficios: "Incentivo ao reaproveitamento de metais, geração de renda via reciclagem e destinação adequada de resíduos ferrosos e não ferrosos.",
    link: "https://maps.app.goo.gl/3dbhiJeu81XhaVUc6"    
    },

    {
    nome: "Sucata Esperança",
    categoria: "Reciclagem",
    lat: -14.8450,
    lng: -40.8858,
    bairro: "Loteamento Pacheco",
    descricao: "Ponto de compra, venda e comercialização de sucatas ferrosas e materiais recicláveis em geral.",
    beneficios: "Fomento à reciclagem de metais e plásticos, apoio à economia circular e destinação responsável de resíduos industriais e urbanos.",
    link: "https://maps.app.goo.gl/epR1dtKfFFptipN46"    
    },

    {
    nome: "Só Sucatas",
    categoria: "Reciclagem",
    lat: -14.8535,
    lng: -40.8496,
    bairro: "Bairro Brasil",
    descricao: "Comércio de ferro velho, peças automotivas usadas e comercialização de sucatas metálicas.",
    beneficios: "Reaproveitamento de autopeças, destinação adequada de resíduos ferrosos e incentivo à reciclagem de metais na Zona Oeste.",
    link: "https://maps.app.goo.gl/FCChE9eK31GQWDup9"    
    },

    {
    nome: "Conquista Reciclagem Ind e Comércio",
    categoria: "Reciclagem",
    lat: -14.8218,
    lng: -40.8049,
    bairro: "Chácaras Agroflores",
    descricao: "Empresa voltada para o processamento industrial, triagem e comercialização de resíduos recicláveis em larga escala",
    beneficios: "Fortalecimento da cadeia de reciclagem industrial, destinação adequada de grandes volumes e redução do impacto ambiental.",
    link: "https://maps.app.goo.gl/88iZSJLJsevn2LVj9"    
    }
]

const marcadoresNoMapa = []

const caminhosPin = {
    Reciclagem: "assets/svg-icon/recycle.svg",
    Eletronicos: "assets/svg-icon/icon-electronic-sidebar.svg"
}

function normalizar(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim()
}

pontosSustentaveis.forEach(ponto => {

    const caminhoSvg = caminhosPin[ponto.categoria]
    const marcador = L.marker([ponto.lat, ponto.lng], {
        icon: L.icon({
            iconUrl: caminhoSvg,
            iconSize: [40, 40],
            iconAnchor: [20, 20],
            popupAnchor: [0, -16]
        })
    })

    const popupConteudo = `
    <div class="popup-card tema-${ponto.categoria}">
      <h3 class="titulo-popup" style="margin: 8px 0 4px;">${ponto.nome} <span class="tag-categoria">${ponto.categoria}</span></h3> 
      <p style="font-size: 12px; color: #555; margin: 6px 0;"> <img src="assets/svg-icon/location-icon.svg" alt="icone de localização"> <strong>${ponto.bairro}, Vitória da Conquista - BA</strong></p>
      <p style="font-size: 13px;">${ponto.descricao}</p>
      <p style="font-size: 13px;"><strong>Benefícios:</strong> ${ponto.beneficios} </p>
      <a href = "${ponto.link}" target="_blank" style="display:block; text-align:center; width:100%; background:#2e7d32; color:white; border:none; padding:6px; border-radius:4px; cursor:pointer;">Quero participar</a>
    </div>`

    const larguraTela = window.innerWidth
    marcador.bindPopup(popupConteudo, {
        minWidth: Math.min(280, larguraTela - 90),
        maxWidth: Math.min(350, larguraTela - 60),
        autoPanPadding: [20, 20]
    })
    marcador.categoria = ponto.categoria
    marcador.textoBusca = normalizar(ponto.nome + ' ' + ponto.bairro)
    marcador.addTo(map)
    marcadoresNoMapa.push(marcador)
})

const botoesFiltro = document.querySelectorAll('.btn-filtro')
const campoBusca = document.querySelector('.buscar')
const avisoBusca = document.getElementById('aviso-busca')

let categoriaAtual = 'todos'
let termoAtual = ''

function aplicarFiltros(moverMapa) {
    const visiveis = []

    marcadoresNoMapa.forEach(marcador => {
        const bateCategoria = categoriaAtual === 'todos' || marcador.categoria === categoriaAtual
        const bateBusca = termoAtual === '' || marcador.textoBusca.includes(termoAtual)

        if (bateCategoria && bateBusca) {
            marcador.addTo(map)
            visiveis.push(marcador)
        } else {
            marcador.remove()
        }
    })

    map.closePopup()

    if (termoAtual !== '' && visiveis.length === 0) {
        avisoBusca.textContent = 'Nenhum ponto encontrado para "' + campoBusca.value.trim() + '".'
        avisoBusca.hidden = false
    } else {
        avisoBusca.hidden = true
    }

    if (moverMapa && termoAtual !== '' && visiveis.length > 0) {
        if (visiveis.length === 1) {
            map.setView(visiveis[0].getLatLng(), 16)
            visiveis[0].openPopup()
        } else {
            map.fitBounds(L.featureGroup(visiveis).getBounds(), { padding: [50, 50], maxZoom: 16 })
        }
    }
}

botoesFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
        categoriaAtual = botao.dataset.categoria
        aplicarFiltros(true)

        botoesFiltro.forEach(b => b.classList.remove('ativo'))
        botao.classList.add('ativo')
    })
})

let esperaBusca
campoBusca.addEventListener('input', () => {
    clearTimeout(esperaBusca)
    esperaBusca = setTimeout(() => {
        termoAtual = normalizar(campoBusca.value)
        aplicarFiltros(true)
    }, 300)
})

campoBusca.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter') {
        clearTimeout(esperaBusca)
        termoAtual = normalizar(campoBusca.value)
        aplicarFiltros(true)
        campoBusca.blur()
    }
})

function atualizarMetricas() {
    const contadores = document.querySelectorAll('.numero-metrica')
    contadores.forEach(contador => {
        contador.textContent = 0
    })

    pontosSustentaveis.forEach(ponto => {
        const contador = document.getElementById('contador-' + ponto.categoria)
        if (contador) {
            contador.textContent = Number(contador.textContent) + 1
        }
    })

    document.getElementById('contador-total').textContent = pontosSustentaveis.length
}

atualizarMetricas()

const modalSobre = document.getElementById('modal-sobre')
const botaoSobre = document.getElementById('botao-sobre')
const botaoFechar = document.getElementById('fechar-modal')

botaoSobre.addEventListener('click', () => {
    modalSobre.classList.add('aberto')
})

botaoFechar.addEventListener('click', () => {
    modalSobre.classList.remove('aberto')
})

modalSobre.addEventListener('click', (evento) => {
    if (evento.target === modalSobre) {
        modalSobre.classList.remove('aberto')
    }
})

document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape') {
        modalSobre.classList.remove('aberto')
    }
})

function ajustarMapa() {
    setTimeout(() => map.invalidateSize(), 200)
}

window.addEventListener('resize', ajustarMapa)
window.addEventListener('orientationchange', ajustarMapa)