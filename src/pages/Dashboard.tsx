import React, { useState, useEffect } from 'react';
import { useWeb3 } from '../contexts/Web3Context';

interface Deployment {
  id: string;
  tokenName: string;
  tokenSymbol: string;
  deploymentType: string;
  targetChains: string[];
  status: 'pending' | 'completed' | 'failed';
}

const Dashboard: React.FC = () => {
  const { account } = useWeb3();
  const [deployments, setDeployments] = useState<Deployment[]>([]);

  useEffect(() => {
    if (account) {
      // Fetch user's deployments from the backend
      // This is a mock implementation
      const mockDeployments: Deployment[] = [
        {
          id: '1',
          tokenName: 'Mock Token',
          tokenSymbol: 'MTK',
          deploymentType: 'new',
          targetChains: ['Ethereum', 'Binance Smart Chain'],
          status: 'completed',
        },
        {
          id: '2',
          tokenName: 'Test Token',
          tokenSymbol: 'TST',
          deploymentType: 'migration',
          targetChains: ['Polygon', 'Avalanche'],
          status: 'pending',
        },
      ];
      setDeployments(mockDeployments);
    }
  }, [account]);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
      {account ? (
        <>
          <p className="mb-4">Connected Address: {account}</p>
          <h2 className="text-2xl font-semibold mb-4">Your Deployments</h2>
          {deployments.length > 0 ? (
            <div className="space-y-4">
              {deployments.map((deployment) => (
                <div key={deployment.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{deployment.tokenName} ({deployment.tokenSymbol})</h3>
                  <p>Deployment Type: {deployment.deploymentType}</p>
                  <p>Target Chains: {deployment.targetChains.join(', ')}</p>
                  <p>Status: <span className={`font-semibold ${deployment.status === 'completed' ? 'text-green-500' : deployment.status === 'pending' ? 'text-yellow-500' : 'text-red-500'}`}>{deployment.status}</span></p>
                </div>
              ))}
            </div>
          ) : (
            <p>No deployments found.</p>
          )}
        </>
      ) : (
        <p>Please connect your wallet to view your dashboard.</p>
      )}
    </div>
  );
};

export default Dashboard;