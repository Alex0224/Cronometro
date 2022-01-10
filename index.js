function relogio() {
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: 'GMT'
        })
    }

    let clock = document.querySelector('.clock');
    let segundos = 0;
    let timer;

    function iniciarRelogio() {
        timer = setInterval(function () {
            segundos++;
            clock.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }

    document.addEventListener('click', (e) => {
        const el = e.target;

        if (el.classList.contains('iniciar')) {
            clearInterval(timer);
            iniciarRelogio();
            clock.classList.remove('pausado');
        }

        if (el.classList.contains('pausar')) {
            clearInterval(timer);
            clock.classList.add('pausado');
        }

        if (el.classList.contains('zerar')) {
            clearInterval(timer);
            clock.innerHTML = '00:00:00';
            segundos = 0;
            clock.classList.remove('pausado');
        }
    });
}

relogio();