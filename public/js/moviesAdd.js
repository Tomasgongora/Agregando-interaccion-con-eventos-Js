window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    //En ​moviesAdd.ejs​, establecer que, cada vez que se pase el mouse por el título'AGREGAR PELÍCULA', este cambie su color.
    let tituloAdd= document.querySelector(".moviesAddTitulo")

    tituloAdd.addEventListener("mouseover",() => {
        tituloAdd.style.color = "red";
    })

    let inputTitulo = document.getElementById("titulo")
    let codSecret = 0
    inputTitulo.addEventListener("keypress", (event) => {
        const {key} = event;
        console.log(codSecret)
        if (codSecret == 0 && key == "s"){
            codSecret = 1;
        }else if (codSecret == 1 && key == "e"){
            codSecret = 2;
        }else if (codSecret == 2 && key == "c"){
            codSecret = 3;
        }else if (codSecret == 3 && key == "r"){
            codSecret = 4;
        }else if (codSecret == 4 && key == "e"){
            codSecret = 5;
        }else if (codSecret == 5 && key == "t"){
            codSecret = 6;
        }else if (codSecret == 6 && key == "o"){
            alert ("Secreto magico");
            codSecret = 0;
        }else{
            codSecret = 0;
        }
    })

}