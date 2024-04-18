let linkendin = document.querySelector('.link-linkedin');
let github = document.querySelector('.link-github');
let facebook = document.querySelector('.link-facebook')
let instagram = document.querySelector('.link-instagram');
let whatsapp = document.querySelector('.link-whatsapp');

//Ouvinte e chama a função
linkendin.addEventListener('click', direcionaPagina_linkendin);
github.addEventListener('click', direcionaPagina_github);
facebook.addEventListener('click', direcionaPagina_facebook)
instagram.addEventListener('click', direcionaPagina_instagram);
whatsapp.addEventListener('click', direcionaPagina_whatsapp);

//Função para ao clicar, direciona para o link na mesma guia
function direcionaQualquerPagina(event) {
    event.preventDefault();
    let url = this.getAttribute('href');
    window.location.href = url;
}

//Função de mudar a cor do botão ao ser clicado pelo usuário
function mudaCorBotao(){
    this.style.background = 'rgb(0, 66, 32)';
    this.style.color = 'white';
}

//Funções que serão chamadas pelo ouvinte
function direcionaPagina_linkendin(event) {
  direcionaQualquerPagina.call(this, event);
  mudaCorBotao.call(this, event);

}

function direcionaPagina_github(event) {
    direcionaQualquerPagina.call(this, event);
    mudaCorBotao.call(this, event);
}

function direcionaPagina_facebook(event){
    direcionaQualquerPagina.call(this, event);
    mudaCorBotao.call(this, event);

}

function direcionaPagina_instagram(event) {
    direcionaQualquerPagina.call(this, event);
    mudaCorBotao.call(this, event);
}

function direcionaPagina_whatsapp(event){
    direcionaQualquerPagina.call(this, event);
    mudaCorBotao.call(this, event);
}