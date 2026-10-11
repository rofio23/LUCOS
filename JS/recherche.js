const barreRecherche = document.getElementById("barre-recherche");
const resultats = document.getElementById("resultats-recherche");

barreRecherche.addEventListener("input", function () {

    const recherche = barreRecherche.value.toLowerCase();

    resultats.innerHTML = "";

    if (recherche === "") {
        return;
    }

    const produitsTrouves = produits.filter(function(produit) {
        return produit.nom.toLowerCase().includes(recherche);
    });

    produitsTrouves.forEach(function(produit) {

        const resultat = document.createElement("div");

        resultat.textContent = produit.nom;

        resultat.classList.add("resultat");

        resultat.addEventListener("click", function() {
            window.location.href = produit.fichier;
        });

        resultats.appendChild(resultat);
    });

});

