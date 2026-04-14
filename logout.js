import { supabase } from './supabase-client.js'

const logout = document.getElementById('logout');

async function deconnexion() {
    const { error } = await supabase.auth.signOut()
    
    if(error) return {error: true, message: error};
    
    return {error: false, message: data};
}

logout?.addEventListener('click', async function() {
    if(!await deconnexion()) {
        // Une erreur
    } else {
        // Pas d'erreur
    }
});