function tocaSom(tecla) {
    document.querySelector(`#som_${tecla}`).play(); // Reproduzir o som
}

const teclas = document.querySelectorAll('.tecla');
teclas.forEach((tecla, contador) => {
    let classeTecla = tecla.classList[1];
    tecla.onclick = () => {
        tocaSom(classeTecla);
    };
    console.log(contador);
});
