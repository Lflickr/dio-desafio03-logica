class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque = this.definirAtaque()
        console.log(`o ${this.tipo} atacou ${ataque}`)
    }

    definirAtaque(){
        let ataque
        if(this.tipo == "guerreiro")
            ataque = "usando espada"
        else if(this.tipo == "mago")
            ataque = "usando magia"
        else if(this.tipo == "monge")
            ataque = "usando artes marciais"
        else
            ataque = "usando shuriken"
        
        return ataque
    }
}

let mago = new Heroi("Bartolomeu", 42, "mago")
let guerreiro = new Heroi("Tarik", 23, "guerreiro")
let monge = new Heroi("Buchs", 33, "monge")
let ninja = new Heroi("Hayate", 21, "ninja")

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()