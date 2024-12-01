import { useContext } from "react";
import { KanbanContext } from "../../hooks/kanban-context";


const KanbanBoard = () => {
  const {columns, setColumns} = useContext(KanbanContext);
  console.log(columns);

  return (
    <div>KanbanBoard</div>
  )
}

export default KanbanBoard;