document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('preinscriptionForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const nom = document.getElementById('nom').value;
            const prenom = document.getElementById('prenom').value;
            const email = document.getElementById('email').value;
            const age = document.getElementById('age').value;
            const nationnalite = document.getElementById('nationnalite').value;
            const sexe = document.getElementById('sexe').value;
            const diplome = document.getElementById('diplome').value;
            const ville = document.getElementById('ville').value;
            const filiere = document.getElementById('filiere').value;

            if (nom && prenom && email && age && nationnalite && sexe && ville && filiere) {
                alert('Préinscription soumise avec succès !');
                form.reset();
            } else {
                alert('Veuillez remplir tous les champs.');
            }
        });
    }
});