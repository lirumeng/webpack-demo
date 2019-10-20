import _ from 'lodash'
import printMain from './print.js'

function component() {
    var element = document.createElement('div')
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ')

    btn.innerHTML = 'Click me and check the console';
    btn.onclick = printMain

    element.appendChild(btn)

    return element
}

document.body.appendChild(component())