import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import styled from "styled-components";

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

interface RouteParams {
    coinId: string;
}

interface RouteState {
    name: string;
}

function Coin() {
    const { coinId } = useParams<RouteParams>();
    const [loading, setLoading] = useState(true);
    const { state } = useLocation<RouteState>();
    const [info, setInfo] = useState({});
    const [priceInfo, setPriceInfo] = useState({});

    useEffect(() => {
        (async () => {
            const coinInfo = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
            const coinPriceInfo = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json();
            setInfo(coinInfo);
            setPriceInfo(coinPriceInfo);
        }
        )();
    }, []);
    return (
        <Container>
            <Header>
                <Title>{state?.name || "Loading..."} </ Title>
            </Header>
            {loading ? <Loader>Loading...</Loader> :
                null}
        </Container>
    );
}

export default Coin;

