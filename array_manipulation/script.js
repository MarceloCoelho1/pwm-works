const fifo_div = document.querySelector('.FIFO');
const input_fifo = document.querySelector('.input_fifo');
const button_fifo = document.querySelector('.button_fifo');
const remove_fifo = document.querySelector('.remove_fifo');
const color_target = document.querySelector('.color_target')
let fifo_div_p = fifo_div.getElementsByTagName('li')
const array = [];
const regex = /^\s*$/;


button_fifo.addEventListener('click', enterNumber);
remove_fifo.addEventListener('click', removeNumber)

function enterNumber() {

    if(regex.test(input_fifo.value)) {
        return
    }
    
    array.push(input_fifo.value);
    const color = color_target.value;
  
    let node = document.createTextNode(array[array.length - 1]);
    const li = document.createElement("li");
    li.appendChild(node);
    const div = document.createElement("div");

    div.style.backgroundColor = color;
    li.appendChild(div)
    fifo_div.appendChild(li);


    input_fifo.value = "";
    input_fifo.focus();
}


function removeNumber() {

    if(array.length - 1 >= 0) {
        array.shift();
        fifo_div.removeChild(fifo_div_p[0]);
    } else {
        console.log("insert an element");
    }

}


