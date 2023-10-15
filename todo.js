const Save_btn = document.querySelector("#save-btn");
const title_input = document.querySelector("#title");
const list = document.querySelector(".list");
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
        
        item.appendChild(checkbox);
        item.appendChild(span);
        list.appendChild(item);

        checkbox.addEventListener("click", () => {
            toggleStatus(todo_item.title)
        })
}

function renderList(){
    for (let i = 0; i < todo_list.length; i++){
        const title = todo_list[i].title;
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

    syncStorage();
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
            RenderItem(item);
            clearInput();
        }
}

function EventBtn(){
    Save_btn.addEventListener("click", OnAdditem);
}

function init(){
    loadFromStorage();
    renderList();
    EventBtn();
}

init()



