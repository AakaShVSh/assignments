export const DeleteTodo = (todoarr,value) => {

        return todoarr.filter(function(ele){
            return ele != value
        })
}