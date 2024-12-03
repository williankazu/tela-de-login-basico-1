document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aqui você pode adicionar a lógica de autenticação
    if (username === 'admin' && password === '1234') {
        alert('Login realizado com sucesso!');
        // Redirecionar ou executar outras ações
    } else {
        alert('Usuário ou senha incorretos.');
    }
});
