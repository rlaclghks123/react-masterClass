
const BASE_URL = `https://api.coinpaprika.com/v1`;

export async function fetchCoins() {

    return fetch(`${BASE_URL}/coins`).then((response) => response.json());
    // return  await(await fetch("https://api.coinpaprika.com/v1/coins")).json();
}

export function fetchCoinInfo(coinId: string) {
    return fetch(`${BASE_URL}/coins/${coinId}`).then((response) => response.json());
}

export function fetchCoinPrice(coinId: string) {
    return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) => response.json());
}

