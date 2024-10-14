import React from 'react';
import { Bitcoin, Coins, Sun, Triangle, Hexagon, Zap, Rocket } from 'lucide-react';

interface CryptoData {
  symbol: string;
  price: string;
  icon: React.ReactNode;
}

const cryptoData: CryptoData[] = [
  { symbol: 'BTC', price: '$63,000', icon: <Bitcoin size={20} /> },
  { symbol: 'ETH', price: '$2,451', icon: <Coins size={20} /> },
  { symbol: 'SOL', price: '$146', icon: <Sun size={20} /> },
  { symbol: 'AVAX', price: '$28.55', icon: <Triangle size={20} /> },
  { symbol: 'TON', price: '$5.48', icon: <Hexagon size={20} /> },
  { symbol: 'ZRO', price: '$4.90', icon: <Zap size={20} /> },
  { symbol: 'OLA', price: '$0.17', icon: <Rocket size={20} /> },
];

const CryptoTicker: React.FC = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 py-2 overflow-hidden">
      <div className="ticker-container">
        {[...cryptoData, ...cryptoData].map((data, index) => (
          <div key={index} className="ticker-item text-black dark:text-white">
            <span className="mr-2">{data.icon}</span>
            <span className="font-semibold">{data.symbol}</span>
            <span className="ml-2">{data.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoTicker;