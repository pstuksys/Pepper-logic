import { useContext } from "react"
import { KanbanContext, NKanbanContext } from "../../../../hooks/kanban-context"
import { Droppable } from "react-beautiful-dnd";
import Coin from "../coin/coin";

type TColumnProps = {
    columnId: string;
    tasks: { id: string; content: string }[];
  }

  /***@info An area that can be dropped into */
const Column = (props:TColumnProps) => {
    const {columnId,tasks} = props;

  return (
    <div>
     <Droppable droppableId={columnId}>
        {(provided) => (
        <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="kanban-column"
            style={{ margin: '10px', width: '250px' }}
        >
            <h2>{columnId.toUpperCase()}</h2>

            {tasks.map((task, index) => (
            <Coin key={task.id} task={task} index={index} />
            ))}

            {provided.placeholder}
        </div>
        )}
     </Droppable>
    </div>
  )
}

export default Column