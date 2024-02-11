function tocaSom(tecla) {
    if (!document.querySelector(`#som_${tecla}`)) {
        return false;
    }
    
    document.querySelector(`#som_${tecla}`).play(); // Reproduzir o som
}

const teclas = document.querySelectorAll('.tecla');
teclas.forEach((tecla, contador) => {
    let classeTecla = tecla.classList[1];

    tecla.onclick = () => {
        tocaSom(classeTecla);
    };

    tecla.onkeydown = (evento) => {
        if (evento.code === 'Enter' || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    };

    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
    }

    // console.log(contador);
});
