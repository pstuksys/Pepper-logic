import { createContext, useState } from "react";

export namespace NKanbanContext {
    interface Task {
        id: string;
        content: string;
        code:string;
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
        watched: [{id:'e1',content:'bitcoin', code:'BTC'}],
        unwatched: []
    }
});


const KanbanProvider = (props:NKanbanContext.KanbanProviderProps) =>{

    const [columns, setColumns] = useState<NKanbanContext.Columns>({
        unwatched: [
            {content:'bitcoin',id:'e1',code:'BTC'},
            {content:'ether',id:'e2',code:'ETH'},
            {content:'tether',id:'e3',code:'TET'},
            {content:'dogeCoin',id:'e4',code:'DOGE'}
        ],
        watched: []
      });

    return (
        <KanbanContext.Provider value={{columns,setColumns}}>
            {props.children}
        </KanbanContext.Provider>
    )
}

export { KanbanContext, KanbanProvider };