import { RenderItem, title_input } from "./Dom.js";
import { additem } from "./Options.js";
import { syncStorage } from "./Storage.js";
import { renderList,clearInput } from "./Dom.js";
import { todo_list,reset } from "./Store.js";

export function OnAdditem(){
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

export function OnDeleteAll(){
const new_items = todo_list.filter((item) => {
/* return !item.status; in daqiqan hamin payiniast */
if(item.status === true){
return false;
} 
return true;
});

reset(new_items);

syncStorage();
renderList();
}
