class Beer{
    constructor(name, type){
        this.name=name;
        this.type=type;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name=name;
    }

    getType(){
        return this.type;
    }

    setType(type){
        this.type=type;
    }
}

module.exports = Beer