const url = "https://type.fit/api/quotes";

fetch(url).then(response=>response.json()).then(data=> {

    console.log(data.length);

    const index = Math.floor((Math.random() * data.length));
    console.log(index);

    const q = data[index].text;
    let a = data[index].author;
    if (a==null) {
        a = "anonymous"
    }



    const quote = document.querySelector("#quote span:first-child");
    const author = document.querySelector("#quote span:last-child");

    quote.innerText = `"${q}"`;
    author.innerText = `-${a}`;
});






