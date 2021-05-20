function AddTask()
{
    let listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(taches.value));
    masterApp.appendChild(listItem);
    $(listItem).on('swiperight', function()
    {
        if (listItem.className.indexOf('task-done') == -1){
            
            listItem.classList.add("task-done");
        }else{
            listItem.className = listItem.className.replace('task-done', '');
        }
    })
    $(listItem).on('swipeleft', function()
    {
        let deleteDirectly = true;
        if (listItem.className.indexOf('task-done') == -1){
            deleteDirectly = confirm("Tache non terminée. Supprimer??")
        }
        if (deleteDirectly){
            $(listItem).hide('slow', function(){
                listItem.remove();
            });
        }
    })
    $(masterApp).listview('refresh');
}