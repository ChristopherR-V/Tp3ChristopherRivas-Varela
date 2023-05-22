function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

let magasins_ul = document.getElementById("data");
const url = "http://127.0.0.1:8080/ords/hr2/MAGASIN/";


fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let magasins = data.items;
       magasins.map(function(magasin){
            const imageUrl = "Images/image_magasin1.jpg";
            let divConteneur = createNode("div");
            divConteneur.classList.add("magasinsInfo");
            let div = createNode("div");
            let divImage = createNode("div");
            divImage.classList.add("divleft");
            div.classList.add("divRight");
            let image = createNode("img");
            image.setAttribute("src", imageUrl);
            append(divImage, image);
            append(divConteneur,divImage);
            debugger;


            let pNumero = createNode("p");
            let pNomMagasin = createNode("p");
            let pAdresse = createNode("p");
            let pJoursOuverture = createNode("p");
            let pDateCreation = createNode("p");

            pNomMagasin.textContent = `Nom du Magasin: ${magasin.nom_magasin}`;
            pNumero.textContent = `Numero: ${magasin.numero}`
            pAdresse.textContent = `Jours d' Ouverture: ${magasin.jours_ouverture}`
            pDateCreation.textContent = `Date de Creation: ${magasin.date_creation.substr(0,10)}`
            

            append(div, pNomMagasin);
            append(div, pNumero);
            append(div, pAdresse);
            append(div, pJoursOuverture);
            append(div, pDateCreation);

            append(divConteneur, div);
            append(magasins_ul, divConteneur);
            

    
        });

    })
    .catch((error) => {
        console.log(JSON.stringify(error));
    })