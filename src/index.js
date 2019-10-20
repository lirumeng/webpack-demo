import _ from 'lodash'
import './style.css'
import BgImage from './assets/images/bg.jpg'
import Data from './assets/xml/demo.xml'

function component() {
    var element = document.createElement('div')

    element.innerHTML = _.join(['Hello你好', 'webpack'], ' ')
    element.classList.add('hello')

    var myBg = new Image()
    myBg.src = BgImage
    element.appendChild(myBg)

    console.log(Data)

    return element
}

document.body.appendChild(component())