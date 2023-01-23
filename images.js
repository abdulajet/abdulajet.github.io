function getImages() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    const filmStock = params.stock;

    fetch(`https://filmboi.fly.dev/?stock=${filmStock}`)
        .then((response) => response.json())
        .then((images) => {

            const flexBox = document.getElementById("box");
            images.forEach(image => {
            let div = document.createElement('div');
            div.className = "item-zoom-subtle";

            let imageElement = document.createElement('img');
            let url = image.url.replace("upload/", "upload/w_500,h_300,c_fill/");
            imageElement.src = url;
            imageElement.loading = "lazy";

            let linkElement = document.createElement('a'); 
            linkElement.href = image.url;

            linkElement.appendChild(imageElement)
            div.appendChild(linkElement);

            flexBox.appendChild(div);
            
            });
        });
}

getImages();

{/* <div class="item-zoom-subtle">
<img src="http://res.cloudinary.com/dacv415jh/image/upload/w_250,h_150,c_fill/v1674262821/Film/PenEE/Fujic200-penee-19082022/R1-09151-007A_zwplwn.jpg" alt="">
</div> */}