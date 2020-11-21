//1
function fahrenheit(tCel) {
	let tFah = 0
  let value = +tCel
	if((typeof value) === 'number') {
  	tFah = (9/5) * value + 32
    return `${tCel} celsius is ${tFah} in fahrenheit`
  }
 	return `A value you've entered is invalid, please use correct value` 
}

const userPrompt = prompt('Please enter a value to convert')
const result = fahrenheit(userPrompt)

alert(result)

//2

let admin = ''
let name = 'Василий'
admin = name
alert(admin)

addEventListener('DOMCo')

//3
//Выведет строку 1000108, т.к. конкатинация возвращает строку

//4
// async и defer устанавливают порядок загрузки скриптов из внешнего источника. 
// Defer не боликрует построение DOM дерева и выполняет скрипты в указанной очередности до события DOMContentLoaded
// Async не блокирует построение DOM дерева и события не зависят от выполнения скриптов, скрипты выполняются в порядке их загрузки