import { renderList } from "./Dom.js";
import { get_todos_list } from "./api/todos.js";
import { OnAdditem, OnDeleteAll } from "./Events.js";
import { reset } from "./Store.js";

const Save_btn = document.querySelector("#save-btn");
const DeleteAll = document.querySelector(".delete-all");
const EnterClick = document.querySelector(".EnterBtn");
const Search = document.querySelector("#search");

function EventBtn(){
    /* Save_btn.addEventListener("click", OnAdditem); */
    DeleteAll.addEventListener("click", OnDeleteAll);

    EnterClick.addEventListener("submit", (event) => {
        event.preventDefault();
        OnAdditem();
    })

    DeleteAll.addEventListener("click", (event) => {
        event.preventDefault();
    })
}



function init(){
    get_todos_list().then((list) => {
        reset(list);
        renderList();
      });
    EventBtn();
}

init()



