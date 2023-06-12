       // Récupérer les éléments du DOM
       const input = document.getElementById("myInput");
       const button = document.getElementById("submitButton");
     
       // Ajouter un écouteur d'événement au clic sur le bouton
       button.addEventListener("click", function() {
           // Récupérer la valeur de l'input
           const value = input.value;
           // Afficher la valeur dans une alerte
           alert("Votre saisi dans la console");
           
           // Afficher la valeur dans la console
           console.log(value);
       });

 
