const form = document.querySelector('#form')
const lblres = document.querySelector('#lblres')
const rbsumar = document.querySelector('#sumar')
const rbrestar = document.querySelector('#restar')
const rbmultiplicar = document.querySelector('#multiplicar')
const rbdividir = document.querySelector('#dividir')
const contenedor = document.querySelector('#contenedor')
const btndelete = document.querySelector('#btndelete')
let historial = []


const Sumar = (num1, num2) => {
    historial.push(`${num1} + ${num2} = ${Number(num1) + Number(num2)}`)
    rbsumar.setAttribute('checked', 'checked')
    return Number(num1) + Number(num2)
}

const Restar = (num1, num2) => {
    historial.push(`${num1} - ${num2} = ${Number(num1) - Number(num2)}`)
    rbrestar.setAttribute('checked', 'checked')
    return Number(num1) - Number(num2)
}

const Multiplicar = (num1, num2) => {
    historial.push(`${num1} * ${num2} = ${Number(num1) * Number(num2)}`)
    rbmultiplicar.setAttribute('checked', 'checked')
    return Number(num1) * Number(num2)
}

const Dividir = (num1, num2) => {
    historial.push(`${num1} / ${num2} = ${Number(num1) / Number(num2)}`)
    rbdividir.setAttribute('checked', 'checked')
    return Number(num1) / Number(num2)
}

const Guardar = () => {
    localStorage.setItem('historial', JSON.stringify(historial))
    Render()
}

const Render = () => {
    contenedor.innerHTML = ''

    historial = JSON.parse(localStorage.getItem('historial'))

    if (historial === null) {
        historial = []
    }
    else{
    historial.map(h => {
        contenedor.innerHTML += `<div class= "alert alert-info text-center"> ${h}</div>`
        })
    }
}




btndelete.addEventListener('click', () => {
    if (window.confirm('Estas seguro que deseas limpiar el historial?')){
        localStorage.removeItem('historial')
        Render()
    }
})



form.addEventListener('submit', e => {
    e.preventDefault()

    let num1 = document.querySelector('#num1').value
    let num2 = document.querySelector('#num2').value
    let res = ''

    if (rbsumar.checked) {
        res = Sumar(num1, num2)
    }

    if (rbrestar.checked) {
        res = Restar(num1, num2)
    }

    if (rbmultiplicar.checked) {
        res = Multiplicar(num1, num2)
    }

    if (rbdividir.checked) {
        res = Dividir(num1, num2)
    }


    lblres.innerHTML = `Resultado: ${res}`

    Guardar()

    form.reset()
})

document.querySelector('DOMContentLoaded', Render)