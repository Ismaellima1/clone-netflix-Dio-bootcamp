function botaoAssistir(){
  document.querySelector(".video").style.display = "block";
  document.querySelector(".info").style.display = "none";
  document.querySelector(".filme-principal").style.flexDirection = "row";
  document.querySelector("#bnt-voltarInfo").style.display = "block";
}
function voltarInfo(){
  document.querySelector(".video").style.display = "none";
  document.querySelector(".info").style.display = "block";
  document.querySelector(".filme-principal").style.flexDirection = "column";
  document.querySelector("#bnt-voltarInfo").style.display = "none";
}

function botaoSobre(){
  window.open("https://www.themoviedb.org/tv/37680-suits?language=pt-BR");
}
