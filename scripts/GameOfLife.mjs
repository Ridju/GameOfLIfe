import Cell from "./Cell.mjs";

class GameOfLife { 
    constructor(rows, cols) { 
        this.rows = rows;
        this.columns = cols;
        this._gridItems = [];
        this._newState = [];
        this.initBoard();
        this._running = false;
    }

    initBoard() { 
        container.style.setProperty('--grid-rows', this.rows);
        container.style.setProperty('--grid-columns', this.columns);
        for( var i = 0; i < (this.rows * this.columns); i++) { 
            let cell = new Cell(i, this.rows, this.rows * this.columns);
            // cell.domElement.innerHTML = i;
            container.appendChild(cell.domElement);
            this._gridItems[i] = cell;
        }
    }

    markAlive() {
        const setActive = this._gridItems.filter(el => el.isAlive);
        var elements = [];
        for(let i = 0; i <= setActive.length - 1; i++) { 
            elements = setActive[i].neighbours;
            for(let j = 0; j <= elements.length; j++) { 
                this._gridItems[elements[j]].live();
            }
            elements = [];
        }
    }

    newState() { 
        for(var i = 0; i <= (this.rows * this.columns) - 1; i++) { 
            var activeNeighbours = this._gridItems[i].neighbours.filter(el =>  this._gridItems[el] && this._gridItems[el].isAlive);
            var numberOfActiveNeighbours = activeNeighbours.length;
            if(this._gridItems[i].isAlive && (numberOfActiveNeighbours === 2 || numberOfActiveNeighbours === 3)) this._gridItems[i].newState = true;
            else if(!this._gridItems[i].isAlive && numberOfActiveNeighbours === 3)  this._gridItems[i].newState = true;
            else { this._gridItems[i].newState = false; }
        }
        
        this._gridItems.forEach(el => el.update()); 
    }

    generateRandomPattern() { 
        this._gridItems.forEach(el => Math.random() > 0.5 ? el.live() : el.dead());
    }

    resetGame() { 
        this._gridItems.forEach(el => el.dead());
    }

    setItemsActive(items) { 
        items.forEach(el => this._gridItems[el].live());
    }

    //GETTER & SETTERS
    get gridItems() { 
        return this._gridItems;
    }

    set gridItems(value) { 
        this.gridItems = value;
    }
    
    get running(){ 
        return this._running;
    }

    set running(value) { 
        this._running = value;
    }    
}

export default GameOfLife;