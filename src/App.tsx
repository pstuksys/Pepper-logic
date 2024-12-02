import KanbanBoard from "./components/kanban/kanban-board";
import { KanbanProvider } from "./hooks/kanban-context";


const App = () => {

  return (
    <KanbanProvider>
      <KanbanBoard/>
    </KanbanProvider>
  )
}

export default App;