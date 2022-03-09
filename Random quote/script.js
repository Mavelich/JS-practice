import quotes from './quotes.js';

(function () {

    function generateQuotes(quotes) {
        const btn = document.querySelector('#btn');
        const quoteText = document.querySelector('#quote-block__text');
        const quoteAuthor = document.querySelector('#quote-block__author');
        btn.addEventListener('click', () => {
            let randomQuote = Math.floor(Math.random() * (quotes.length));
            quoteText.innerText = `"${quotes[randomQuote].quote}"`;
            quoteAuthor.innerText = quotes[randomQuote].author;
        })
    }

    generateQuotes(quotes);

}());