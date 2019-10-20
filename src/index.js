import _ from 'lodash'

function component() {
    var element = document.createElement('div')

    element.innerHTML = _.join(['Hello你好', 'webpack'], ' ')
    element.classList.add('hello')

    return element
}

document.body.appendChild(component())