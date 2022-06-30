import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface ChartProps {
    coinId: string;
}

interface IHistorycal {
    time_open: number,
    time_close: number,
    open: string,
    high: string,
    low: string,
    close: string,
    volume: string,
    market_cap: number,
}

interface IChartProps {
    isDark: boolean;
    coinId: string;
}

function Chart({ coinId, isDark }: IChartProps) {
    const { isLoading, data } = useQuery<IHistorycal[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId));
    console.log(data);
    return <div>{isLoading ? ("Loading...") : (
        <ApexChart type="candlestick"
            series={[
                {
                    data: data?.map((price) => {

                        return {
                            x: price.time_open,
                            y: [price.open, price.high, price.low, price.close]
                        }
                    })
                } as any
            ]}

            options={
                {
                    chart: {
                        type: 'candlestick',
                        height: 350,
                        width: 200,
                        toolbar: {
                            show: false
                        }
                    },
                    theme: {
                        mode: isDark ? "dark" : "light"
                    },
                    title: {
                        text: 'CandleStick Chart',
                        align: 'left'
                    },
                    xaxis: {
                        type: 'datetime'
                    },
                    yaxis: {
                        tooltip: {
                            enabled: true
                        }
                    }
                }
            }
        />)
    }</div>
}

export default Chart