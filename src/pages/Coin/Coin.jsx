import React, { useContext, useEffect, useState } from 'react'
import './Coin.css'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../../context/CoinContext';
import LineChart from '../../components/LineCart/LineCart';

const Coin = () => {
    // Get coinId from URL parameters
    const { coinId } = useParams();
    // State to store coin data
    const [coinData, setCoinData] = useState();
    // State to store historical data
    const [historicalData, setHistoricalData] = useState();
    // State to store loading status
    const [loading, setLoading] = useState(true);
    // State to store error message
    const [error, setError] = useState(null);
    // Get currency and API_KEY from context
    const { currency, API_KEY } = useContext(CoinContext);

    // Function to fetch coin data
    const fetchCoinData = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': API_KEY }
        };

        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options);
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            setCoinData(data);
        } catch (err) {
            setError(err.message);
            console.error(err);
        }
    }

    // Function to fetch historical data
    const fetchHistoricalData = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': API_KEY }
        };

        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options);
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            setHistoricalData(data);
        } catch (err) {
            setError(err.message);
            console.error(err);
        }
    }

    // Fetch data when component mounts or currency changes
    useEffect(() => {
        fetchCoinData();
        fetchHistoricalData();
        setLoading(false);
    }, [currency])

    // Render coin data and chart if data is available
    if (loading) {
        return (
            <div className='spinner'>
                <div className="spin"></div>
            </div>
        )
    }

    if (error) {
        return (
            <div className='error'>
                <p>{error}</p>
            </div>
        )
    }

    if (coinData && historicalData) {
        return (
            <div className='coin'>
                <div className="coin-name">
                    <img src={coinData.image.large} alt="" />
                    <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
                </div>
                <div className="coin-chart">
                    <LineChart historicalData={historicalData} />
                </div>

                <div className="coin-info">
                    <ul>
                        <li>Crypto Market Rank</li>
                        <li>{coinData.market_cap_rank}</li>
                    </ul>
                    <ul>
                        <li>Current Price</li>
                        <li>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</li>
                    </ul>
                    <ul>
                        <li>Market cap</li>
                        <li>{currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
                    </ul>
                    <ul>
                        <li>24 Hour high</li>
                        <li>{currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
                    </ul>
                    <ul>
                        <li>24 Hour low</li>
                        <li>{currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
                    </ul>
                </div>
            </div>
        )
    } else {
        // Render spinner if data is not available
        return (
            <div className='spinner'>
                <div className="spin"></div>
            </div>
        )
    }
}

export default Coin
