import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import styled from "styled-components";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Chart from "./Chart";
import Price from "./Price";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoinInfo, fetchCoinPrice } from "../api";
import { HelmetProvider } from "react-helmet-async";

//style component
const Title = styled.h1`
    color:${(props) => props.theme.accentColor};
    font-weight:700;
    font-size:50px;
`;

const Container = styled.div`
padding:20px;
max-width: 480px;
margin:0px auto; 
`;

const Header = styled.header`
height:20vh;
display:flex;
align-items:center;
justify-content:center;
`;

const Loader = styled.div`
    font-size: 40px;
    display: flex;
    justify-content: center;
    color:black;
    `;

const Overview = styled.div`
    display:flex;
    justify-content: space-between;
    background-color: white;
    padding: 10px 20px;
    border-radius: 10px;
    background-color:white;
`;


const OverviewItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:white;
    span:first-child {
        font-size: 10px;
        font-weight: 400;
        margin-bottom: 5px;
  }
`;

const Description = styled.p`
    margin: 20px 0px;
    color:${props => props.theme.pColor};
    `;



const Taps = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    margin: 25px 0px;
    gap:10px;
    background-color: white;
    border-radius: 10px;
`;


const Tap = styled.span<{ isActive: boolean }>`
text-align: center;
text-transform: uppercase;
background-color: white;
padding: 7px 0px;
font-size: 12px;
font-weight: 700;
border-radius: 10px;
color:${props => props.isActive ? props.theme.accentColor : props.theme.textColor};
a{
    display: block;
}
`;



// interface 
interface RouteParams {
    coinId: string;
}

interface RouteState {
    name: string;
}

interface IInfoData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;
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

interface ICoinProp {

}

function Coin({ }: ICoinProp) {


    const { coinId } = useParams<RouteParams>();
    const { state } = useLocation<RouteState>();

    //routeMatch
    const priceMathch = useRouteMatch(`/${coinId}/price`);
    const chartMathch = useRouteMatch(`/${coinId}/chart`);

    const { isLoading: infoLoadding, data: infoData } = useQuery<IInfoData>(["info", coinId], () => fetchCoinInfo(coinId));
    const { isLoading: priceLoading, data: priceData } = useQuery<IPriceData>(["price", coinId], () => fetchCoinPrice(coinId), { refetchInterval: 5000 });

    const loading = infoLoadding || priceLoading;


    return (
        <Container>
            <HelmetProvider>
                <title> {state?.name ? state.name : loading ? "Loading..." : infoData?.name} </title>
            </HelmetProvider>
            <Header>
                <Title>
                    <Link to={"/"}>
                        {
                            state?.name ? state.name : loading ? "Loading..." : infoData?.name
                        }
                    </Link>
                </ Title>
            </Header>
            {loading ? (<Loader>Loading...</Loader>) :
                (
                    <>
                        <Overview>
                            <OverviewItem>
                                <span>Rank:</span>
                                <span>{infoData?.rank}</span>
                            </OverviewItem>

                            <OverviewItem>
                                <span>SYMBOL:</span>
                                <span>{infoData?.symbol}</span>
                            </OverviewItem>

                            <OverviewItem>
                                <span>Price:</span>
                                <span>{priceData?.quotes.USD.ath_price.toFixed(3)}</span>
                            </OverviewItem>
                        </Overview>

                        <Description>{infoData?.description}</Description>

                        <Overview>
                            <OverviewItem>
                                <span>TOTAL SUPLY:</span>
                                <span>{priceData?.total_supply}</span>
                            </OverviewItem>

                            <OverviewItem>
                                <span>MAX SUPLY:</span>
                                <span>{priceData?.max_supply}</span>
                            </OverviewItem>
                        </Overview>

                        <Taps>
                            <Tap isActive={priceMathch !== null}>
                                <Link to={`/${coinId}/price`}>Price</Link>
                            </Tap>
                            <Tap isActive={chartMathch !== null}>
                                <Link to={`/${coinId}/chart`}>Chart</Link>
                            </Tap>
                        </Taps>

                        <Switch>
                            <Route path={`/${coinId}/price`}>
                                <Price coinId={coinId} />
                            </Route>
                            <Route path={`/${coinId}/chart`}>
                                <Chart coinId={coinId} />
                            </Route>
                        </Switch>
                    </>
                )
            }
        </Container>
    );
}

export default Coin;

