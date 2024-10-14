import React, { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { Web3ReactProvider, useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

const ALCHEMY_API_KEY = import.meta.env.VITE_ALCHEMY_API_KEY || "2truSVBnd-BHaUqXRzLMJMBAoiazjbT8";

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56, 97, 137, 80001],
});

const walletconnect = new WalletConnectConnector({
  rpc: { 1: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}` },
  qrcode: true,
});

interface Web3ContextType {
  account: string | null;
  active: boolean;
  library: ethers.providers.Web3Provider | null;
  chainId: number | null;
  error: Error | null;
  connectWallet: (connectorType: 'injected' | 'walletconnect') => void;
  disconnectWallet: () => void;
}

const Web3Context = createContext<Web3ContextType | null>(null);

export const Web3ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { account, active, library, chainId, error, activate, deactivate } = useWeb3React<ethers.providers.Web3Provider>();
  const [connector, setConnector] = useState<'injected' | 'walletconnect' | null>(null);

  const connectWallet = async (connectorType: 'injected' | 'walletconnect') => {
    try {
      if (connectorType === 'injected') {
        await activate(injected);
      } else if (connectorType === 'walletconnect') {
        await activate(walletconnect);
      }
      setConnector(connectorType);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  const disconnectWallet = () => {
    try {
      deactivate();
      setConnector(null);
    } catch (error) {
      console.error("Failed to disconnect wallet:", error);
    }
  };

  useEffect(() => {
    if (connector) {
      const provider = window.localStorage.getItem('provider');
      if (provider === 'injected') {
        activate(injected);
      } else if (provider === 'walletconnect') {
        activate(walletconnect);
      }
    }
  }, []);

  useEffect(() => {
    if (connector) {
      window.localStorage.setItem('provider', connector);
    } else {
      window.localStorage.removeItem('provider');
    }
  }, [connector]);

  return (
    <Web3Context.Provider value={{ account, active, library, chainId, error, connectWallet, disconnectWallet }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => {
  const context = useContext(Web3Context);
  if (!context) {
    throw new Error('useWeb3 must be used within a Web3ContextProvider');
  }
  return context;
};

export const Web3Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={(provider) => new ethers.providers.Web3Provider(provider)}>
      <Web3ContextProvider>{children}</Web3ContextProvider>
    </Web3ReactProvider>
  );
};