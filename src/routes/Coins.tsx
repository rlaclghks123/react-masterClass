import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
    color:${(props) => props.theme.accentColor};
    font-weight:700;
    font-size:50px;
`;

const Container = styled.div``;

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

const coins = [{
    id: "btc-bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    is_new: false,
    is_active: true,
    type: "coin",
},
{
    id: "eth-ethereum",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    is_new: false,
    is_active: true,
    type: "coin",
},
{
    id: "hex-hex",
    name: "HEX",
    symbol: "HEX",
    rank: 3,
    is_new: false,
    is_active: true,
    type: "token",
},];

function Coins() {
    return (
        <Container>
            <Header>
                <Title> 코인</ Title>
            </Header>
            <CoinList>
                {coins.map((coin) =>
                    <Coin key={coin.id}>
                        <Link to={`/${coin.id}`}>{coin.name} &rarr; </Link>
                    </Coin>)}
            </CoinList>
        </Container>
    );
}

export default Coins;