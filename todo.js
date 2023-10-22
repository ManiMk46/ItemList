const Save_btn = document.querySelector("#save-btn");
const title_input = document.querySelector("#title");
const list = document.querySelector(".list");
const DeleteAll = document.querySelector(".delete-all");
let todo_list = [];


// work with DOM
function RenderItem(todo_item){
    const item = document.createElement("div");
        item.classList.add("item");
        
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type","checkbox");
        checkbox.checked = todo_item.status;

        const span = document.createElement("span");
        span.textContent = todo_item.title;

        const DeleteBtn = document.createElement("button");
        DeleteBtn.classList.add("delete");
        DeleteBtn.textContent = "Delete";

        
        item.appendChild(checkbox);
        item.appendChild(span);
        item.appendChild(DeleteBtn);
        list.appendChild(item);

        checkbox.addEventListener("click", () => {
            toggleStatus(todo_item.title);
        })

        DeleteBtn.addEventListener("click", () => {
            remove(todo_item.title);
        })
}

function renderList(){
    /* remove items */
    list.innerHTML = "";

    /* Render Items */
    for (let i = 0; i < todo_list.length; i++){
        const item = todo_list[i];
        RenderItem(item);
    }
}

function clearInput(){
    title_input.value = "";
}

// work ith storage
function syncStorage(){
    const next_list = JSON.stringify(todo_list);
    localStorage.setItem("MyItemList", next_list);
}

function loadFromStorage(){
    const ListFromStorage = JSON.parse(localStorage.getItem("MyItemList")) || [];
    todo_list = ListFromStorage
}

// Founctionality
function toggleStatus(title){
    for(let i =0; i < todo_list.length; i++){
        const list_item = todo_list[i];
        
        if(list_item.title === title){
            list_item.status = list_item.status ? false : true;
        }
    } 
    syncStorage();
}

function additem(item){
    const next_item = {
        title : item.title ,
        status: item.status ,
    }
    todo_list.push(next_item);
}

function remove(title){
    for(let i =0; i < todo_list.length; i++){
        const list_item = todo_list[i];
        
        if(list_item.title === title){
            todo_list.splice(i,1);
        }
    } 
    syncStorage();
    renderList();
}

// Run Your App
function OnAdditem(){
        const val = title_input.value;
    
        if(val === ""){
            alert("ye chiz benevis.");
        }else {
            const item = {
                title : val,
                status : false,
            }
            additem(item);
            syncStorage();
            RenderItem(item);
            clearInput();
        }
}

function OnDeleteAll(){
  const new_items = todo_list.filter((item) => {
    if(item.status === true){
        return false;
    } else {
        return true
    }
  });

  todo_list = new_items;
  syncStorage();
  renderList();
}

function EventBtn(){
    Save_btn.addEventListener("click", OnAdditem);
    DeleteAll.addEventListener("click", OnDeleteAll);
}

function init(){
    loadFromStorage();
    renderList();
    EventBtn();
}

init()



