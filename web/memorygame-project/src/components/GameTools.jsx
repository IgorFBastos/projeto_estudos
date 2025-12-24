

const GameTools = {

    
    techs: ['bootstrap', 'css','electron','firebase','html','javascript','jquery','mongo','node','react'],
    Cards: null,
    idConter: 0,
    setFirstCard: null,
    setSecundCard: null,
    GameBlockPlayed: false,

    createCards: function () {
        this.Cards = [];
        this.techs.forEach(tech => {
            console.log(tech)
            this.Cards.push(
                {
                    CardID:this.CreateCardID(tech),
                    CardName: tech,
                    flipped: false
                },
                {
                    CardID:this.CreateCardID(tech),
                    CardName: tech,
                    flipped: false
                }
            )
        });
    },

    CreateCardID: function (tech) {
        return `${tech}` + `${Date.now()}` + `${this.idConter++}`;
    },

    shuffleCards: function () {
        for(let i = 0; i < this.Cards.length; i++) {
            let randomIndex = Math.floor(Math.random() * 20);
            [this.Cards[i], this.Cards[randomIndex]] = [this.Cards[randomIndex], this.Cards[i]]
        }
    },

    setPairCards: function (card) {

        if(this.setFirstCard === null) {
            this.setFirstCard = card;
            return false;
        } 

        if(this.setSecundCard === null) {
            this.setSecundCard = card;
            this.GameBlockPlayed = true;
            return true;
        }
    },

    checkPlayed: function () {

        const FirstCardName = this.setFirstCard.CardName;
        const SecundCardName = this.setSecundCard.CardName;

        if (FirstCardName === SecundCardName) {
            return true;
        } else {
            return false;
        }
    }


}

export default GameTools;