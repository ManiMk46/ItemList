import { todo_list } from "./Store.js";
import { toggleStatus , remove} from "./Options.js";

export const title_input = document.querySelector("#title");
const list = document.querySelector(".list");

export function RenderItem(todo_item){
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

export function renderList(){
    /* remove items */
    list.innerHTML = "";

    /* Render Items */
    for (let i = 0; i < todo_list.length; i++){
        const item = todo_list[i];
        RenderItem(item);
    }

    /* 
    Render Item Model 2  todo_list.forEach((item) => {
                         renderitem(item);} );
     */
}

export function clearInput(){
    title_input.value = "";
}
