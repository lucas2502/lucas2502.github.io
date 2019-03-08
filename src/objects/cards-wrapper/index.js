function createCardsWrapper(){
    const $cardsWrapper = document.createElement("section");
    $cardsWrapper.classList.add("cards-wrapper");
    
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .cards-wrapper{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-top: 10px;
            width: 100vw;
        }
        .cards-wrapper > div{
            margin: 10px 0px 10px 0px;
        }
    `;
    
    $head.insertBefore($style, null);

    $cardsWrapper.addEventListener('click', (event) => {
        store.qtdActiveMemoryCard = $cardsWrapper.querySelectorAll(".memory-card.-active").length;
    
        //Modo Complexo
        /*const $origin = event.target;
        console.log("origin", $origin);

        const $isActiveCard = $origin.closest(".memory-card").classList.contains("-active");
        console.log("isActiveCard: ", $isActiveCard);

        if($isActiveCard){
            $qtdCards ++;
        }else{
            $qtdCards --;
        };

        console.log("QTD: ",$qtdCards);*/
    });
    
    return $cardsWrapper;
}