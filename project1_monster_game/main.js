new Vue({
    el: '#app',
    data: {
        players: [
            { name: 'Ninja Hatori', health: 100 },
            { name: 'Monster', health: 100 }
        ],
        newGame: true,
        battleLog: [],
        battleActions: {
            attack: 10,
            heal: 10,
            specialAttack: 25
        }
    },
    methods: {
        reset: function () {
            this.newGame = true;
            for (let index in this.players) {
                this.players[index].health = 100;
            }
            this.battleLog = [];
        },
        playerAction: function (action, currentPlayer = 1) {
            const opponentIndex = currentPlayer ? 0 : 1;
            switch (action) {
                case 'attack':
                case 'specialAttack':
                    let opponentHealth = this.players[opponentIndex].health - this.battleActions[action];
                    if (opponentHealth <= 0) {
                        opponentHealth = 0;
                    }
                    this.players[opponentIndex].health = opponentHealth;
                    break;
                case 'heal':
                    let playerHealth = this.players[currentPlayer].health + this.battleActions[action];
                    if (playerHealth > 100) {
                        playerHealth = 100;
                    }
                    this.players[currentPlayer].health = playerHealth;
                    break;
            }
            this.battleLog.push(
                `${this.players[currentPlayer].name} used ${action} action`
            );
            if (currentPlayer !== 1)
                this._aiAction();
        },
        _aiAction: function () {
            const aiActions = Object.keys(this.battleActions),
                actionSelected = aiActions[Math.floor(Math.random() * 3)];

            this.playerAction(actionSelected);
        }
    }
});