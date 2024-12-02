import { useCallback, useContext, useEffect, useState } from "react";
import { KanbanContext } from "../../hooks/kanban-context";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Column from "./components/column/column";
import styled from "styled-components";
import axios from "axios";
import Chart, { ChartData, CryptoData } from "./components/chart/chart";



const KanbanBoard = () => {
  const [data, setData] = useState<ChartData[]>([]);
  const {columns, setColumns} = useContext(KanbanContext);
  const [loading,setLoading] = useState<boolean>(false);

  const cryptoCode = (Object.values(columns['watched']) || []).map((e)=>e.code);

  const onDragEnd = useCallback((result:DropResult) => {
    const {source,destination,draggableId} = result;

    if (!destination) return;

    const columnInitial = source.droppableId;
    const columnEnd = destination.droppableId;

    const columnStartArr = columns[source.droppableId];
    const columnEndArr = columns[destination.droppableId];

    const [movedTask] = columnStartArr.splice(source.index, 1);
    columnEndArr.splice(destination.index, 0, movedTask);

    setColumns({
      ...columns,
      [columnInitial]: columnStartArr,
      [columnEnd]: columnEndArr,
    });
    
  }, []);

  const columnData = (Object.keys(columns) || []);

  const fetchCryptoData = async (code:string[]) => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/api/crypto-server', {
        code: code,
        secret:process.env.REACT_APP_API_SECRET_KEY
      });

      const result: CryptoData[] =  response.data.data;

      const chartData = (result || []).map((crypto) => ({
        code: crypto.code,
        name: crypto.code,
        price: crypto.rate,
        hourChange: crypto.delta.hour,
        dayChange: crypto.delta.day,
        volume: crypto.volume,
        cap: crypto.cap,
        uv: crypto.rate, 
        pv: crypto.volume,
      }));
      
      setData(chartData);
      setLoading(false);

    } catch (error) {
      setLoading(false);
      console.error('Error fetching data:', error);
    }
  };

  useEffect(()=>{
    const cryptoCode = (Object.values(columns['watched']) || []).map((e)=>e.code);

    if(!cryptoCode?.length) return;

    fetchCryptoData(cryptoCode);

  },[columns])

  console.log({data})

  return (
    <>
    {columnData && loading ? <p>Loading...</p> : null}
    {cryptoCode?.length ? <Chart data={data}/> : null}
      <DragDropContext  
        onDragEnd={onDragEnd}>
          <Container>
            {columnData.map((columnId)=>(
              <Column key={columnId} columnId={columnId} tasks={columns[columnId]} />
            ))}
          </Container>
      </DragDropContext>
      
    </>
  )
}

export default KanbanBoard;

const Container = styled.div`
  display: flex;
  border-radius: 20px;
 box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`