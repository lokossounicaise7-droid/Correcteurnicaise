const form = document.getElementById('diagnosticForm');
const btn = document.getElementById('btnDiagnostic');
const errorBox = document.getElementById('errorBox');

const matieres = {
  "Mathématiques": ["Algèbre", "Géométrie", "Calcul"],
  "Comptabilité": ["Journal", "Bilan", "TVA"],
  "Anglais": ["Grammar", "Vocabulary", "Conjugation"],
  "Informatique": ["Algorithm", "Bureautique", "Programmation"],
  "Français": ["Grammaire", "Conjugaison", "Orthographe"],
  "Physique-Chimie": ["Physique", "Chimie", "Formules"],
  "Économie": ["Micro", "Macro", "Gestion"]
};

btn.addEventListener('click', () => {
  const matiere = document.getElementById('matiereInput').value || "Comptabilité";
  const niveau = document.getElementById('niveauInput').value;
  const objectif = document.getElementById('objectifInput').value;

  if(!objectif){
    errorBox.style.display="block";
    errorBox.innerText="Écris ton objectif d'abord 🙂";
    return;
  }
  errorBox.style.display="none";
  btn.innerText="Analyse en cours...";

  setTimeout(()=>{
    const sous = matieres[matiere] || matieres["Comptabilité"];
    localStorage.setItem('nicaise_diagnostic', JSON.stringify({matiere, niveau, objectif, sous}));
    window.location.href="diagnostic.html";
  }, 800);
});
