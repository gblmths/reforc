if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then((reg) => {
            console.log('Registrado nosso primeiro service', reg);
        }).catch((err) => {
            console.log('Algo de errado', err);
        });
    });
}