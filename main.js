

const app = new Vue({
    /* el => elemento da prendere */
    el: '#root',
    data: {
        /* elementi in un'array */
        images: [
            "img/amsterdam.jpg",
            "img/moscow.jpg",
            "img/paris.jpg",
            "img/rome.jpg"
        ],
        /* indiciziamo a 0 una var per poterla usare con i cicli di confronto */
        imageIndex: 0 
    },
    methods: {
        /* al click dell'arrow destro scorrono le img e alla fine il ciclo torna all'inizio */
        imageNext: function() {
            this.imageIndex++; /* incremento */
            if(this.imageIndex >= this.images.length) {
                this.imageIndex = 0;
            }
        },
        /* al click dell'arrow sinistro scorrono le img e alla fine il ciclo torna all'inizio */
        imagePrev: function() {
            this.imageIndex--; /* decremento */
            if(this.imageIndex == -1) {
                this.imageIndex = this.images.length -1;
            }
        },
        /* isBallActive: function(indexBall) {
            if(this.imageIndex == indexBall) {        ====> soluzione senza il ternario
                return 'active';                      <==== :class="isBallActive(index)"; al div
            }
            return '';
        } */

    }

});