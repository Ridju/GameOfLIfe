class Cell { 
    constructor(index, numOfRows, numberOfElements) { 
        this._domElement = document.createElement("div");
        this._domElement.className = "grid-item";
        this._aliveBool = false;
        this._domElement.addEventListener('click', () => this.toggleDeadAlive(), false);
        this._index = index;
        this._neighbours = this.calcNeighbours(numOfRows, numberOfElements);
        this.newState = false;
    }

    update() { 
        if(this.newState) { 
            this.live();
        } else { 
            this.dead();
        };
    }

    live() {
        this.alive = true;
        this._domElement.className += " alive";
    }

    dead() { 
        this.alive = false;
        this._domElement.className = "grid-item";
    }

    toggleDeadAlive() { 
        if(this._aliveBool) { 
            this.dead();
        } else {
            this.live();
        }
    }

    calcIndex(row, offset, numberOfElementsPerRow) { 
        return row*numberOfElementsPerRow + offset;
    }

    calcElements(row, offset, numberOfElementsPerRow) { 
        var result = []
        if(offset - 1 >= 0 && offset - 1 <= numberOfElementsPerRow - 1) result.push(this.calcIndex(row, offset - 1, numberOfElementsPerRow))
        if(offset >= 0 && offset <=  numberOfElementsPerRow - 1) result.push(this.calcIndex(row, offset, numberOfElementsPerRow))
        if(offset + 1 >= 0 && offset + 1 <=  numberOfElementsPerRow - 1) result.push(this.calcIndex(row, offset + 1, numberOfElementsPerRow))
        return result;
    }

    calcNeighbours(numOfRows, numberOfElements) { 
        const numberOfElementsPerRow = numberOfElements / numOfRows;
        const rest = this._index % numberOfElementsPerRow;
        const row = (this._index - rest) / numberOfElementsPerRow;
        const offset = this._index - (row * numberOfElementsPerRow);

        var neighbours = [];
        if(row - 1 >= 0) neighbours = neighbours.concat(this.calcElements(row - 1, offset, numberOfElementsPerRow));
        if(row  >= 0) neighbours = neighbours.concat(this.calcElements(row , offset, numberOfElementsPerRow));
        if(row + 1 >= 0) neighbours = neighbours.concat(this.calcElements(row + 1, offset, numberOfElementsPerRow));
        return neighbours.filter(el => el >= 0 && el != this._index);
    } 

    //GETTERS & SETTERS
    get domElement() { 
        return this._domElement;
    }

    get isAlive() {
        return this._aliveBool;
    }

    set alive(value) { 
        this._aliveBool = value;
    }

    get neighbours() { 
        return this._neighbours
    }

    get index() { 
        return this._index;
    }

}

export default Cell;

