// FUNÇÃO DAS LUZES ANIMADAS
const DURATION = 4000;
const OFFSET = 200;

function randPos(max) {
    return (Math.random() * (max + 2 * OFFSET)) - OFFSET;
}

function moveLight(light) {
    const x = randPos(window.innerWidth);
    const y = randPos(window.innerHeight);
    light.style.transform = `translate(${x}px, ${y}px)`;
}

function startLights() {
    document.querySelectorAll('.blur-light').forEach(light => {
        moveLight(light);
        setInterval(() => moveLight(light), DURATION);
    });
}

// FUNÇÃO PARA INTRO DA LOGO COM ANIMAÇÃO
/*document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash');
    const logo = document.getElementById('logo');

    setTimeout(() => logo.classList.add('show'), 100);      // Aparece com scale
    setTimeout(() => logo.classList.add('exit'), 1600);     // Sai deslizando
    setTimeout(() => splash.classList.add('hide'), 2400);   // Tela preta desaparece

    startLights();
});*/

window.addEventListener('resize', () => {
    document.querySelectorAll('.blur-light').forEach(moveLight);
});

// FUNÇÃO PARA BALANÇAR OS SOCIAL ICONS
document.addEventListener('DOMContentLoaded', () => {
    const group1 = [
        document.getElementById('icon-wp'),
        document.getElementById('icon-lc')
    ];

    const group2 = [
        document.getElementById('icon-ig'),
        document.getElementById('icon-pd')
    ];

    let toggle = true;

    setInterval(() => {
        const activeGroup = toggle ? group1 : group2;

        activeGroup.forEach(icon => {
            icon.classList.add('shake');
            setTimeout(() => {
                icon.classList.remove('shake');
            }, 600);
        });

        toggle = !toggle;
    }, 3000);
});

// FUNÇÃO PARA OS SHAPES LATERAIS (COMENTAR CASO NÃO VÁ UTILIZAR)
function randomRadius() {
    const values = [];
    for (let i = 0; i < 8; i++) {
        values.push(Math.floor(Math.random() * 61) + 20); // 20% a 80%
    }
    return `${values[0]}% ${values[1]}% ${values[2]}% ${values[3]}% / ${values[4]}% ${values[5]}% ${values[6]}% ${values[7]}%`;
}

/*function animateContinuously(id) {
    const el = document.getElementById(id);

    function update() {
        el.style.borderRadius = randomRadius();
        setTimeout(update, 4000); // chama novamente logo após a transição terminar
    }

    update(); // inicia a primeira transformação
}*/

/*animateContinuously('shape1');
animateContinuously('shape2');*/

// FUNÇÃO PARA EXECUÇÃO DO AUDIO
/*window.addEventListener("load", function () {
    setTimeout(() => {
        const audio = document.getElementById("meuAudio");
        audio.play().catch(e => console.log("Reprodução bloqueada pelo navegador:", e));
    }, 3650); // 3000ms = 3 segundos
});*/


/*document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('startScreen');
    const enterBtn = document.getElementById('enterBtn');
    const splash = document.getElementById('splash');
    const logo = document.getElementById('logo');
    const audio = document.getElementById('meuAudio');

    enterBtn.addEventListener('click', () => {
        // Esconde a tela inicial
        startScreen.style.display = 'none';

        // Mostra o splash com a logo
        splash.classList.add('show');

        // Inicia animação da logo
        setTimeout(() => logo.classList.add('show'), 100);       // Aparece com scale
        setTimeout(() => logo.classList.add('exit'), 3100);      // Sai depois de 3 segundos visível
        setTimeout(() => splash.classList.add('hide'), 4000);    // Tela preta desaparece depois da animação

        // Dispara o áudio após 3 segundos
        setTimeout(() => {
            audio.play();
        }, 3650);

        // Se tiver função startLights(), chama após a intro
        if (typeof startLights === 'function') {
            setTimeout(() => startLights(), 4000);
        }
    });

});*/

startLights()

// EFEITO PARA CHACOALHAR O BOTÃO DE INÍCIO
const enterBtn = document.getElementById('enterBtn');

setInterval(() => {
    enterBtn.classList.add('shake');

    // Remove a classe após a animação terminar para poder reaplicar depois
    setTimeout(() => {
        enterBtn.classList.remove('shake');
    }, 400); // mesma duração da animação
}, 2000); // intervalo entre as sacudidas
