function botaoAssistir(){
  document.querySelector(".video").style.display = "block";
  document.querySelector(".info").style.display = "none";
}
function voltarInfo(){
  document.querySelector(".video").style.display = "none";
  document.querySelector(".info").style.display = "block";
}

function botaoSobre(){
  window.open("https://www.themoviedb.org/tv/37680-suits?language=pt-BR");
}
