import { supabase } from './supabase-client.js'

const form_account = document.getElementById('signup-form');

async function cree_compte(email, mdp, first_name, last_name, birth_date) {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: mdp,
    });
    
    if(error) return  {error: error};

    const { data: data2, error: error2 } = await supabase
        .from('members')
        .insert({ first_name: first_name, last_name: last_name, birth_day: birth_date })
        .select();

    if(error2) return {error: error2};
    return data2;
}


form_account.addEventListener('submit', async function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const mdp = document.getElementById("mdp").value;
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const birth_date = document.getElementById("birth_date").value;
    
    if (mdp.length < 6) {
        error.textContent = "Le mot de passe doit contenir au moins 6 caractères";
        error.style.display = "block";
        return;
    }

    error.textContent = "";
    error.style.display = "none";

    let create = await cree_compte(email, mdp, first_name, last_name, birth_date);

    if(create.error) {
        // Une erreur
        console.error(create.message)
        let error = document.getElementById("error");
        error.style.display = "block";
        error.textContent = `${create.error.message}`
    } else {
        // Pas d'erreur
        console.log("ok ;)")
        return document.location.href = 'index.html'
    }
});