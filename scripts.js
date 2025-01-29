// Animação ao rolar a página
document.addEventListener("DOMContentLoaded", function () {
    const projetos = document.querySelectorAll(".projeto");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.1, // Quando 10% do elemento estiver visível
        }
    );

    projetos.forEach((projeto) => {
        observer.observe(projeto);
    });
});

// Função para copiar a tag do Discord
document.getElementById("copiar-discord").addEventListener("click", function () {
    const tagDiscord = "jogovalorant"; // Substitua pela sua tag do Discord
    navigator.clipboard.writeText(tagDiscord)
        .then(() => {
            alert("Tag do Discord copiada: " + tagDiscord);
        })
        .catch(() => {
            alert("Erro ao copiar a tag do Discord.");
        });
});
