var map = L.map('map').setView([-14.8612, -40.8444], 14); //chama a biblioteca do leaflet (L), procura uma div com id "map", e adiciona o mapa nela. 14 é o zoom padrão

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map); // 

const pontosSustentaveis = [ //ponto teste para criação de pin no mapa
    {
    imagem: "assets/praca-tancredo-neves-TESTE.jpg",
    nome: "Praça Tancredo Neves",
    categoria: "Arborizacao",
    lat: -14.8500,
    lng: -40.8382,
    bairro: "Centro",
    descricao: "Área pública com potencial para plantio de árvores nativas.",
    beneficios: "Mais sombra, redução da temperatura e melhora da qualidade do ar."    
    }
]

const marcadoresNoMapa = []

const caminhosPin = {
    Arborizacao: "assets/svg-icon/pinGreen.svg"
}

pontosSustentaveis.forEach(ponto => {

    const caminhoSvg = caminhosPin[ponto.categoria]
    const marcador = L.marker([ponto.lat, ponto.lng], {
        icon: L.icon({
            iconUrl: caminhoSvg,
            iconSize: [42, 42],
            iconArchor: [15, 15],
            popupAnchor: [0, -16]
        })
    })

    const popupConteudo = `
    <div class="popup-card tema-${ponto.categoria}">
      <img src="${ponto.imagem}" alt="${ponto.nome}" style="width:100%; height: 100px; object-fit: cover; border-radius: 6px;">
      <h3 class="titulo-popup" style="margin: 8px 0 4px;">${ponto.nome} <span class="tag-categoria">${ponto.categoria}</span></h3> 
      <p style="font-size: 12px; color: #555; margin: 6px 0;"> <img src="assets/svg-icon/location-icon.svg" alt="icone de localização"> <strong>${ponto.bairro}, Vitória da Conquista - BA</strong></p>
      <p style="font-size: 13px;">${ponto.descricao}</p>
      <p style="font-size: 13px;"><strong>Benefícios:</strong> ${ponto.beneficios} </p>
      <button style="width:100%; background:#2e7d32; color:white; border:none; padding:6px; border-radius:4px; cursor:pointer;">Quero participar</button>
    </div>`

    marcador.bindPopup(popupConteudo, {
        minWidth: 280,
        maxWidth: 350,
    })
    marcador.categoria = ponto.categoria
    marcador.addTo(map)
    marcadoresNoMapa.push(marcador)
})

