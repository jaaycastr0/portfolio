function toggleMode(){
 const html = document.documentElement
 html.classList.toggle("light")
 //pegar a tag img
 //substituir a imagem
 const img= document.querySelector("#profile img")
 if (html.classList.contains('light')){
  img.setAttribute('src','./assets/avatar-lightt.png')
 } else{
  img.setAttribute('src', './assets/avatar-dark.png')
 }
}