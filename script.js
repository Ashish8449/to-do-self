//   varibles
const addButton = document.querySelector(".addButton");
const closeCross = document.querySelector(".cross");
const inputDiv = document.querySelector(".input_div");
const toDoList = document.querySelector(".todoList");
const inputBox = document.querySelector(".inputbox");
const editBox = document.querySelector(".editbox");
const addItem = document.querySelector(".addItem");
const deleteButtons = document.querySelector(".delete");
const editDiv = document.querySelector(".edit_div");
const crossEdit = document.querySelector(".crossEdit");
const saveItem = document.querySelector(".saveItem");

// addEventListeners

addButton.addEventListener("click", clickAddButton);
closeCross.addEventListener("click", clickCloseButton);
addItem.addEventListener("click", addItemli);
crossEdit.addEventListener("click", closeCrossFunc);

toDoList.addEventListener("click", deleteCompleteEdit);

// functions
// add item to the list
function clickAddButton(e) {
  console.log("click on button");

  //add listbox class
  inputDiv.classList.toggle("hidden");
}

// close the display
function clickCloseButton(e) {
  console.log(e);
  inputDiv.classList.add("hidden");
}
// close cross button:
function closeCrossFunc(e) {
  editDiv.classList.add("hidden");
}

// add item to the ul

function addItemli(e) {
  // console.log(e);
  const todoli = document.createElement("li");
  todoli.classList.add("listbox");
  console.log(inputBox);

  todoli.innerText = inputBox.value;
  inputBox.value = "";
  const span = document.createElement("span");

  //   complete button
  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class="fas smallBox"></i>';
  completeButton.classList.add("btn");
  span.appendChild(completeButton);
  // trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fal fa-trash"></i>';
  trashButton.classList.add("btn");
  span.appendChild(trashButton);

  todoli.appendChild(span);
  toDoList.appendChild(todoli);
  span.classList.add("ms-auto");
  // edit button
  const editButton = document.createElement("button");
  editButton.innerHTML = `<i class="fas fa-edit"></i>`;
  editButton.classList.add("btn");
  span.appendChild(editButton);

  inputDiv.classList.add("hidden");
}

// deleteCompleteEdit function
function deleteCompleteEdit(e) {
  console.log(e.target);
  let item = e.target;
  if (item.classList[1] == "fa-check" || item.classList[1] == "smallBox") {
    item.classList.toggle("fa-check");
    item.classList.toggle("smallBox");
  }
  console.log(item.classList);
  if (item.classList[1] == "fa-trash") {
    item.parentElement.parentElement.parentElement.remove();
  }
  if (item.classList[1] == "fa-edit") {
    console.log(editDiv);

    editDiv.classList.toggle("hidden");
    let editInput = document.querySelector(".editbox");
    editInput.value = item.parentElement.parentElement.parentElement.innerText;
    saveItem.addEventListener("click", (ee) => {
      // item.parentElement.parentElement.parentElement.innerText =
      //   editInput.value;
      const todoli = item.parentElement.parentElement.parentElement;
      todoli.innerText = editBox.value;
      editBox.value = "";
      const span = document.createElement("span");

      //   complete button
      const completeButton = document.createElement("button");
      completeButton.innerHTML = '<i class="fas fa-check"></i>';
      completeButton.classList.add("btn");
      span.appendChild(completeButton);
      // trash button
      const trashButton = document.createElement("button");
      trashButton.innerHTML = '<i class="fal fa-trash"></i>';
      trashButton.classList.add("btn");
      span.appendChild(trashButton);

      todoli.appendChild(span);
      toDoList.appendChild(todoli);
      span.classList.add("ms-auto");
      // edit button
      const editButton = document.createElement("button");
      editButton.innerHTML = `<i class="fas fa-edit"></i>`;
      editButton.classList.add("btn");
      span.appendChild(editButton);

      editDiv.classList.add("hidden");
    });
  }
}
