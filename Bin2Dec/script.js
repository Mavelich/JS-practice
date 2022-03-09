(function () {

    function checkNumber() {
        let decNumber = Number(document.querySelector('#input').value);
        if (isNaN(decNumber)) {
            alert('Enter an integer number');
        } else {
            return decNumber;
        }
    }

    function convertDecToBin() {
        return checkNumber().toString(2);
    }

    function outputBinNum() {
        const btn = document.querySelector('#btn');
        const output = document.querySelector('#output');
        btn.addEventListener('click', () => {
            output.innerText = convertDecToBin();
        })
    }

    outputBinNum();

}());