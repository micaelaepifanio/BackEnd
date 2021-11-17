const fs = require ('fs')

class Contenedor {
    constructor (path) {
        this.path = path
    }

    lastId = 0;

    save (objectToSave) {
        this.lastId++
        const withId = {...objectToSave, ...{id : this.lastId}}
        let allFile;
        if(this.lastId != 1){
            console.log(this.getAll())
            allFile = this.getAll()
            allFile.push(withId)
        }else{
            allFile = [withId]
        }
        console.log(allFile)
        this.saveFile(JSON.stringify(allFile))
        return this.lastId;
    }

    saveFile (content) {
        fs.writeFileSync (this.path, content)
    }

    getById (id) {
        const file = this.getAll()
        const byId = file.find(o => o.id == id)
        return byId
    }

    getAll () {
        return JSON.parse(fs.readFileSync(this.path).toString())
    }

    deleteById (id) {
        const all = this.getAll()
        const filtered = all.filter( o => o.id != id);
        this.saveFile(JSON.stringify(filtered))
    }

    deleteAll () {
        this.saveFile(JSON.stringify([]))
    }
}

module.exports = {Contenedor} 