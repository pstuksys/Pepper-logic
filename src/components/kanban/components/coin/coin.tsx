import { Draggable } from "react-beautiful-dnd";

type TCoin = {
  task: { id: string; content: string };
  index: number;
};

const Coin = (props:TCoin) => {
  const {index,task} = props;

  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className="kanban-task"
        style={{
          ...provided.draggableProps.style,
          margin: '5px 0',
          padding: '10px',
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      >
        {task.content}
      </div>
    )}
  </Draggable>
  )
}

export default Coin