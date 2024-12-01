import { useContext } from "react"
import { KanbanContext, NKanbanContext } from "../../../../hooks/kanban-context"

type Column = {
    name:'Watched' | 'Unwatched'
}

const Column = (props:Column) => {
    const {columns,setColumns} = useContext(KanbanContext);
    console.log(columns);

  return (
    <div>Column</div>
  )
}

export default Column