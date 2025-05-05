let ADD = document.getElementById("add");
let INPUT = document.getElementById("input");
let DIV = document.getElementById("div_1");

ADD.addEventListener("click", function(){
    if (INPUT.value !== "") {
    let element = document.createElement("div");
    let newvalue = document.createElement('span');
    newvalue.innerText = INPUT.value;
    element.classList.add("border_2");
    element.classList.add("col-8");
    element.classList.add("fs-5");
    element.classList.add("user-select-none");
    // element.innerText = INPUT.value;
    element.appendChild(newvalue);
    DIV.appendChild(element);
    INPUT.value = "";

    newvalue.addEventListener("click", function(){
        newvalue.classList.add("text-decoration-line-through");
    });
    newvalue.addEventListener("dblclick", function(){
        newvalue.classList.remove("text-decoration-line-through");
    });

    let newEle = document.createElement('span');
    let newTexts = document.createTextNode('Edit');
    newEle.classList.add("text-success");
    newEle.classList.add("ms-5");
    newEle.appendChild(newTexts);
    element.appendChild(newEle);

    newEle.addEventListener("click", function() {
        

    });
    
    let newEl = document.createElement('span');
    let newText = document.createTextNode('Delete');
    newEl.classList.add("text-danger");
    newEl.classList.add("ms-5");
    newEl.appendChild(newText);
    element.appendChild(newEl);

    newEl.addEventListener("click", function() {
        element.remove();
    });

    };
});

// Create a new element and store it in a variable.
// let newEl = document.createElement('li'); // <li></li>

// Create a text node and store it in a variable.
// let newText = document.createTextNode('Alma'); // Alma

// Attach the new text node to the new element.
// newEl.appendChild(newText); // <li>Alma</li>

// Find the position where the new element should be added.
// let position = document.getElementById('todo');

// Insert the new element into its position.
// position.appendChild(newEl); // <ul><li>Alma</li></ul>

// document.getElementById('todo').innerHTML += '<li>Armyt</li>';

// document.getElementById('one').remove()