import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import styled from "styled-components";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Chart from "./Chart";
import Price from "./Price";
import { Link } from "react-router-dom";
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

const Description = styled.p`
    margin: 20px 0px`;


const Taps = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    margin: 25px 0px;
    gap:10px;
`;


const Tap = styled.span<{ isActive: boolean }>`
text-align: center;
text-transform: uppercase;
background-color: white;
padding: 7px 0px;
font-size: 12px;
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


function Coin() {
    const { coinId } = useParams<RouteParams>();
    const [loading, setLoading] = useState(true);
    const { state } = useLocation<RouteState>();
    const [info, setInfo] = useState<IInfoData>();
    const [priceInfo, setPriceInfo] = useState<IPriceData>();
    const priceMathch = useRouteMatch(`/${coinId}/price`);
    const chartMathch = useRouteMatch(`/${coinId}/chart`);
    useEffect(() => {
        (async () => {
            const coinInfo = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
            const coinPriceInfo = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json();
            // console.log(coinInfo);
            // console.log(coinPriceInfo);
            setInfo(coinInfo);
            setPriceInfo(coinPriceInfo);
            setLoading(false);
        }
        )();
    }, [coinId]);

    return (
        <Container>
            <Header>
                <Title>
                    <Link to={"/"}>
                        {
                            state?.name ? state.name : loading ? "Loading..." : info?.name
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
                                <span>{info?.rank}</span>
                            </OverviewItem>

                            <OverviewItem>
                                <span>SYMBOL:</span>
                                <span>{info?.symbol}</span>
                            </OverviewItem>

                            <OverviewItem>
                                <span>OPEN SOURCE:</span>
                                <span>{info?.open_source ? "Yes" : "NO"}</span>
                            </OverviewItem>
                        </Overview>

                        <Description>{info?.description}</Description>

                        <Overview>
                            <OverviewItem>
                                <span>TOTAL SUPLY:</span>
                                <span>{priceInfo?.total_supply}</span>
                            </OverviewItem>

                            <OverviewItem>
                                <span>MAX SUPLY:</span>
                                <span>{priceInfo?.max_supply}</span>
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
                                <Price />
                            </Route>
                            <Route path={`/${coinId}/chart`}>
                                <Chart />
                            </Route>
                        </Switch>
                    </>
                )
            }
        </Container>
    );
}

export default Coin;

