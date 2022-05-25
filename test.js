let element = document.getElementById("buttonAddTask");
let list = document.getElementById("list");
let textOfTask = document.getElementById("inputTask");

let labelRadiobuttonDone = document.getElementById("labelRadioDone");
let labelRadiobuttonNotDone = document.getElementById("labelRadioNotDone");
let labelRadiobuttonAll = document.getElementById("labelRadioAll");

const tasksList = new Array();

function check() {
    console.log("check function is called");

    let radiobuttonsFilter = document.getElementsByName("filter");
    let radiobuttonChecked;

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

            labelRadiobuttonDone.className = "choosen";
            labelRadiobuttonNotDone.className = "notChoosen";
            labelRadiobuttonAll.className = "notChoosen";


            for (let elementOfTaksList of tasksList) {
                if (elementOfTaksList?.isDone) {
                    const textTask = elementOfTaksList?.task;
                    const isElementChecked = true;
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
                            elementOfTaksList.isDone = true;
                        } else {
                            liNew.className = "unchecked";
                            elementOfTaksList.isDone = false;
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
            }            

            break;
        case "NotDone":
            console.log("radiobuttonChecked.value is NotDone");

            labelRadiobuttonDone.className = "notChoosen";
            labelRadiobuttonNotDone.className = "choosen";
            labelRadiobuttonAll.className = "notChoosen";

            for (let elementOfTaksList of tasksList) {
                if (!elementOfTaksList?.isDone) {
                    const textTask = elementOfTaksList?.task;
                    const isElementChecked = false;
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
                            elementOfTaksList.isDone = true;
                        } else {
                            liNew.className = "unchecked";
                            elementOfTaksList.isDone = false;
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
            }            

            break;
        case "All":
            console.log("radiobuttonChecked.value is All");

            labelRadiobuttonDone.className = "notChoosen";
            labelRadiobuttonNotDone.className = "notChoosen";
            labelRadiobuttonAll.className = "choosen";

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
                        elementOfTaksList.isDone = true;
                    } else {
                        liNew.className = "unchecked";
                        elementOfTaksList.isDone = false;
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
    task: 'Почесать кошку',
};
tasksList.push(taskFirstElementOfList);

const buttonFirstElement = document.getElementById("buttonElementFirst");
buttonFirstElement.addEventListener("click", () => { // Кнопка удаления
    indexOfItemToDelete = tasksList.findIndex(item => item?.id === "listElementFirst");
    tasksList.splice(indexOfItemToDelete, 1);

    check();
});

const checkboxFirstElement = document.getElementById('inputElementFirst')
checkboxFirstElement.addEventListener('change', (event) => { // Изменение значения checkbox-а
    if (checkboxFirstElement.checked) {
        taskFirstElementOfList.isDone = true;
    } else {
        taskFirstElementOfList.isDone = false;
    }

    check();
})

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
    if (checkboxSecondElement.checked) {
        taskSecondElementOfList.isDone = true;
    } else {
        taskSecondElementOfList.isDone = false;
    }

    check();
})

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

// Довавление слушателя на событие нажатия кнопки добавления задачи
element.addEventListener("click", (e) => {
    const textTask = textOfTask.value;
    const id = "li_" + Math.random().toString(36).substr(2);

    const newTaskElementOfList = {
        id: id,
        isDone: false,
        task: textTask,
    };
    tasksList.push(newTaskElementOfList);

    /*let liNew = document.createElement('li');
    liNew.id = id;

    let inputNew = document.createElement('input');
    inputNew.type = "checkbox";
    inputNew.addEventListener('change', (event) => {
        console.log("Checkbox change event is called from");

        if (inputNew.checked) {
            newTaskElementOfList.isDone = true;
        } else {
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
    list.appendChild(liNew);*/

    check();
    textOfTask.value = "";
    }
);