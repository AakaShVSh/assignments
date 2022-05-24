import React, { useEffect, useState } from 'react'

const Todolist = ({todo,isdelete}) => {
    
  return (
    <div>
      {todo.map((e) => (
        <div>
          <p>{e.title}</p><button onClick={() => (isdelete(e.id))}>delete</button>
        </div>
      ))}
    </div>
  )
}

export default Todolist
