// const pokemonList = document.getElementById('pokemonList');
const pokemonModal = document.getElementById('pokemonModal');
const closeModal = document.getElementById('closeModal');
const modalImage = document.getElementById('modalImage');

// const modalTitle = document.getElementById('modalTitle');
// const modalType = document.getElementById('modalType');

//Função para exibir o modal com os detalhes do Pokémon
function showPokemonModal(pokemonData) {
    modalImage.innerHTML = `
    
        <h2 class="pokemon-name ">#${pokemonData.number} - ${pokemonData.name}</h2>
        <img src="${pokemonData.photo}" alt="${pokemonData.name}">
        <div class="pokemon-types">
            ${pokemonData.types.map(type => `
                <span class="type ${type}">${type}</span>
            `).join('')}
        </div>
    `;
    
    pokemonModal.style.display = 'flex';
}

//Fechar Modal quando clicar no X
closeModal.addEventListener('click', () => {
        pokemonModal.style.display = 'none';
});

//Fecha o modal quando clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === pokemonModal) {
        pokemonModal.style.display = 'none';
    }
});

//Adicionar eventos aos itens da lista de Pokémon
function addPokemonClickEvents(pokemon) {
    const listItems = document.querySelectorAll('.pokemon-item');
    listItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            showPokemonModal(pokemon[index]);
        });
    });
}
