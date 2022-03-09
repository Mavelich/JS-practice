(function () {

    function changeBackground() {
        const btn = document.querySelector('#btn');
        const body = document.body;
        const gradientText = document.querySelector('.gradient-name');
        gradientText.innerText = `background: linear-gradient(to right, #ffffff, #ffffff);`;
        btn.addEventListener('click', () => {
            const backgroundProp = hexNumInProperty();
            body.style.background = backgroundProp;
            gradientText.innerText = `background: ${backgroundProp}`;
        })
    }

    function decToHex() {
        const hexNum = Math.floor(Math.random() * 255).toString(16);
        return hexNum.length == 1 ? "0" + hexNum : hexNum;
    }

    function concatHexNumbers() {
        return `#${decToHex()}${decToHex()}${decToHex()} `;
    }

    function hexNumInProperty() {
        return `linear-gradient(to right, ${concatHexNumbers()}, ${concatHexNumbers()})`;
    }

    changeBackground();

}());