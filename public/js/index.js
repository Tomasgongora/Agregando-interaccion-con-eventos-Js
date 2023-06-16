window.onload = function(){
    //JavaScript del Index
    let container = document.querySelector('.container');
    let subtitulo = document.querySelector('.subtitulo');
    let destacado = document.querySelectorAll('p');
    let fondo = document.querySelector('body');
    let enlace = document.querySelector('a');
    
    let nombre = prompt('Ingrese su nombre');
    console.log(nombre);
    if(nombre !=''){
        subtitulo.innerHTML += nombre;
    }else{
        subtitulo.innerHTML += 'INVITADO';
    }
        
    subtitulo.style.textTransform = 'uppercase';
    let confirmar = confirm('Desea colocar un fondo de pantalla ')
    if(confirmar){
        fondo.classList.add('fondo');
        enlace.style.color = '#E51B3E';
    }
    console.log(destacado);
    for(let i = 0 ; i < destacado.length; i++){
        if(i % 2 == 0){
            destacado[i].classList.add('destacadoPar');
        }else{
            destacado[i].classList.add('destacadoImpar');
        }
    }
    

    container.style.display = 'block';
}

//En ​index.ejs​, agregar un evento para que cada vez que el usuario haga clic sobre ellogo de Digital House se muestre el menú lateral con  ​id="menu"​. El estilo y el menúlateral ya existe en el proyecto de base. Tips: podemos usar el atributo ​classListcon el método toggle​ para agregar o quitar la clase  ​class="menu"

const logo = document.querySelector(".logoDH");
const menu = document.querySelector("#menu");

logo.addEventListener("click", ()=>{
    document.getElementById("menu").classList.toggle("mostrar");
})

//En ​index.ejs​, agregar un evento que permita ocultar el menú lateral cuando elmouse deje el área del menú

menu.addEventListener("mouseout", ()=>{
    document.getElementById("menu").classList.toggle("mostrar");
})