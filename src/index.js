import './style.scss'
import Icon1 from './happy.jpg'
import Icon2 from './logo.png'
import aFun from './a'

console.log('hello lirm!')

function func() {
  var element = document.createElement('div');
  var img1 = new Image();
  img1.src = Icon1;

  var img2 = new Image();
  img2.src = Icon2;

  element.appendChild(img1);
  element.appendChild(img2);

  return element;
}

document.body.appendChild(func());


if (process.env.NODE_ENV === 'development') {
  console.log('baseurl is localhost');
} else {
  console.log('baseurl is imooc')
}

aFun();