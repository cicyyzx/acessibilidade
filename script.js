document.addEventListener('DOMContentLoaded', function(){
    let tamanhoAtualFonte = 1;


    const aumentarFontebotao = document.getElementById('aumentar-fonte');


    aumentarFontebotao.addEventListener('click', function(){
        tamanhoAtualFonte +=0,1;
        document.body.style.fontSize = `${tamanhoAtualFonte}
    })
)}
     const diminuirFontebotao = document.getElementById('diminuir-fonte');


    diminuirFontebotao.addEventListener('click', function(){
        tamanhoAtualFonte +=0,1;
        document.body.style.fontSize = `${tamanhoAtualFonte}
    })
)}