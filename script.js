function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light");

  //pegar a tag image  
  const img = document.querySelector("#profile img")

  if(html.classList.contains("light")){
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'José de braços cruzador olhando para cima, com barba e blusa branca.');   
  } else {
    img.setAttribute('src', './assets/avatar.png');
    img.setAttribute('alt', 'José de braços cruzados olhando para frente, com barba e blusa branca.');   
  }

    //se tiuver light mode, adicionar light
    //se tiver sem light mode, manter a imagem normal
  
    //substituir a imagem

  }