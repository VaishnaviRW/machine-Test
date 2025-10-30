const cl=console.log;

const Studentform = document.getElementById("Studentform")
const fNameControl= document.getElementById("fNameControl")
const LNameControl = document.getElementById("LNameControl")
const EmailControl =document.getElementById("EmailControl")
const ContactConrtol =document.getElementById("ContactConrtol")
const StudentTable =document.getElementById("StudentTable")
const Addtodobtn =document.getElementById("Addtodobtn")
const Updatetodobtn = document.getElementById("Updatetodobtn")

let StudentArr=[]
const uuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const tempalting =ele=>{
  result =``
  ele.forEach((ele,i) => {
    result+=`<tr id="${ele.StdId}">
      <td>${i+1}</td>
      <td>${ele.Fname}</td>
      <td>${ele.Lname}</td>
      <td>${ele.Email}</td>
     <td>${ele.contact}</td>
    <td><i onclick="onEdit(this)" class="fa-regular fa-pen-to-square fa-2x Edit"></i></td>
    <td><i onclick="onRemove(this)" class="fa-solid fa-trash fa-2x remove"></i></td>
    </tr>`
  });

  StudentTable.innerHTML=result  
}
const onStudentAdd =eve=>{
  eve.preventDefault()

  let student_obj={
   Fname:fNameControl.value,
   Lname:LNameControl.value,
   Email:EmailControl.value,
   contact:ContactConrtol.value,
   StdId:uuid()
  }
  Studentform.reset()
 StudentArr.push(student_obj)

 tempalting(StudentArr)
}
let Edit_id
const onEdit=eve=>{
   Edit_id = eve.closest("tr").id

  let Edit_Obj= StudentArr.find(std=>std.StdId === Edit_id)
 
  fNameControl.value= Edit_Obj.Fname
  LNameControl.value = Edit_Obj.Lname
  EmailControl.value = Edit_Obj.Email
  ContactConrtol.value= Edit_Obj.contact

  Addtodobtn.classList.add("d-none")//HIdes class 
  Updatetodobtn.classList.remove("d-none")

  cl(StudentArr)
}
const onRemove=eve=>{
  let confirmation=confirm("Are you sure, you want Remove Student?")

  if(confirmation){
    let Remove_id =Edit_id

    let Remove_Obj=StudentArr.findIndex(std=>std.StdId=== Remove_id)

    StudentArr.splice(Remove_Obj,1)

    eve.closest('tr').remove()
  }
}

const onstdUpdate = eve=>{
  let Update_id =Edit_id

  let Update_Obj= {
     Fname:fNameControl.value,
   Lname:LNameControl.value,
   Email:EmailControl.value,
   contact:ContactConrtol.value,
   StdId:Update_id
  }

  Studentform.reset()

  let getindex= StudentArr.findIndex(std=> std.StdId===Update_id)

  StudentArr[getindex] = Update_Obj

    Updatetodobtn.classList.add("d-none")
  Addtodobtn.classList.remove("d-none")

  let tr = document.getElementById(Update_id)

  tr.children[1].innerHTML = Update_Obj.Fname
  tr.children[2].innerHTML = Update_Obj.Lname
  tr.children[3].innerHTML = Update_Obj.Email
  tr.children[4].innerHTML = Update_Obj.contact

}

Studentform.addEventListener("submit",onStudentAdd)
Updatetodobtn.addEventListener("click", onstdUpdate)