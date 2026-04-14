import { supabase } from './supabase-client.js'

const login = document.getElementById('login');

async function connexion(email, mdp) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: mdp,
    });

    if (error) {
        return { error: true, message: error.message };
    }

    return { error: false, message: data };
}

login?.addEventListener('click', async function(e) {
    e.preventDefault(); 
    const email = document.getElementById("email").value;
    const mdp = document.getElementById("mdp").value;

    let co = await connexion(email, mdp);

    if (co.error) {
        let errorDiv = document.getElementById("error");
        errorDiv.style.display = "block";
        errorDiv.textContent = co.message; // 
    } else {
        console.log("Connexion réussie");

        window.location.href = "index.html";
    }
});
