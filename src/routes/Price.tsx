import { useEffect } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinPrice } from "../api";
import { IPriceData } from "./Coin";

interface IPrice {
    coinId: string;
}

const Overview = styled.div`
    display:flex;
    justify-content: space-between;
    background-color: white;
    padding: 10px 20px;
    border-radius: 10px;
    margin-bottom: 10px;

`;


const OverviewItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
 
    span:first-child {
        font-size: 10px;
        font-weight: 400;
        margin-bottom: 5px;
  }
`;


function Price({ coinId }: IPrice) {

    const { isLoading, data } = useQuery<IPriceData>(["price", coinId], () => fetchCoinPrice(coinId), { refetchInterval: 10000 });
    console.log(data);
    return <div>
        {isLoading ? "Loading..." :
            <>
                <Overview>
                    <OverviewItem>
                        {`현재가:  ${data?.quotes.USD.price.toFixed(3)} $USD`}
                    </OverviewItem>
                </Overview>

                <Overview>
                    <OverviewItem>
                        {`전일대비 :  ${data?.quotes.USD.percent_change_24h}%`}
                    </OverviewItem>
                </Overview>

                <Overview>
                    <OverviewItem>
                        {`최고가 : ${data?.quotes.USD.ath_price.toFixed(3)} $USD`}
                    </OverviewItem>
                    <OverviewItem>
                        {`최고가 일자 :  ${data?.quotes.USD.ath_date.slice(0, 10)}`}
                    </OverviewItem>
                </Overview>

                <Overview>
                    <OverviewItem>
                        {`시가총액 :  ${data?.quotes.USD.market_cap.toFixed(1)} $USD`}
                    </OverviewItem>
                </Overview>
            </>
        }
    </div>
}

export default Price