const Save_btn = document.querySelector("#save-btn");
const title_input = document.querySelector("#title");
const list = document.querySelector(".list");

const todo_list = [];

function makeItem(items){
    const item = document.createElement("div");
        item.classList.add("item");
        
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type","checkbox");

        const span = document.createElement("span");
        span.textContent = items;
        
        item.appendChild(checkbox);
        item.appendChild(span);
        list.appendChild(item);
}

function clearInput(){
    title_input.value = "";
}

function syncStorage(title){
    todo_list.push(title);
    const new_todo = JSON.stringify(todo_list);
    localStorage.setItem("MyItemList", new_todo);
}

Save_btn.addEventListener("click", () => {
    const val = title_input.value;

    if(val === ""){
        alert("ye chiz benevis.");
    }else {
        syncStorage(val);
        makeItem(val);
        clearInput();
    }
})