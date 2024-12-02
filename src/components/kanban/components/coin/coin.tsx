import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

type TCoin = {
  task: { id: string; content: string };
  index: number;
};

const Coin = (props:TCoin) => {
  const {index,task} = props;

  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
    {(provided) => (
      <Container
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className="kanban-task"
        style={{
          ...provided.draggableProps.style,
        }}
      >
        {task.content}
      </Container>
    )}
  </Draggable>
  )
}

export default Coin

const Container = styled.div`
  width: 100%;
  max-width:50%;
  height:100px;
  border:1px solid #FFD700;
  background-color: #FFD700;
  margin:5px 0;
  border-radius: 50%;
  display:flex;
  align-items: center;
  justify-content: center;
`