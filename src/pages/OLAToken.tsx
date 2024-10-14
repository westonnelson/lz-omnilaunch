import React from 'react';

const OLAToken: React.FC = () => {
  const tokenomics = [
    { name: 'Airdrop', total: 33, unlocked: 33, locked: 0, color: '#FF6384' },
    { name: 'Treasury', total: 25, unlocked: 0.08, locked: 24.92, color: '#36A2EB' },
    { name: 'Hyperliquidity', total: 20, unlocked: 20, locked: 0, color: '#FFCE56' },
    { name: 'Team', total: 15, unlocked: 0, locked: 15, color: '#4BC0C0' },
    { name: 'Pre-Sale', total: 5, unlocked: 5, locked: 0, color: '#9966FF' },
    { name: 'Angels', total: 1.5, unlocked: 0, locked: 1.5, color: '#FF9F40' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">OLA Token</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tokenomics</h2>
        <p className="mb-4">
          The OLA token is the native utility token of the OmniLaunch ecosystem. It plays a crucial role in governance, staking, and accessing premium features of our platform.
        </p>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Allocation</h3>
          <p className="mb-2">Max. Supply: 1,000,000,000 OLA</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-800">
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Total</th>
                  <th className="p-2 border">Unlocked</th>
                  <th className="p-2 border">Locked</th>
                </tr>
              </thead>
              <tbody>
                {tokenomics.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}>
                    <td className="p-2 border">{item.name}</td>
                    <td className="p-2 border">{item.total}%</td>
                    <td className="p-2 border">{item.unlocked}%</td>
                    <td className="p-2 border">{item.locked}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Token Distribution</h3>
          <div className="w-full max-w-md mx-auto">
            <div className="flex flex-wrap justify-center">
              {tokenomics.map((item, index) => (
                <div key={index} className="w-1/2 p-2">
                  <div className="flex items-center">
                    <div className="w-4 h-4 mr-2" style={{ backgroundColor: item.color }}></div>
                    <span>{item.name} ({item.total}%)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Governance</h2>
        <p>
          OLA token holders have the power to participate in the decision-making process of the OmniLaunch platform. This includes voting on protocol upgrades, fee structures, and new feature implementations.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Value Accrual</h2>
        <p className="mb-4">
          The OLA token is designed to accrue value through various mechanisms:
        </p>
        <ul className="list-disc list-inside">
          <li>Fee sharing: A portion of the platform fees is distributed to OLA stakers</li>
          <li>Buyback and burn: Regular token buybacks and burns to reduce circulating supply</li>
          <li>Exclusive access: Holding OLA tokens grants access to premium features and services</li>
        </ul>
      </section>
    </div>
  );
};

export default OLAToken;