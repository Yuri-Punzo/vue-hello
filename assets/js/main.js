/* Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data. */

const { createApp } = Vue

createApp({
    data() {
        return {
            message: "Hello World !",
            url: "https://picsum.photos/id/1/500/300"
        }
    }
}).mount("#app")

