
const exp_academica = [
    {
        "titulo": "GS Desarrollo de Aplicaciones Web",
        "periodo": "2025-27",
        "centro": "CPR Afundación A Coruña"
    },
    {
        "titulo": "GM Sistemas Microinformáticos y Redes",
        "periodo": "2023-25",
        "centro": "Otro cole"
    }
];

const exp_profesional = [
    {
        "puesto": "informatico",
        "periodo": "2 años",
        "empresa": "jala"
    }
];

const academica = document.getElementById("academica");
const profesional = document.getElementById("profesional");

exp_academica.forEach(function (estudio) {
    const article = document.createElement("article");

    const titulo = document.createElement("h3");
    titulo.textContent = estudio.titulo;

    const periodo = document.createElement("p");
    periodo.textContent = estudio.periodo;

    const centro = document.createElement("p");
    centro.textContent = estudio.centro;

    article.appendChild(titulo);
    article.appendChild(periodo);
    article.appendChild(centro);

    academica.appendChild(article);
});

exp_profesional.forEach(function (experiencia) {
    const article = document.createElement("article");

    const puesto = document.createElement("h3");
    puesto.textContent = experiencia.puesto;

    const periodo = document.createElement("p");
    periodo.textContent = experiencia.periodo;

    const empresa = document.createElement("p");
    empresa.textContent = experiencia.empresa;

    article.appendChild(puesto);
    article.appendChild(periodo);
    article.appendChild(empresa);

    profesional.appendChild(article);
});
