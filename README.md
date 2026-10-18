🌱 Sementes do Futuro (EcoMapa)

Mapa verde de Vitória da Conquista - BA: um site que reúne em um só lugar os pontos de arborização, reciclagem e etc, para que a população saiba que esses espaços existem e onde encontrá-los.

Muitos desses locais já existem, mas ainda são pouco conhecidos. Quanto mais gente sabe onde descartar corretamente e onde participar, menos lixo vai parar em terrenos baldios, ruas e córregos, e mais verde, limpa e saudável a cidade fica.

✨ Funcionalidades
Mapa interativo com marcadores para cada ponto, usando Leaflet e OpenStreetMap
Filtros por categoria: todos os pontos, reciclagem, eletrônicos e arborização
Busca por bairro ou nome do ponto (ignora acentos e maiúsculas)
Popup com detalhes de cada ponto: descrição, benefícios e link para o local no Google Maps
Contadores que se atualizam automaticamente conforme os pontos são cadastrados
Responsivo: funciona em computadores, tablets e celulares
Janela "Sobre o projeto" explicando o objetivo do site
🗂️ Categorias
Categoria	Descrição
Reciclagem	Pontos de reciclagem de materiais em geral
Eletronicos	Pontos específicos para coleta de eletrônicos
Arborizacao	Pontos de arborização
🛠️ Tecnologias
HTML, CSS e JavaScript puro (sem frameworks e sem etapa de build)
Leaflet 1.9.4 para o mapa
OpenStreetMap para os mapas de fundo
Fonte Inter (Google Fonts)
📁 Estrutura do projeto
.
├── index.html      # estrutura da página
├── style.css       # estilos e responsividade
├── script.js       # mapa, pontos, filtros, busca e métricas
└── assets/
    ├── logo-marca.png
    └── svg-icon/   # ícones dos filtros, marcadores e rodapé

📍 Como adicionar um novo ponto

Os pontos ficam na lista pontosSustentaveis, no início do script.js. Para cadastrar um novo, adicione um objeto à lista:

js
{
    nome: "Nome do local",
    categoria: "Reciclagem",   // Reciclagem | Eletronicos | Arborizacao
    lat: -14.8500,
    lng: -40.8382,
    bairro: "Centro",
    descricao: "O que é o local e o que ele recebe.",
    beneficios: "Qual o benefício para a cidade e o meio ambiente.",
    link: "https://maps.app.goo.gl/..."   // link do local no Google Maps
}

O marcador, o filtro, a busca e os contadores se atualizam sozinhos.

Dica: para pegar a latitude e a longitude, clique com o botão direito no local em maps.google.com e copie as coordenadas.

Adicionando uma nova categoria
Adicione um botão em index.html, dentro de .button-list, com o data-categoria correspondente
Adicione o ícone em assets/svg-icon/ e registre o caminho em caminhosPin, no script.js
Crie o estilo .tema-NomeDaCategoria .tag-categoria no style.css
Adicione o card de métrica em index.html, com o id contador-NomeDaCategoria
🤝 Como contribuir

Conhece um ponto que ainda não está no mapa? Ajude o projeto a crescer:

Abra uma issue com o nome, o endereço e o tipo do local
Ou envie um pull request adicionando o ponto na lista pontosSustentaveis

Antes de sugerir um ponto, confira se as informações estão corretas, como endereço, o que o local aceita e se o recebimento é aberto ao público.

🗺️ Próximos passos
 Adicionar mais pontos de reciclagem, eletrônicos e arborização
 Botão "Usar minha localização" para encontrar o ponto mais próximo

🌿 Sementes do Futuro

Cultivando hoje o futuro da nossa cidade. Participe! Plante, cuide e compartilhe.