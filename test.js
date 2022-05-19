let element = document.getElementById("buttonAddTask");
let list = document.getElementById("list");
let textOfTask = document.getElementById("inputTask");

const buttonFirstElement = document.getElementById("buttonElementFirst");
buttonFirstElement.addEventListener("click", () => {
    const row = document.getElementById("listElementFirst");
    row.remove();
});
const checkboxFirstElement = document.getElementById('inputElementFirst')
checkboxFirstElement.addEventListener('change', (event) => {
    const row = document.getElementById("listElementFirst");
    if (event.currentTarget.checked) {
        row.className = "checked";
    } else {
        row.className = "unchecked";
    }
})

const buttonSecondElement = document.getElementById("buttonElementSecond");
buttonSecondElement.addEventListener("click", () => {
    const row = document.getElementById("listElementSecond");
    row.remove();
});
const checkboxSecondElement = document.getElementById('inputElementSecond')
checkboxSecondElement.addEventListener('change', (event) => {
    const row = document.getElementById("listElementSecond");
    if (event.currentTarget.checked) {
        row.className = "checked";
    } else {
        row.className = "unchecked";
    }
})

const buttonThirdElement = document.getElementById("buttonElementThird");
buttonThirdElement.addEventListener("click", () => {
    const row = document.getElementById("listElementThird");
    row.remove();
});
const checkboxThirdElement = document.getElementById('inputElementThird')
checkboxThirdElement.addEventListener('change', (event) => {
    const row = document.getElementById("listElementThird");
    if (event.currentTarget.checked) {
        row.className = "checked";
    } else {
        row.className = "unchecked";
    }
})

element.addEventListener("click", (e) => {
    /*
      Create li
        create input
        add input
        create span
        add span
        create button
            create img
            add img
        add button
      add li
     */

    const id = "a" + Math.random().toString(36).substr(2);

    let liNew = document.createElement('li');
    liNew.id = id;

    let inputNew = document.createElement('input');
    inputNew.type = "checkbox";
    inputNew.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            liNew.className = "checked";
        } else {
            liNew.className = "unchecked";
        }
    })
    liNew.appendChild(inputNew);

    let spanNew = document.createElement('span');
    spanNew.textContent = textOfTask.value;
    liNew.appendChild(spanNew);

    let buttonDelete = document.createElement('button');
    buttonDelete.addEventListener("click", () => {
        const row = document.getElementById(id);
        row.remove();
    });

    let img = new Image();
    img.src = 'red cross.png';
    img.height = 10;
    img.width = 15;
    buttonDelete.appendChild(img);

    liNew.appendChild(buttonDelete);
    list.appendChild(liNew);
    //document.body.appendChild(ul);

    textOfTask.value = "";
    }
);


/*let indexForNewButton = 3;
/!*<button id="button">Click me!</button>
<script>
    let element = document.getElementById("button");
    element.addEventListener("click", () => {
    console.log("Button clicked!");
});
</script>*!/
let element = document.getElementById("buttonTest");
element.addEventListener("click", (e) => {
    console.log("CLickef");
    console.log(e.target.id);
    console.log(this.id);
    console.log("CLickef");
}
);



/!*
$(function(){
    $(".type").on("click", function(){
        var id = $(this).attr("id");
        alert(id);
    });
});*!/*/
