import { LineChart, Line, XAxis,  CartesianGrid, Tooltip } from 'recharts';
import styled from 'styled-components';

export interface CryptoData {
  code: string;
  rate: number;
  volume: number;
  cap: number;
  delta: {
    hour: number;
    day: number;
    week: number;
    month: number;
    quarter: number;
    year: number;
  };
}

export interface ChartData {
    code: string;
    price: number;
    hourChange: number;
    dayChange: number;
    volume: number;
    cap: number;
    uv: number;
    pv: number
}

const Chart = (props:{data:ChartData[]}) => {
  const {data} = props;

  return (
    <Container>
      <LineChart width={400} height={400} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
        <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
      </LineChart>
  </Container>
  )
}

export default Chart

const Container = styled.div`
    width:100%;
    height:400px
`