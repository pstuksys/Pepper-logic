import { createContext, useState } from "react";

export namespace NKanbanContext {
    interface Task {
        id: string;
        content: string;
    }

    export interface Columns {
        [key: string]: Task[];
    }
    
    export interface KanbanContextType {
        columns: Columns;
        setColumns: React.Dispatch<React.SetStateAction<Columns>>;
    }
    export interface KanbanProviderProps {
        children: React.ReactNode;
      }
}

const KanbanContext = createContext<NKanbanContext.KanbanContextType>({
    setColumns:()=> {},
    columns:{
        watched: [{id:'e1',content:'bitcoin'}],
        unwatched: [{content:'ether',id:'e2'}]
    }
});


const KanbanProvider = (props:NKanbanContext.KanbanProviderProps) =>{

    const [columns, setColumns] = useState<NKanbanContext.Columns>({
        watched: [{id:'e1',content:'bitcoin'}],
        unwatched: [{content:'ether',id:'e2'}]
      });

    return (
        <KanbanContext.Provider value={{columns,setColumns}}>
            {props.children}
        </KanbanContext.Provider>
    )
}

export { KanbanContext, KanbanProvider };