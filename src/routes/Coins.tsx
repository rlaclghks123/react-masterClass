import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

const CoinList = styled.ul``;

const Coin = styled.li`
background-color: white;
margin: 20px 0px;
padding: 20px;
a{
    padding: 20px;
    display: block;
}
&:hover{
    a{
        transition: color 0.2s ease-in;
        color:${props => props.theme.accentColor};
    }
}
`;
const Loader = styled.div`
    font-size: 40px;
    display: flex;
    justify-content: center;
    `;

interface CoinInterface {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
};



function Coins() {
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (
            async () => {
                const response = await fetch("https://api.coinpaprika.com/v1/coins");
                const json = await response.json();
                setCoins(json.slice(0, 100));
                setLoading(false);
            }
        )();
    }, []);
    return (
        <Container>
            <Header>
                <Title> 코인</ Title>
            </Header>
            {loading ? <Loader>Loading...</Loader> : <CoinList>
                {coins.map((coin) =>
                    <Coin key={coin.id}>
                        <Link to={`/${coin.id}`}>{coin.name} &rarr; </Link>
                    </Coin>)}
            </CoinList>}
        </Container>
    );
}

export default Coins;