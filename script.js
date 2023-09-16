function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light");

  //pegar a tag image  
  const img = document.querySelector("#profile img")

  if(html.classList.contains("light")){
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos escuro e jaqueta preta, com fundo degradê.');   
  } else {
    img.setAttribute('src', './assets/avatar.png');
    img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo.');   
  }

    //se tiuver light mode, adicionar light
    //se tiver sem light mode, manter a imagem normal
  
    //substituir a imagem

  }