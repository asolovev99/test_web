let element = document.getElementById("buttonAddTask");
let list = document.getElementById("list");
let textOfTask = document.getElementById("inputTask");

function DeleteTask(e)
{
    currentTask = e.
}

element.addEventListener("click", (e) => {




    let img = new Image();
    img.src = 'red cross.png';

    let buttonNew = document.createElement('button');
    buttonNew.addEventListener("click", (e) => {

    });


    //let ul = document.createElement("ul"); ul.classList.add("ul");
    let liNew = document.createElement('li');
    liNew.innerHTML = textOfTask.value;





    buttonNew.appendChild(img);
    list.appendChild(liNew);
    //document.body.appendChild(ul);










    }
);


let indexForNewButton = 3;
/*<button id="button">Click me!</button>
<script>
    let element = document.getElementById("button");
    element.addEventListener("click", () => {
    console.log("Button clicked!");
});
</script>*/
let element = document.getElementById("buttonTest");
element.addEventListener("click", (e) => {
    console.log("CLickef");
    console.log(e.target.id);
    console.log(this.id);
    console.log("CLickef");
}
);



/*
$(function(){
    $(".type").on("click", function(){
        var id = $(this).attr("id");
        alert(id);
    });
});*/
