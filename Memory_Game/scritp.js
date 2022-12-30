const cardArray = [
    {
        name: 'blue',
        img: 'images/blueDragon.jpeg',
    },
    {
        name: 'gold',
        img: 'images/goldDragon.jpeg',
    },
    {
        name: 'multi',
        img: 'images/multiDragon.jpeg',
    },
    {
        name: 'purple',
        img: 'images/purpleDragon.jpeg',
    },
    {
        name: 'two',
        img: 'images/twoDragons.jpeg',
    },
    {
        name: 'white',
        img: 'images/whiteDragon.jpeg',
    },
    {
        name: 'blue',
        img: 'images/blueDragon.jpeg',
    },
    {
        name: 'gold',
        img: 'images/goldDragon.jpeg',
    },
    {
        name: 'multi',
        img: 'images/multiDragon.jpeg',
    },
    {
        name: 'purple',
        img: 'images/purpleDragon.jpeg',
    },
    {
        name: 'two',
        img: 'images/twoDragons.jpeg',
    },
    {
        name: 'white',
        img: 'images/whiteDragon.jpeg',
    }
]
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const cardsChosen = [];
const cardsChosenIds = [];

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/cardBack.jpeg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.append(card);
        
    }
}
createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    console.log('Check for match');
    if (cardsChosen[0] == cardsChosen[1]){
        alert('You have a match') // refactor to pop up a confirmation
        //cards[]

    }
};

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    console.log('cardsChosen');
    console.log('cardsChosenIds');
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
};