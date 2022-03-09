(function () {

    function myFunc() {
        const input = document.querySelector('#input-radius');
        const block = document.querySelector('#block');
        const text = document.querySelector('#text');
        let inputValue = input.value;
        text.innerText = `border-radius: ${inputValue}px;`;
        block.style.borderRadius = `${inputValue}px`;
        input.addEventListener('input', () => {
            inputValue = input.value;
            text.innerText = `border-radius: ${inputValue}px;`;
            block.style.borderRadius = `${inputValue}px`;
        })
    }

    myFunc()

}());