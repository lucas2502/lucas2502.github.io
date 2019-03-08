const memoryCard = (() =>{
const module = {}

module.create = () => {
    
    /*(function style(){*/
        const $head = document.querySelector("head");
        const $style = document.createElement("style");
        
    
        $style.textContent = `
            :root{
                --warm-pink: #f25a70;
            }
            .-win{
                background-color:  #ccffcc;
            }
            .-loser{
                background-color: #ffcccc;
            }
            
            .memory-card {
                width: 155px;
                height: 155px;
                position: relative;
            }


            .memory-card .card{
                width: 100%;
                height: 100%;
                background-color: var(--warm-pink);
                border-radius: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                position: relative;
                cursor: pointer;
                position: absolute;
                
            }
            .memory-card.-active .card,
            .memory-card.-score .card  {
                display: none;
            }

            .memory-card.-active .card.-front,
            .memory-card.-score .card.-front {
                display: flex;
            }


            .memory-card .card.-front{
                background-color: #fff;
                
            }
            
            .memory-card .card.-front::before{
                content:"";
                width: 100px;
                height: 100px;
                background-color: #d4d4d4;
                border-radius: 50%;
                position: absolute;
            }
            
            .memory-card .card > .icon {
                width: 100px;
                height: 100px;
            }
            
            .memory-card .card.-front > .icon {
                position: absolute;
                transform: translateY(-10px);
            }   
        `;
    
        $head.insertBefore($style, null);
    /*})();*/
        
    return (card) => `
        <div class="memory-card " onClick="memoryCard.handleClick(this)"> 
            <article class="card -front">
                <img 
                src="img/${card.nameImg}" 
                alt="${card.nameAlt}" 
                class="icon">
            </article>

            <article class="card -active">
                <img 
                src="img/icon-collabcode.png" 
                alt="O mascoste Gueio" 
                class="icon">
            </article>
        </div>
        `;
    
};

module.handleClick = $component => {
    if(!$component.classList.contains("-active")){
        module._activeMemoryCard($component);
        module._checkSure();
    };
};

module._activeMemoryCard = $component => {
    if(store.qtdActiveMemoryCard < 2 ) {//limitando a quantidade de cartas viradas
        $component.classList.add("-active");
    };
};

module._checkSure = () => {
    if(store.qtdActiveMemoryCard == 1){
        const $activeMemoryCards = document.querySelectorAll(
            ".memory-card.-active"
        );
        const $backgorundGame = document.querySelector("#root");
        if(
            $activeMemoryCards[0].querySelector(".-front .icon").getAttribute("src") ==
            $activeMemoryCards[1].querySelector(".-front .icon").getAttribute("src")
        ){
            store.score++;
        
            $activeMemoryCards.forEach($memoryCard => {
                $memoryCard.classList.add("-score");
                $memoryCard.classList.remove("-active");
                $backgorundGame.classList.add("-win");
                setTimeout(() => {$backgorundGame.classList.remove("-win")}, 1500);
            });
        }else{
            store.score--;
            $backgorundGame.classList.add("-loser")
            setTimeout(() => {
                $activeMemoryCards.forEach($memoryCard => {
                    $memoryCard.classList.remove("-active");
                    $backgorundGame.classList.remove("-loser")
                });
                store.qtdActiveMemoryCard = 0;
            }, 1500);
        };
        document.querySelector(".point-bar > .number").textContent = store.score;
        //mostra na tela o score
    };
};

return {
    create: module.create,
    handleClick: module.handleClick
};

})();
