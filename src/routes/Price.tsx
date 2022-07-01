import { useEffect } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinPrice } from "../api";


interface IPrice {
    coinId: string;
}

interface IPriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD: {
            ath_date: string;
            ath_price: number;
            market_cap: number;
            market_cap_change_24h: number;
            percent_change_1h: number;
            percent_change_1y: number;
            percent_change_6h: number;
            percent_change_7d: number;
            percent_change_12h: number;
            percent_change_15m: number;
            percent_change_24h: number;
            percent_change_30d: number;
            percent_change_30m: number;
            percent_from_price_ath: number;
            price: number;
            volume_24h: number;
            volume_24h_change_24h: number;
        };
    };
}

const Overview = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    background-color: white;
    padding: 10px 20px;
    border-radius: 10px;
    margin-bottom: 10px;
    height: 100px;
    background-color: white;
`;


const OverviewItem = styled.div`
    border-top: 0.1px solid rgba(0,0,0,0.2);
    border-bottom:  0.1px solid rgba(0,0,0,0.2);;
    display: flex;
    align-items: center;
    background-color: white;
`;

const ItemName = styled.div`
color:black;
display: flex;
justify-content: center;
align-items: center;
width:37%;
height:100%;
font-size: 12px;
font-weight: 400;
`;

const ItemData = styled.div`
font-size:12px;
`;

function Price({ coinId }: IPrice) {

    const { isLoading, data } = useQuery<IPriceData>(["price", coinId], () => fetchCoinPrice(coinId), { refetchInterval: 10000 });
    console.log(data);

    return <div>
        {isLoading ? "Loading..." :
            <>
                <Overview>
                    <OverviewItem>
                        <ItemName>현재가:</ItemName>
                        <ItemData>{`${data?.quotes.USD.price.toFixed(1)} $USD`}</ItemData>
                    </OverviewItem>

                    <OverviewItem>
                        <ItemName>전일대비:</ItemName>
                        <ItemData>{`${data?.quotes.USD.percent_change_24h.toFixed(2)}%`}</ItemData>
                    </OverviewItem>

                    <OverviewItem>
                        <ItemName>최고가:</ItemName>
                        <ItemData>{`${data?.quotes.USD.ath_price.toFixed(1)} $USD`}</ItemData>
                    </OverviewItem>

                    <OverviewItem>
                        <ItemName>최고가 일자:</ItemName>
                        <ItemData>{`${data?.quotes.USD.ath_date.slice(0, 10)}`}</ItemData>
                    </OverviewItem>

                    <OverviewItem>
                        <ItemName>시가총액:</ItemName>
                        <ItemData>{`${data?.quotes.USD.market_cap.toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} $USD`}</ItemData>
                    </OverviewItem>

                    <OverviewItem>
                        <ItemName>24H 거래량:</ItemName>
                        <ItemData>{`${data?.quotes.USD.volume_24h.toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} $USD`}</ItemData>
                    </OverviewItem>

                </Overview>




            </>
        }
    </div>
}

export default Price