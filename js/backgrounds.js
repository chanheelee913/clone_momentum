const bgImage = document.createElement("img");
bgImage.src = `img/${Math.floor(Math.random()*4)}.jpg`;

document.body.appendChild(bgImage);