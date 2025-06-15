function authLogin() {
    const containerLogin = document.getElementById('contLogin');
    const containerCadastro = document.getElementById('contSingup');
    const btnEntrar = document.querySelector('.auth-tab[data-tab="login"]');
    const btnCadastrar = document.querySelector('.auth-tab[data-tab="signup"]');

    containerLogin.classList.add('active');
    containerCadastro.classList.remove('active');
    btnEntrar.classList.add('active');
    btnCadastrar.classList.remove('active');
}

function authSingup() {
    const containerLogin = document.getElementById('contLogin');
    const containerCadastro = document.getElementById('contSingup');
    const btnEntrar = document.querySelector('.auth-tab[data-tab="login"]');
    const btnCadastrar = document.querySelector('.auth-tab[data-tab="signup"]');

    containerCadastro.classList.add('active');
    containerLogin.classList.remove('active');
    btnCadastrar.classList.add('active');
    btnEntrar.classList.remove('active');
}

// Função para cadastrar usuário
function cadastrarUsuario(event) {
    event.preventDefault();
    const nome = document.querySelector('#contSingup input[placeholder="Nome"]').value.trim();
    const email = document.querySelector('#contSingup input[placeholder="Email"]').value.trim();
    const senha = document.querySelector('#contSingup input[placeholder="Senha"]').value;
    const senha2 = document.querySelector('#contSingup input[placeholder="Confirme a senha"]').value;

    if (!nome || !email || !senha || !senha2) {
        alert('Preencha todos os campos!');
        return;
    }
    if (senha !== senha2) {
        alert('As senhas não coincidem!');
        return;
    }

    // Salva no localStorage (simulação)
    localStorage.setItem('usuario', JSON.stringify({ nome, email, senha }));
    alert('Cadastro realizado com sucesso! Faça login.');
    authLogin();
}

// Função para login
function fazerLogin(event) {
    event.preventDefault();
    const email = document.querySelector('#contLogin input[placeholder="Usuário"]').value.trim();
    const senha = document.querySelector('#contLogin input[placeholder="Senha"]').value;

    const usuario = JSON.parse(localStorage.getItem('usuario'));
    if (!usuario) {
        alert('Usuário não cadastrado!');
        return;
    }
    if ((email === usuario.email || email === usuario.nome) && senha === usuario.senha) {
        // Redireciona para o dashboard
        if (window.location.pathname.endsWith('/index.html')) {
            window.location.href = './frontend/src/pages/sistema-gestao/dashboard.html';
        } else {
            window.location.href = '../sistema-gestao/dashboard.html';
        }
    } else {
        alert('Usuário ou senha incorretos!');
    }
}

document.getElementById('contSingup').addEventListener('submit', cadastrarUsuario);
document.getElementById('contLogin').addEventListener('submit', fazerLogin);

window.authLogin = authLogin;
window.authSingup = authSingup;