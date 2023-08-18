//localstorage is written as parseInt method to not face the problem which is counter increases as 1111 after refresh the page!!!!

let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

const counterActive = document.querySelector('#counter')
const decreaseActive = document.querySelector('#decrease')
const increaseActive = document.querySelector('#increase')

counterActive.innerHTML = counter;

decreaseActive.addEventListener('click' , counterFunc)
increaseActive.addEventListener('click' , counterFunc)

function counterFunc() {
    this.id == "increase" ? counter += 1 : counter -= 1;
    localStorage.setItem('counter' , counter)
    counterActive.innerHTML = counter;
}