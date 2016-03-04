var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Nashia Amourdon
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
            this._dice1 = 0;
            this._dice2 = 0;
            this._dice3 = 0;
            this._dice4 = 0;
            this._dice5 = 0;
            this._dice6 = 0;
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            this._rollBtn = new objects.Button("RollBtn", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._rollBtn);
            this._rollBtn.on("click", this._rollBtnClick, this);
            //this._diceLeft= new objects.Label(this.diceNumber.toString(),"18px lucinda", "#022F49", 274,280);
            //this.addChild(this._diceLeft);   
            //this._diceRight= new objects.Label(this.diceNumber.toString(),"18px lucinda", "#022F49", 274,280);
            //this.addChild(this._diceRight);   
            this._initializeBitmapArray();
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
        };
        Play.prototype._checkRange = function (value, lowerBounds, upperBounds) {
            return (value >= lowerBounds && value <= upperBounds) ? value : -1;
        };
        Play.prototype._rollDice = function () {
            var betLine = [" ", " "];
            var outCome = [0, 0];
            for (var roll = 0; roll < 3; roll++) {
                outCome[roll] = Math.floor((Math.random() * 65) + 1);
                switch (outCome[roll]) {
                    case this._checkRange(outCome[roll], 1, 27):
                        betLine[roll] = "Dice1";
                        this._dice1++;
                        break;
                    case this._checkRange(outCome[roll], 28, 37):
                        betLine[roll] = "Dice2";
                        this._dice2++;
                        break;
                    case this._checkRange(outCome[roll], 38, 46):
                        betLine[roll] = "Dice3";
                        this._dice3++;
                        break;
                    case this._checkRange(outCome[roll], 47, 54):
                        betLine[roll] = "Dice4";
                        this._dice4++;
                        break;
                    case this._checkRange(outCome[roll], 55, 59):
                        betLine[roll] = "Dice5";
                        this._dice5++;
                        break;
                    case this._checkRange(outCome[roll], 60, 62):
                        betLine[roll] = "dice6";
                        this._dice6++;
                        break;
                }
            }
            return betLine;
        };
        Play.prototype._determineNumber = function () {
            if (this._dice1 == 1) {
                this.diceNumber = 1;
            }
            if (this._dice2 == 1) {
                this.diceNumber = 2;
            }
            if (this._dice3 == 1) {
                this.diceNumber = 3;
            }
            if (this._dice4 == 1) {
                this.diceNumber = 4;
            }
            if (this._dice5 == 1) {
                this.diceNumber = 5;
            }
            if (this._dice6 == 1) {
                this.diceNumber = 6;
            }
        };
        Play.prototype._initializeBitmapArray = function () {
            this._rolls = new Array();
            for (var roll = 0; roll < 2; roll++) {
                this._rolls[roll] = new createjs.Bitmap(assets.getResult("Dice1"));
                this._rolls[roll].x = 200 + (roll * 100);
                this._rolls[roll].y = 200;
                this.addChild(this._rolls[roll]);
                console.log("roll" + roll + " " + this._rolls[roll]);
            }
        };
        //EVENT HANDLERS ++++++++++++++++++++
        Play.prototype._rollBtnClick = function (event) {
            var bitmap = this._rollDice();
            for (var roll = 0; roll < 2; roll++) {
                this._rolls[roll].image = assets.getResult(bitmap[roll]);
            }
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map