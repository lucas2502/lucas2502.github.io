const pointBar = (() => {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
        .point-bar {
            background-color: #f25a70;
            height: 40px;
            text-align: center;
        }
        .point-bar > .number {
            color: #fff;
            line-height: 40px;
            font-wight: bold;
        }
        `;

        $head.insertBefore($style, null);
    }

    module.create = () => {
        module._style();

        return `
            <header class="point-bar">
                <span class="number">0</span>
            </header>
        
        `
    }


    return {
        create: module.create
    }
})();