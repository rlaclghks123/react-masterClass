import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface ChartProps {
    coinId: string;
}

interface IHistorycal {
    time_open: string,
    time_close: string,
    open: number,
    high: number,
    low: number,
    close: number,
    volume: number,
    market_cap: number,
}


function Chart({ coinId }: ChartProps) {
    const { isLoading, data } = useQuery<IHistorycal[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId));

    return <div>{isLoading ? ("Loading...") : (<ApexChart type="line"
        series={[
            {
                name: "Price",
                data: data?.map((price) => price.close) ?? [],
            },
        ]}

    />)}</div>
}

export default Chart