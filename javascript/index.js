window.onload=function(){

  const  imagenes = [
    '/img/samsung/galaxyNote10plus.jpg',
    '/img/sony/sonyXperiaXa1.jpg',
    '/img/xiaomi/xiaomiRedmi6a.jpg'
  ];
  const timeInterval = 1000;
  let position = 0;
  let $botonRetroceder = document.querySelector('#retroceder');
  let $botonAvanzar = document.querySelector('#avanzar');
  let $imagen = document.querySelector('#imagen');
  let $botonPlay = document.querySelector('#play');
  let $botonStop = document.querySelector('#stop');
  let intervalo;

  function pasarFoto(){
    if(position >= imagenes.length - 1){
      position=0;
    }else{
      position++;
    }
    renderizarImagen();
  }

  function retrocederFoto(){
    if (position <= 0) {
        position = imagenes.length - 1;
    }else{
      position--;
    }
    renderizarImagen();
  }

  function renderizarImagen(){
    $imagen.style.backgroundImage = `url(${imagenes[position]})`;
  }


  function playIntervalo(){
    intervalo= setInterval(pasarFoto,timeInterval);
    
  }

}
