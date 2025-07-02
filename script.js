// script.js (Vazio por enquanto)

// Exemplo de como você poderia adicionar um efeito de "rolar suave" para seções

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Você pode adicionar um console.log para verificar se o JS está sendo carregado
console.log("Seu script JavaScript está funcionando!");
