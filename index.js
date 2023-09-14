        document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    const formDataArray = []; // Variable pour stocker les données du formulaire

    // Charger les données du formulaire depuis le stockage local (localStorage)
    const storedData = localStorage.getItem("formData");
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        formDataArray.push(...parsedData);
    }

    // Fonction pour obtenir les valeurs des champs du formulaire
    function getFormData() {
        const name = document.getElementById("name").value;
        const obj1 = document.getElementById("obj1").value;
        const obj2 = document.getElementById("obj2").value;
        const obj3 = document.getElementById("obj3").value;
        const quest1 = document.querySelector('input[name="alignment"]:checked').value;
        return {
            name: name,
            obj1: obj1,
            obj2: obj2,
            obj3: obj3,
            quest1: quest1,
        };
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        // Récupérer les données du formulaire
        const formData = getFormData();

        // Ajouter donnée
        formDataArray.push(formData);

        // reset formulaire
        form.reset();
        localStorage.setItem("formData", JSON.stringify(formDataArray));

        console.log("Données ajoutées avec succès !");
        console.log(formData);
    });
    const displayButton = document.getElementById("displayButton");

    displayButton.addEventListener("click", function() {
        const storedData = localStorage.getItem("formData");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            console.log(parsedData);
            console.log(value);
        } else {
            console.log("Aucune donnée n'a été enregistrée.");
        }
    });
});