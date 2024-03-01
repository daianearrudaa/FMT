const imagens = document.getElementById('imagens')
fetch('https://api.thecatapi.com/v1/images/search?limit=10')
.then( response=>{
    if(!response.ok){
        throw new Error('Não foi possivel obter as imagens')
    }
    return response.json()
})
.then(data=>{
    data.forEach(element => {
        const img= document.createElement('img');
        img.src = element.url;
        img.width=200;
        img.height=250;
        img.style.margin = '10px';
        imagens.appendChild(img);
    });
})
.catch(error=>{
    console.error("Ocorreu um erro", error)
})