const input=document.getElementById('input');
const btnsub=document.getElementById('btnsub');
const ff=document.getElementById('ff');
const dd=document.getElementById('dd');
const body=document.getElementById('body');
let cl=console.log;


let arr1=[
    {title:'selected',body:'selected for first ,second and third round .selected for given profile '},
];




function onsub(eve){
    eve.preventDefault();
    let obj={
        title:input.value,
        body:body.value
    };
     dd.reset();
    // post(obj);
     //console.log(obj);
    
}
function hrcall(){
    return new Promise((resolve,reject)=>{  
        setTimeout(()=>{
        let error=Math.random()>0.5? true:false;
        if(!error){
            let data='selected for first round';
             cl(data)
           resolve(data);

        }else{
            let err='not selected';
            cl('candidate is so poor in basics');
            reject(err)
            swal.fire({
        title:'no',
        text:err,
        icon:'error',
        timer:5000
    })
        }
    },2000);
        
    })
}

function first(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        let error=Math.random()>0.5? true:false;
        if(!error){
            let data='selected for second round';
             cl(data)
           resolve(data);

        }else{
            let err='candidate selected for first but candidate is not able to exp coding consepts' ;
            cl('candidate is not able to exp coding consepts');
            reject(err);
            swal.fire({
        title:'not selected for second',
        text:err,
        icon:'error',
        timer:5000
    })
        }
    },2000);
        
    })
}

function second(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        let error=Math.random()>0.5? true:false;
        if(!error){
            let data='selected for third round';
             cl(data)
           resolve(data);

        }else{
            let err='candidate selected for second round but candidate is not able to exp advance consepts' ;
            cl('candidate is not able to exp advance consepts');
            reject(err);
            swal.fire({
        title:'not selected for third',
        text:err,
        icon:'error',
        timer:5000
    })
        }
    },1500);
        
    })
}

function third(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        let error=Math.random()>0.5? true:false;
        if(!error){
            let data='selected for given profile';
             cl(data)
           resolve(data);

        }else{
            let err='candidate selected for third round but candidate does not has experience' ;
            cl('candidate is not able to exp coding consepts');
            reject(err);
            swal.fire({
        title:'not selected for given profile',
        text:err,
        icon:'error',
        timer:5000
    })
        }
    },1000);
        
    })
}


    

hrcall()
.then((res)=>{
    cl(res);
    return first();
})
   .then((res)=>{
    cl(res);
    return second();
  })

  .then((res)=>{
    cl(res);
    return third();
  })
  .then((res)=>{
    cl(res);
	create(arr1);
    swal.fire({
        title:'es',
        text:'selected for given profile',
        icon:'success',
        timer:3000
    })
  })

.catch((err)=>{
    cl(err);
})


 

function create(arr){ 
let r='';
r+=arr.map(e=> {
     // console.log(e);
    return `
         <div class="card m-3">
             <form id="ff">
                <div class="card-header">${e.title}?
                </div>
                <div class="card-body">${e.body}.</div>
                <div class="card-footer d-flex justify-content-between">
                    <button type="button" class="btn btn-outline-primary">edit</button>
                    <button type="button" class="btn btn-outline-danger ">delete</button>
                </div>
                </form>
            </div>
            `});
ff.innerHTML=r;
}


 btnsub.addEventListener('click',onsub)