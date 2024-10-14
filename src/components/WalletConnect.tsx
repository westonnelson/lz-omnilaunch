import React from 'react';
import { useWeb3 } from '../contexts/Web3Context';

const WalletConnect: React.FC = () => {
  const { connectWallet, disconnectWallet, account, active, error } = useWeb3();

  const handleConnect = () => {
    // You can implement a modal or dropdown here to let users choose their preferred wallet
    connectWallet('injected'); // Default to MetaMask for simplicity
  };

  return (
    <div className="flex justify-center mb-4">
      {active ? (
        <div className="flex items-center space-x-4">
          <p className="text-sm">Connected: {account?.slice(0, 6)}...{account?.slice(-4)}</p>
          <button
            onClick={disconnectWallet}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors text-sm"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={handleConnect}
          className="bg-accent text-black px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors text-sm font-medium"
        >
          Connect Wallet
        </button>
      )}
      {error && <p className="text-red-500 mt-2 text-sm">{error.message}</p>}
    </div>
  );
};

export default WalletConnect;