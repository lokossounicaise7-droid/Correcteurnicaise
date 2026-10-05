// Correcteurnicaise - version avec 🇧🇯 obligatoire
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(
  "https://sxlykmtiludokhwxrfjr.supabase.co",
  "sb_publishable_HtgXQulIbU8yeIYc32ryyw_zDEDuAzj"
);

// Dictionnaire drapeaux
const DRAPEAUX = {
  "bénin": "🇧🇯", "benin": "🇧🇯",
  "france": "🇫🇷", "togo": "🇹🇬",
  "usa": "🇺🇸", "nasa": "🇺🇸",
  "monde": "🌍"
};

function corrigeAvecDrapeau(texte) {
  let lower = texte.toLowerCase();
  for (let mot in DRAPEAUX) {
    if (lower.includes(mot)) {
      // évite double drapeau
      if (texte.includes(DRAPEAUX[mot])) return texte;
      return texte.replace(new RegExp(mot, 'i'), `${DRAPEAUX[mot]} ${mot.charAt(0).toUpperCase()+mot.slice(1)}`);
    }
  }
  return texte;
}

// Fonction pour tester ta table
async function testSupabase() {
  const { data, error } = await supabase.from('svt_api_keys').select('*');
  if (error) console.error(error);
  else console.log("OK - 5 lignes:", data);
  return data;
}

testSupabase();

// À brancher sur ton IA
window.avecDrapeau = corrigeAvecDrapeau;
