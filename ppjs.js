const fileInput = document.getElementById("profile_pic");
const preview = document.getElementById("preview");
const errorDiv = document.getElementById("error-message");

fileInput.addEventListener("change", function () {
    const file = this.files[0];

    if (!file) return;

    // Vérification type fichier
    if (!file.type.startsWith("image/")) {
        errorDiv.textContent = "Veuillez sélectionner une image valide";
        errorDiv.style.display = "block";
        return;
    }

    // Vérification taille (ex: 2MB max)
    if (file.size > 2 * 1024 * 1024) {
        errorDiv.textContent = "L'image ne doit pas dépasser 2MB";
        errorDiv.style.display = "block";
        return;
    }

    // Pas d'erreur
    errorDiv.textContent = "";
    errorDiv.style.display = "none";

    // Affichage aperçu
    const reader = new FileReader();
    reader.onload = function (e) {
        preview.src = e.target.result;
        preview.style.display = "block";
    };
    reader.readAsDataURL(file);
});