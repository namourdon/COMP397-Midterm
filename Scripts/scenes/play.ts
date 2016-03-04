//Nashia Amourdon
// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: objects.Label;
         private _dice1=0;
        private _dice2=0;
        private _dice3=0;
        private _dice4=0;
        private _dice5=0;
        private _dice6=0;
        private _rollBtn:objects.Button;
        
        private _diceLeft:objects.Label;
        private _diceRight:objects.Label;
        private diceNumber: number;
        private _rolls:createjs.Bitmap[];
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            this._rollBtn= new  objects.Button("RollBtn",config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._rollBtn);
            this._rollBtn.on("click", this._rollBtnClick,this);
            
            //this._diceLeft= new objects.Label(this.diceNumber.toString(),"18px lucinda", "#022F49", 274,280);
             //this.addChild(this._diceLeft);   
            
            
            //this._diceRight= new objects.Label(this.diceNumber.toString(),"18px lucinda", "#022F49", 274,280);
             //this.addChild(this._diceRight);   
            this._initializeBitmapArray();
            // add this scene to the global stage container
           
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        private _checkRange(value: number, lowerBounds: number, upperBounds: number): number {
            return (value >= lowerBounds && value <= upperBounds) ? value : -1;
        }
        
        private _rollDice(): string[]{
            var betLine=[" "," "];
            var outCome=[0,0];
             for (var roll = 0;roll < 3; roll++) {
                outCome[roll] = Math.floor((Math.random() * 65) + 1);
                switch (outCome[roll]) {
                    case this._checkRange(outCome[roll], 1, 27):  // 41.5% probability
                        betLine[roll] = "Dice1";
                        this._dice1++;
                        break;
                    case this._checkRange(outCome[roll], 28, 37): // 15.4% probability
                        betLine[roll] = "Dice2";
                        this._dice2++;
                        break;
                    case this._checkRange(outCome[roll], 38, 46): // 13.8% probability
                        betLine[roll] = "Dice3";
                        this._dice3++;
                        break;
                    case this._checkRange(outCome[roll], 47, 54): // 12.3% probability
                        betLine[roll] = "Dice4";
                        this._dice4++;
                        break;
                    case this._checkRange(outCome[roll], 55, 59): //  7.7% probability
                        betLine[roll] = "Dice5";
                        this._dice5++;
                        break;
                    case this._checkRange(outCome[roll], 60, 62): //  4.6% probability
                        betLine[roll] = "dice6";
                        this._dice6++;
                        break;
                }
             }
                return betLine;
        }
        private _determineNumber():void{
            if(this._dice1==1){
                this.diceNumber= 1;
                   
            }
            if(this._dice2==1){
                this.diceNumber=2;
            }
            if(this._dice3==1){
                this.diceNumber=3;
            }
            if(this._dice4==1){
                this.diceNumber=4;
            }
            if(this._dice5==1){
                this.diceNumber=5;
            }
            if(this._dice6==1){
                this.diceNumber=6;
            }
        }
        
         private _initializeBitmapArray():void{
            this._rolls= new Array<createjs.Bitmap>();
            for(var roll:number=0; roll<2; roll++){
                this._rolls[roll]= new createjs.Bitmap(assets.getResult("Dice1"));
                this._rolls[roll].x = 200 + (roll * 100);
                this._rolls[roll].y = 200;
                this.addChild(this._rolls[roll]);
                console.log("roll" + roll + " " + this._rolls[roll]);
            }
         }
        //EVENT HANDLERS ++++++++++++++++++++
         private _rollBtnClick(event: createjs.MouseEvent):void{
             var bitmap:string[]= this._rollDice();
             for(var roll:number=0; roll<2;roll++){
                 this._rolls[roll].image= assets.getResult(bitmap[roll]);
             }
             
                
             
         }
}
             
        }
        