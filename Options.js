import { todo_list } from "./Store.js";
import { syncStorage } from "./Storage.js";
import { renderList } from "./Dom.js";

export function toggleStatus(title){
    for(let i =0; i < todo_list.length; i++){
        const list_item = todo_list[i];
        
        if(list_item.title === title){
            list_item.status = list_item.status ? false : true;
        }
    } 
    // Model 2
    /* todo_list.forEach((List_Item) => {
          if(list_item.title === title){
         list_item.status = list_item.status ? false : true;}
    }) */

    // Model 3
    /* todo_list.forEach((List_Item) => {
          if(list_item.title === title){
         list_item.status = !list_item.status;}
    }) */

    syncStorage();
}

export function additem(item){
    const next_item = {
        title : item.title ,
        status: item.status ,
    }
    todo_list.push(next_item);
}

export function remove(title){
    // Model 1
    /* for(let i =0; i < todo_list.length; i++){
        const list_item = todo_list[i];
        
        if(list_item.title === title){ todo_list.splice(i,1);}
    }*/

    todo_list.forEach((list_item , i) => {
        if (list_item.title === title){
            todo_list.splice(i,1);
        }
    })
        

    syncStorage();
    renderList();
}
