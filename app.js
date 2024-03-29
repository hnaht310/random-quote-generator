const button = document.querySelector('button');
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
button.addEventListener('click', showQuote);

const url = 'https://type.fit/api/quotes';

const getQuote = async () => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const quoteData = await response.json();
      let randIndx = Math.floor(Math.random() * quoteData.length);
      //   console.log(typeof quoteData);
      //   console.log(quoteData);
      //   console.log(quoteData[randIndx]);
      quote.innerText = quoteData[randIndx].text;
      if (!quoteData[randIndx].author) {
        author.innerText = '- Unknown author -';
      } else {
        author.innerText = `- ${quoteData[randIndx].author} -`;
      }
    }
  } catch (error) {
    console.log(error);
  }
};

function showQuote() {
  getQuote();
  button.innerText = 'Show another quote';
}
