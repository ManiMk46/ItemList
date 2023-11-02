import { todo_list,reset } from "./Store.js";
const STORAGE_KEY = "MyItemList";

export function syncStorage(){
    const next_list = JSON.stringify(todo_list);
    localStorage.setItem(STORAGE_KEY, next_list);
    /* mishe mtqyr jdid trif nkrd v msqtim code ro gzsht !NEXT_LIST */
}

export function loadFromStorage(){
    const ListFromStorage = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    reset(ListFromStorage);
    /* injur jaha mitnim const jadid tarif nknim 
    va harchi mikhym tarif knim o mstqim bzrim jeloye todo_list */
}