let element = document.getElementById("buttonAddTask");
let list = document.getElementById("list");
let textOfTask = document.getElementById("inputTask");

const tasks = new Map();
const tasksList = new Array();

function check() {
    console.log("check function is called");

    let radiobuttonsFilter = document.getElementsByName("filter");
    let radiobuttonChecked;

    /*for (var radiobutton in radiobuttonsFilter) {
        if (radiobutton.checked) {
            radiobuttonChecked = radiobutton;
            break;
        }
    }*/
    for (let i = 0; i < radiobuttonsFilter.length; i++) {
        if (radiobuttonsFilter[i].checked) {
            radiobuttonChecked = radiobuttonsFilter[i];
            break;
        }
    }

    while (list.firstChild) {
        list.firstChild.remove();
    }

    switch (radiobuttonChecked.value) {
        case "Done":
            console.log("radiobuttonChecked.value is Done");

            for (let elementOfTaksList of tasksList) {
                if (elementOfTaksList?.isDone) {
                    const textTask = elementOfTaksList?.task;
                    const isElementChecked = elementOfTaksList?.isDone;

                    //const id = "task_" + Math.random().toString(36).substr(2);
                    const id = elementOfTaksList?.id;

                    let liNew = document.createElement('li');
                    liNew.id = id;
                    liNew.className = "checked";

                    let inputNew = document.createElement('input');
                    inputNew.type = "checkbox";
                    inputNew.checked = isElementChecked;
                    inputNew.addEventListener('change', (event) => {
                        if (event.currentTarget.checked) {
                            liNew.className = "checked";
                            tasks.set(textTask, true);
                        } else {
                            liNew.className = "unchecked";
                            tasks.set(textTask, false);
                        }

                        check();
                    })
                    liNew.appendChild(inputNew);

                    let spanNew = document.createElement('span');
                    spanNew.textContent = textTask;
                    liNew.appendChild(spanNew);

                    let buttonDelete = document.createElement('button');
                    buttonDelete.addEventListener("click", () => {
                        //const row = document.getElementById(id);
                        //row.remove();
                        indexOfItemToDelete = tasksList.findIndex(item => item?.id === id);
                        tasksList.splice(indexOfItemToDelete, 1);
                        //tasks.delete(textTask);

                        check();
                    });

                    let img = new Image();
                    img.src = 'red cross.png';
                    img.height = 10;
                    img.width = 15;
                    buttonDelete.appendChild(img);

                    liNew.appendChild(buttonDelete);
                    list.appendChild(liNew);
                }
            }

            /*for (let elementOfList of tasks) {
                if (elementOfList[1]) {
                    const textTask = elementOfList[0];
                    const isElementChecked = elementOfList[1];

                    const id = "a" + Math.random().toString(36).substr(2);

                    let liNew = document.createElement('li');
                    liNew.id = id;
                    liNew.className = "checked";

                    let inputNew = document.createElement('input');
                    inputNew.type = "checkbox";
                    inputNew.checked = isElementChecked;
                    inputNew.addEventListener('change', (event) => {
                        if (event.currentTarget.checked) {
                            liNew.className = "checked";
                            tasks.set(textTask, true);
                        } else {
                            liNew.className = "unchecked";
                            tasks.set(textTask, false);
                        }

                        check();
                    })
                    liNew.appendChild(inputNew);

                    let spanNew = document.createElement('span');
                    spanNew.textContent = textTask;
                    liNew.appendChild(spanNew);

                    let buttonDelete = document.createElement('button');
                    buttonDelete.addEventListener("click", () => {
                        const row = document.getElementById(id);
                        row.remove();
                        tasks.delete(textTask);
                    });

                    let img = new Image();
                    img.src = 'red cross.png';
                    img.height = 10;
                    img.width = 15;
                    buttonDelete.appendChild(img);

                    liNew.appendChild(buttonDelete);
                    list.appendChild(liNew);
                }
            }*/

            break;
        case "NotDone":
            console.log("radiobuttonChecked.value is NotDone");

            for (let elementOfTaksList of tasksList) {
                if (!elementOfTaksList?.isDone) {
                    const textTask = elementOfTaksList?.task;
                    const isElementChecked = elementOfTaksList?.isDone;
                    const id = elementOfTaksList?.id;

                    let liNew = document.createElement('li');
                    liNew.id = id;
                    liNew.className = "unchecked";

                    let inputNew = document.createElement('input');
                    inputNew.type = "checkbox";
                    inputNew.checked = isElementChecked;
                    inputNew.addEventListener('change', (event) => {
                        if (event.currentTarget.checked) {
                            liNew.className = "checked";
                            tasks.set(textTask, true);
                        } else {
                            liNew.className = "unchecked";
                            tasks.set(textTask, false);
                        }

                        check();
                    })
                    liNew.appendChild(inputNew);

                    let spanNew = document.createElement('span');
                    spanNew.textContent = textTask;
                    liNew.appendChild(spanNew);

                    /*let buttonDelete = document.createElement('button');
                    buttonDelete.addEventListener("click", () => {
                        const row = document.getElementById(id);
                        row.remove();
                        tasks.delete(textTask);
                    });*/

                    let buttonDelete = document.createElement('button');
                    buttonDelete.addEventListener("click", () => {
                        indexOfItemToDelete = tasksList.findIndex(item => item?.id === id);
                        tasksList.splice(indexOfItemToDelete, 1);

                        check();
                    });

                    let img = new Image();
                    img.src = 'red cross.png';
                    img.height = 10;
                    img.width = 15;
                    buttonDelete.appendChild(img);

                    liNew.appendChild(buttonDelete);
                    list.appendChild(liNew);
                }
            }

            /*for (let elementOfList of tasks) {
                if (!elementOfList[1]) {
                    const textTask = elementOfList[0];
                    const isElementChecked = elementOfList[1];

                    const id = "a" + Math.random().toString(36).substr(2);

                    let liNew = document.createElement('li');
                    liNew.id = id;
                    liNew.className = "unchecked";

                    let inputNew = document.createElement('input');
                    inputNew.type = "checkbox";
                    inputNew.checked = isElementChecked;
                    inputNew.addEventListener('change', (event) => {
                        if (event.currentTarget.checked) {
                            liNew.className = "checked";
                            tasks.set(textTask, true);
                        } else {
                            liNew.className = "unchecked";
                            tasks.set(textTask, false);
                        }

                        check();
                    })
                    liNew.appendChild(inputNew);

                    let spanNew = document.createElement('span');
                    spanNew.textContent = textTask;
                    liNew.appendChild(spanNew);

                    let buttonDelete = document.createElement('button');
                    buttonDelete.addEventListener("click", () => {
                        const row = document.getElementById(id);
                        row.remove();
                        tasks.delete(textTask);
                    });

                    let img = new Image();
                    img.src = 'red cross.png';
                    img.height = 10;
                    img.width = 15;
                    buttonDelete.appendChild(img);

                    liNew.appendChild(buttonDelete);
                    list.appendChild(liNew);
                }
            }*/

            break;
        case "All":
            console.log("radiobuttonChecked.value is All");

            /*for (let elementOfList of tasks) {
                const textTask = elementOfList[0];
                const isElementChecked = elementOfList[1];

                const id = "a" + Math.random().toString(36).substr(2);

                let liNew = document.createElement('li');
                liNew.id = id;
                if (isElementChecked) {
                    liNew.className = "checked";
                }
                else {
                    liNew.className = "unchecked";
                }

                let inputNew = document.createElement('input');
                inputNew.type = "checkbox";
                inputNew.checked = isElementChecked;
                inputNew.addEventListener('change', (event) => {
                    if (event.currentTarget.checked) {
                        liNew.className = "checked";
                        tasks.set(textTask, true);
                    } else {
                        liNew.className = "unchecked";
                        tasks.set(textTask, false);
                    }

                    check();
                })
                liNew.appendChild(inputNew);

                let spanNew = document.createElement('span');
                spanNew.textContent = textTask;
                liNew.appendChild(spanNew);

                let buttonDelete = document.createElement('button');
                buttonDelete.addEventListener("click", () => {
                    const row = document.getElementById(id);
                    row.remove();
                    tasks.delete(textTask);
                });

                let img = new Image();
                img.src = 'red cross.png';
                img.height = 10;
                img.width = 15;
                buttonDelete.appendChild(img);

                liNew.appendChild(buttonDelete);
                list.appendChild(liNew);
            }*/

            for (let elementOfTaksList of tasksList) {
                const textTask = elementOfTaksList?.task;
                const isElementChecked = elementOfTaksList?.isDone;
                const id = elementOfTaksList?.id;

                let liNew = document.createElement('li');
                liNew.id = id;
                if (isElementChecked) {
                    liNew.className = "checked";
                }
                else {
                    liNew.className = "unchecked";
                }

                let inputNew = document.createElement('input');
                inputNew.type = "checkbox";
                inputNew.checked = isElementChecked;
                inputNew.addEventListener('change', (event) => {
                    if (event.currentTarget.checked) {
                        liNew.className = "checked";
                        tasks.set(textTask, true);
                    } else {
                        liNew.className = "unchecked";
                        tasks.set(textTask, false);
                    }

                    check();
                })
                liNew.appendChild(inputNew);

                let spanNew = document.createElement('span');
                spanNew.textContent = textTask;
                liNew.appendChild(spanNew);

                let buttonDelete = document.createElement('button');
                buttonDelete.addEventListener("click", () => {
                    indexOfItemToDelete = tasksList.findIndex(item => item?.id === id);
                    tasksList.splice(indexOfItemToDelete, 1);

                    check();
                });

                let img = new Image();
                img.src = 'red cross.png';
                img.height = 10;
                img.width = 15;
                buttonDelete.appendChild(img);

                liNew.appendChild(buttonDelete);
                list.appendChild(liNew);
            }

            break;
        default:
            console.log("radiobuttonChecked.value isn't Done or NotDone or All");

            break;
    }
}

const taskFirstElementOfList = {
    id: "listElementFirst",
    isDone: false,
    task: "Почесать кошку",
};
tasksList.push(taskFirstElementOfList);

const buttonFirstElement = document.getElementById("buttonElementFirst");
buttonFirstElement.addEventListener("click", () => { // Кнопка удаления
    //const row = document.getElementById("listElementFirst");
    //row.remove();
    /*tasksList.splice(tasksList.findIndex(item => item.task === "Почесать кошку"), 1);
    tasks.delete("Почесать кошку");*/

    indexOfItemToDelete = tasksList.findIndex(item => item?.id === "listElementFirst");
    tasksList.splice(indexOfItemToDelete, 1);

    check();
});

const checkboxFirstElement = document.getElementById('inputElementFirst')
checkboxFirstElement.addEventListener('change', (event) => { // Изменение значения checkbox-а
    //const row = document.getElementById("listElementFirst");
    if (checkboxFirstElement.checked) {
        //row.className = "checked";
        taskFirstElementOfList.isDone = true;
        //tasks.set("Почесать кошку", true);
    } else {
        //row.className = "unchecked";
        taskFirstElementOfList.isDone = false;
        //tasks.set("Почесать кошку", false);
    }

    check();
})
/*tasksList.find(item => item.task === "Почесать кошку").isDone = false;
tasks.set("Почесать кошку", false);*/

const taskSecondElementOfList = {
    id: "listElementSecond",
    isDone: false,
    task: "Полить картошку",
};
tasksList.push(taskSecondElementOfList);

const buttonSecondElement = document.getElementById("buttonElementSecond");
buttonSecondElement.addEventListener("click", () => {
    indexOfItemToDelete = tasksList.findIndex(item => item?.id === "listElementSecond");
    tasksList.splice(indexOfItemToDelete, 1);

    check();
});

const checkboxSecondElement = document.getElementById('inputElementSecond')
checkboxSecondElement.addEventListener('change', (event) => {
    //const row = document.getElementById("listElementSecond");
    if (checkboxSecondElement.checked) {
        taskSecondElementOfList.isDone = true;
    } else {
        taskSecondElementOfList.isDone = false;
    }

    check();
})
//tasks.set("Полить картошку", false);

const taskThirdElementOfList = {
    id: "listElementThird",
    isDone: false,
    task: "Сложить в лукошко",
};
tasksList.push(taskThirdElementOfList);

const buttonThirdElement = document.getElementById("buttonElementThird");
buttonThirdElement.addEventListener("click", () => {
    indexOfItemToDelete = tasksList.findIndex(item => item?.id === "listElementThird");
    tasksList.splice(indexOfItemToDelete, 1);

    check();
});

const checkboxThirdElement = document.getElementById('inputElementThird')
checkboxThirdElement.addEventListener('change', (event) => {    
    if (checkboxThirdElement.checked) {
        taskThirdElementOfList.isDone = true;
    } else {
        taskThirdElementOfList.isDone = false;
    }
})

// Кнопка для добавления задачи
element.addEventListener("click", (e) => {
    const textTask = textOfTask.value;
    const id = "li_" + Math.random().toString(36).substr(2);

    const newTaskElementOfList = {
        id: id,
        isDone: false,
        task: textTask,
    };
    tasksList.push(newTaskElementOfList);

    let liNew = document.createElement('li');
    liNew.id = id;

    let inputNew = document.createElement('input');
    inputNew.type = "checkbox";
    inputNew.addEventListener('change', (event) => {
        console.log("Checkbox change event is called from");

        if (inputNew.checked) {
            /*liNew.className = "checked";
            tasks.set(textTask, true);*/
            newTaskElementOfList.isDone = true;
        } else {
            /*liNew.className = "unchecked";
            tasks.set(textTask, false);*/
            newTaskElementOfList.isDone = false;
        }

        console.log("Now check function should be called");
        check();
    })
    liNew.appendChild(inputNew);

    let spanNew = document.createElement('span');
    spanNew.textContent = textOfTask.value;
    liNew.appendChild(spanNew);

    let buttonDelete = document.createElement('button');
    buttonDelete.addEventListener("click", () => {
        /*const row = document.getElementById(id);
        row.remove();
        tasks.delete(textTask);*/
        indexOfItemToDelete = tasksList.findIndex(item => item === newTaskElementOfList);
        tasksList.splice(indexOfItemToDelete, 1);

        check();
    });

    let img = new Image();
    img.src = 'red cross.png';
    img.height = 10;
    img.width = 15;
    buttonDelete.appendChild(img);

    liNew.appendChild(buttonDelete);
    list.appendChild(liNew);
    //document.body.appendChild(ul);

    //tasks.set(textOfTask.value, false);
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
