import { supabase } from './supabase-client.js'

const login = document.getElementById('login');

async function connexion(email, mdp) {
    const t = await supabase.auth.getSession();
    console.log("SESSION:", t);
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: mdp,
    });
    
    if(error) return {error: true, message: error};
    
    return {error: false, message: data};
}

login?.addEventListener('click', async function() {
    const email = document.getElementById("email").value;
    const mdp = document.getElementById("mdp").value;
    console.log(email, mdp)
    let co = await connexion(email, mdp);
    if(co.error) {
        // Une erreur
        console.log(co.message)
        let error = document.getElementById("error");
        error.style.display = "block";
        error.textContent = `${create.error.message}`

    } else {
        // Pas d'erreur
        console.log("ok ;)")
        return document.location.href = 'index.html'
    }
});