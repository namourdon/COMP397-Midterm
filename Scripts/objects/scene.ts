module objects {
    // Scene Class
    export class Scene extends createjs.Container {
        //private variables
       
        
        // CONSTRUCTOR +++++++++++++++++++++++++++++
        constructor() {
            super();
            this.start();
        }
        
        // Add game objects to my scene in this method
        public start():void {
            stage.addChild(this);
            
            //this._resetAll();
            
           
        }
        
        // update game objects in my scene
        public update():void {
            
        }
        
        
       
        }
  }
  
  
    
}