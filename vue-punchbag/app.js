new Vue({
    el: '#app',
    data: {
        health: 100,
        ended: false,
        disablePunch: false,
        reset: function () {
            this.health = 100;
            this.ended = false;
            this.disablePunch = false;
        }
    
    },
    methods: {
        punch: function () {
            this.health -= 10;
            if (this.health <= 0) {
                this.ended = true;
                this.disablePunch = true;
            }
        },
        restart: function () {
            this.reset();
        }
    },
    computed: {
        
    }
});