// * [X] Utilizar os eventos
//* [X] Disparar eventos
//* [X] Ouvir eventos
//* [X] Executar ações para determinados eventos
/* const { EventEmitter } = require('events')
const ev = new EventEmitter()

ev.on('saySomething', (message) => {
    console.log('Eu ouvi você: ', message)
})

ev.emit('saySomething', "Valdoni")
ev.emit('saySomething', "Teste")
ev.emit('saySomething', "teste5") */


// Entender como ele é a base para os outros módulos
/* const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin');
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`))

console.log('Oh! E agora, quem poderá me defender? ')
chapolin.emit('help') */