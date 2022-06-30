import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import Price from "./Price";
import { HelmetProvider } from "react-helmet-async";
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

const CoinList = styled.ul``;

const Coin = styled.li`
background-color: white;
margin: 20px 0px;
padding: 20px;
color:${props => props.theme.textColor};
a{
    padding: 20px;
    display: flex;
    align-items: center;
}
&:hover{
    a{
        transition: color 0.3s ease-in;
        color:${props => props.theme.accentColor};
    }
}
`;
const Loader = styled.div`
    font-size: 40px;
    display: flex;
    justify-content: center;
    `;

const Img = styled.img`
        width: 20px;
        height: 20px;
        margin-right: 10px;
    `;

interface ICoin {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
};

interface ItoggleMode {
    toggleMode: () => void;
}

function Coins({ toggleMode }: ItoggleMode) {

    const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);

    return (
        <Container>
            <HelmetProvider><title>Coins</title></HelmetProvider>
            <Header>
                <Title> Coins </ Title>
                <button onClick={toggleMode}>Mode</button>
            </Header>
            {isLoading ? <Loader>Loading...</Loader> :
                <CoinList>
                    {data?.slice(0, 100).map((coin) =>
                        <Coin key={coin.id}>
                            <Link to={{
                                pathname: `/${coin.id}`,
                                state: { name: coin.name }
                            }}>
                                <Img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} alt="/" />
                                {coin.name} &rarr;
                            </Link>
                        </Coin>)}
                </CoinList>}
        </Container>
    );
}

export default Coins;