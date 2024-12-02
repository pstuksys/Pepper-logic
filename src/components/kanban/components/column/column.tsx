import { Droppable } from "react-beautiful-dnd";
import Coin from "../coin/coin";
import styled from "styled-components";

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
        <Container
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="kanban-column"
        >
            <h2>{columnId.toUpperCase()}</h2>

            {tasks.map((task, index) => (
            <Coin key={task.id} task={task} index={index} />
            ))}

            {provided.placeholder}
        </Container>
        )}
     </Droppable>
    </div>
  )
}

export default Column;

const Container = styled.div`
  margin:20px;
  width: 250px;
  max-width:100%;
  display:grid;
`