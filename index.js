import { supabase } from './supabase-client.js'

document.addEventListener('DOMContentLoaded', async () => {
  const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return document.getElementById('ID').textContent = `Bienvenue !`;
    };

    const { data, error } = await supabase
    .from('members')
    .select('*')
    .eq('user_id', user.id)
    .single();

    if (error) {
        console.error(error);
        return document.getElementById('ID').textContent = `Bienvenue !`;
    };
    const memberName = data.first_name + " " + data.last_name;
    document.getElementById('ID').textContent = `Bienvenue, ${memberName} !`;
    return;
})