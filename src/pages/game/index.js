(() => {
const $root = document.querySelector("#root");

const $cardsWrapper =  createCardsWrapper();
const createMemoryCard = memoryCard.create();
const $layerStart = layerStart.render("START");

const $pointBar = pointBar.create();



const $memoryCardGaio = createMemoryCard({    
    nameImg: "icon-collabcode.png", 
    nameAlt: "Gaio mascote collacode"
    });

const $memoryCardCPlusPlus = createMemoryCard({
    nameImg:  "icon-c.png", 
    nameAlt:  "Book c++"
    });

const $memoryCardJs = createMemoryCard({ 
    nameImg: "-icon-js.png", 
    nameAlt: "Book JavaScript"
    });
const $memoryCardBug = createMemoryCard({ 
    nameImg: "icon-bug.png", 
    nameAlt: "Icon bug"
    });
const $memoryCardCabeca = createMemoryCard({ 
    nameImg: "icon-cabeca.png", 
    nameAlt: "Icon Head"
    });
const $memoryCardCelular = createMemoryCard({ 
    nameImg: "icon-celular.png", 
    nameAlt: "Icon Celphone"
    }); 
const $memoryCardJava = createMemoryCard({ 
    nameImg: "icon-java.png", 
    nameAlt: "Book Java"
    });
const $memoryCardPhp = createMemoryCard({ 
    nameImg: "icon-php.png", 
    nameAlt: "Book php"
    });
const $memoryCardResponsive = createMemoryCard({ 
    nameImg: "icon-responsivo.png", 
    nameAlt: "Icon Responsive"
    });
const $memoryCardSettings = createMemoryCard({ 
    nameImg: "icon-settings.png", 
    nameAlt: "Icon Setings"
    });
const $memoryCardWoman = createMemoryCard({ 
    nameImg: "icon-woman.png", 
    nameAlt: "Icon Woman"
    });



//Teste creat round start cards positions
let cards = [
    $memoryCardCPlusPlus,
    $memoryCardCPlusPlus,
    $memoryCardJs,
    $memoryCardJs,
    $memoryCardBug,
    $memoryCardBug,
    $memoryCardCabeca,
    $memoryCardCabeca
];    

const randomCards = ((value) => {
    let round = value.length, temp, index;
    while(round >0){
        index = Math.floor(Math.random() * round);
        round --;

        temp = value[round];
        value[round] = value[index];
        value[index] = temp;
    };
    return  $cardsWrapper.insertAdjacentHTML("beforeend", value);
})(cards);

/*
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCPlusPlus);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCPlusPlus);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCabeca);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCabeca);   
    */
$root.insertAdjacentHTML("afterbegin", $pointBar);    
$root.insertAdjacentElement("beforeend", $cardsWrapper);
$root.insertAdjacentHTML("beforeend", $layerStart);

})();

