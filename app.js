import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(
  "https://sxlykmtiludokhwxrfjr.supabase.co",
  "sb_publishable_HtgXQulIbU8yeIYc32ryyw_zDEDuAzj"
);

const DRAPEAUX = {
  "bénin": "🇧🇯", "benin": "🇧🇯",
  "france": "🇫🇷", "togo": "🇹🇬",
  "côte d'ivoire": "🇨🇮", "sénégal": "🇸🇳"
};

function corrigeAvecDrapeau(texte){
  if(!texte) return "🇧🇯 Prêt!";
  let lower = texte.toLowerCase();
  for(let mot in DRAPEAUX){
    if(lower.includes(mot) &&!texte.includes(DRAPEAUX[mot])){
      return `${DRAPEAUX[mot]} ${texte}`;
    }
  }
  return texte;
}

const input = document.getElementById('q');
const result = document.getElementById('result');
if(input && result){
  input.addEventListener('input', (e)=>{
    result.textContent = corrigeAvecDrapeau(e.target.value);
  });
}
