let form = document.querySelector("#myForm");

form.addEventListener("submit" , onSubmit);
window.addEventListener("DOMContentLoaded",loadStorage);


function loadStorage(e){
        e.preventDefault();
       
        axios.get("https://crudcrud.com/api/4478824bdc0f4ac2ba34cdc31228b2f1/userData")
        .then(res=>{
            res.data.map(result=>{
                showOnScreen(result)
            })
        })
        .catch(err=>{console.log(err);
            document.body.innerHTML = document.body.innerHTML + `<h4>Something went wrong</h4>`
            })
}



function onSubmit(e){
    e.preventDefault();
    let details = {
        amount:e.target.amount.value,
        desc:e.target.description.value,
        cat:e.target.category.value,
    }

    axios.post("https://crudcrud.com/api/4478824bdc0f4ac2ba34cdc31228b2f1/userData",details)
    .then(res=>{showOnScreen(res.data)})
    .catch(err=>{console.log(err);
    document.body.innerHTML = document.body.innerHTML + `<h4>Something went wrong</h4>`
    })

}

function showOnScreen(data){

   
    let list = document.getElementById("expensesList");
    let childHTML = `<li id=${data._id}> ${data.amount} - ${data.cat} - ${data.desc} 
    <button onclick="edit('${data._id}','${data.desc}','${data.amount}','${data.cat}')">Edit</button>
    <button onclick="remove('${data._id}')">Delete</button>
    </li>`

    list.innerHTML = list.innerHTML + childHTML ;

    document.getElementById("amount").value="" ;
    document.getElementById("description").value="" ;
    document.getElementById("category").value="" ;

}

function remove(userId){
    axios.delete(`https://crudcrud.com/api/4478824bdc0f4ac2ba34cdc31228b2f1/userData/${userId}`)
    removefromscreen(userId);
}


function removefromscreen(userId){
    
    let parent = document.getElementById("expensesList");
    let child = document.getElementById(userId);
    if(child){
        parent.removeChild(child);
    }
}

function edit(userId,desc,amount,category){
    
    document.getElementById("amount").value=amount ;
    document.getElementById("description").value=desc ;
    document.getElementById("category").value=category ;
    
    remove(userId);

}