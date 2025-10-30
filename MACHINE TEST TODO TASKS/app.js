const cl=console.log;

const Todoform =document.getElementById("Todoform")
const Todonamecontrol=document.getElementById("Todonamecontrol")
const todoconatiner = document.getElementById("todocontainer")
const Addtodobtn =document.getElementById("Addtodobtn")
const Updatetodobtn=document.getElementById("Updatetodobtn")

let TodoArr=[

]

//by default unique id
const uuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};


 let EDIT_ID

const onEdit =(eve)=>{
   EDIT_ID = eve.closest("li").id;
  cl(EDIT_ID)
  let EDIT_obj=TodoArr.find(to=>to.TodoId === EDIT_ID)
  Todonamecontrol.value = EDIT_obj.Todoname

  Addtodobtn.classList.add("d-none")
  Updatetodobtn.classList.remove("d-none")
}

const onRemove = (eve) => {
    let Remove_obj = TodoArr.findIndex(to => to.TodoId === EDIT_ID);
    TodoArr.splice(Remove_obj, 1);
  
    eve.closest("li").remove();
  };
  

const templating=ele=>{
  let result = `<ul class="list-group">`

  TodoArr.forEach(todo => {
    result +=`<li class="list-group-item d-flex justify-content-between" id="${todo.TodoId}"> <strong> ${todo.Todoname} </strong>
                    <div>
                         <button onclick="onEdit(this)" class="btn btn-success btn-sm ">Edit </button>
                         <button onclick="onRemove(this)" class="btn btn-danger btn-sm ">Remove </button>
                    </div>
                </li>`
  });

  result+="</ul>"

todoconatiner.innerHTML = result;
}

const onTodoAdd =eve=>{
  eve.preventDefault() //default behaviour when page will load

  let todoobj={
   Todoname:Todonamecontrol.value,
   TodoId: uuid()
  }
  
  Todoform.reset()

  TodoArr.push(todoobj)
templating(TodoArr)
cl(TodoArr)
}

const onTodoUpdate = eve =>{
  let update_obj= {
    Todoname:Todonamecontrol.value,
    TodoId : EDIT_ID.value
  }

  Todoform.reset();

  let getinedx=TodoArr.findIndex(to=>to.TodoId === EDIT_ID)

  TodoArr[getinedx] = update_obj;
 
   Updatetodobtn.classList.add("d-none")
   Addtodobtn.classList.remove("d-none")

  let li = document.getElementById(EDIT_ID);
  li.children[0].innerHTML = update_obj.Todoname
}


Todoform.addEventListener("submit",onTodoAdd)
Updatetodobtn.addEventListener("click" , onTodoUpdate)