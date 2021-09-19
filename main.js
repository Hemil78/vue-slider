

const app = new Vue({
    
    el: '#root',
    data: {
        /* elementi in un'array */
        images: [
            "img/rome.jpg",
            "img/madrid.jpg",
            "img/london.jpg",
            "img/berlin.jpg"
        ],
        /* indiciziamo le var per poterle usare con i cicli di confronto */
        imageIndex: 0,
        timer: 0
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
        /* al click dell'arrow il pallino corrispondente all'img rimane colorato */
        isBallActive: function(indexBall) {
            if(this.imageIndex == indexBall) {        
                return 'active';                      
            }
            return '';
        },
        /* al click del pallino appaia l'img stesso index */
        selectSlide: function(i) {
            this.imageIndex = i;
            
        },
        /* creo uma funzione play per avviare il loop al caricamento della pagina */
        play: function() {
            let app = this;
            this.timer = setInterval(function() {
              app.imageNext();
            }, 3000);
        }   
    },
    created: function() {
        this.play();
    }
});

    
