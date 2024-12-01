import { useCallback, useContext } from "react";
import { KanbanContext } from "../../hooks/kanban-context";
import { DragDropContext, Draggable, Droppable, DropResult, OnDragEndResponder } from "react-beautiful-dnd";
import Column from "./components/column/column";

const KanbanBoard = () => {
  const {columns, setColumns} = useContext(KanbanContext);

  const onDragEnd = useCallback((result:DropResult) => {
    const {source,destination,draggableId} = result;

    if (!destination) return;
    console.log({destination,source,draggableId})

    const columnInitial = source.droppableId;
    const columnEnd = destination.droppableId;

    const columnStartArr = columns[source.droppableId];
    const columnEndArr = columns[destination.droppableId];

    const [movedTask] = columnStartArr.splice(source.index, 1);
    columnEndArr.splice(destination.index, 0, movedTask);

    console.log({columnStartArr,columnEndArr,movedTask});

    console.log(result)

    setColumns({
      ...columns,
      [columnInitial]: columnStartArr,
      [columnEnd]: columnEndArr,
    });
    
  }, []);

  const columnData = (Object.keys(columns) || []);

  return (
    <DragDropContext  
      onDragEnd={onDragEnd}>
        <div style={{display:'flex'}}>
          {columnData.map((columnId)=>(
           <Column key={columnId} columnId={columnId} tasks={columns[columnId]} />
          ))}
        </div>
          
    </DragDropContext>
  )
}

export default KanbanBoard;