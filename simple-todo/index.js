var task = [{
    "name": "hello",
    "status": "done",
    "id": 0
}]
var id = 1;
$(document).ready(() => {

    display_task()
    $('#save').click(() => {
        var task_hash = {}
        var task_name = $("#task_ip").val();
        if(task_name!=null || task_name!=''){
        task_hash["name"] = task_name;
        task_hash["status"] = "todo";
        task_hash["id"] = id;
        id++;
        task.push(task_hash);
        display_task()
        }else
        {
            
        }
    })
})

function display_task() {
    $('#d1').html("")
    for (let i = 0; i < task.length; i++) {
        $('#d1').append(`<div class="p-3 m-5  ${task[i].status=='done'?'bg-warning':'bg-info'}  text-white"><span>${task[i].name}</span> <div class="float-end"> 
         <input class="form-check-input " type="checkbox" value="" id="flexCheckDefault" ${task[i].status=='done'?'checked':''} onClick=upsate(${i})>
       <span onClick=delete_task(${i})>
         <i class="fa fa-trash fa-2x  text-danger" aria-hidden="true"></i> 
         </span >
         </div>
          </div>`);
    }
}

function upsate(i){
    console.log(i);
    if(task[i].status=='done')
    {
        task[i].status='todo';
    }else{
        task[i].status='done'

    }
    display_task()
}
function delete_task(i){
    console.log('delete')
    task.splice(i, 1);
    display_task()
}