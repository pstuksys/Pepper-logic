import { useCallback, useContext } from "react";
import { KanbanContext } from "../../hooks/kanban-context";
import { DragDropContext, Draggable, Droppable, DropResult, OnDragEndResponder } from "react-beautiful-dnd";
import Column from "./components/column/column";
import styled from "styled-components";

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
        <Container>
          {columnData.map((columnId)=>(
           <Column key={columnId} columnId={columnId} tasks={columns[columnId]} />
          ))}
        </Container>
          
    </DragDropContext>
  )
}

export default KanbanBoard;

const Container = styled.div`
  display: flex;
  border-radius: 20px;
 box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`