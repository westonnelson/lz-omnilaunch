import React, { useState } from 'react';
import { Info } from 'lucide-react';
import { useWeb3 } from '../contexts/Web3Context';
import { deployOFT } from '../utils/contracts';
import { createDeployment } from '../utils/api';
import { ethers } from 'ethers';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

const supportedNetworks = [
  { id: 1, name: 'Ethereum' },
  { id: 8453, name: 'Base' },
  { id: 42161, name: 'Arbitrum' },
  { id: 10, name: 'Optimism' },
  { id: 43114, name: 'Avalanche' },
  { id: 137, name: 'Polygon' },
  { id: 534352, name: 'Scroll' },
  { id: 59144, name: 'Linea' },
  { id: 5000, name: 'Mantle' },
  { id: 324, name: 'zkSync Era' },
];

const OFTMigrationForm: React.FC = () => {
  const { account, library, chainId } = useWeb3();
  const [formData, setFormData] = useState({
    tokenName: '',
    tokenSymbol: '',
    totalSupply: '',
    tokenDecimals: '',
    ownerAddress: '',
    deploymentType: 'new',
    targetChains: [],
    tokenIcon: '',
    tokenDescription: '',
    websiteLink: '',
    socialLinks: '',
    complianceAcknowledgment: false,
  });
  const [deploymentStatus, setDeploymentStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleChainSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      targetChains: checked
        ? [...prevData.targetChains, parseInt(value)]
        : prevData.targetChains.filter(chain => chain !== parseInt(value)),
    }));
  };

  const isFormValid = () => {
    return (
      formData.tokenName &&
      formData.tokenSymbol &&
      formData.totalSupply &&
      formData.tokenDecimals &&
      formData.ownerAddress &&
      formData.targetChains.length > 0 &&
      formData.complianceAcknowledgment
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!account || !library) {
      setError('Please connect your wallet first.');
      return;
    }

    if (!supportedNetworks.some(network => network.id === chainId)) {
      setError('Please switch to a supported network.');
      return;
    }

    if (!isFormValid()) {
      setError('Please fill in all required fields and acknowledge compliance.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setDeploymentStatus(null);

    try {
      const signer = library.getSigner();
      const contract = await deployOFT(
        signer,
        formData.tokenName,
        formData.tokenSymbol,
        ethers.utils.parseUnits(formData.totalSupply, formData.tokenDecimals),
        parseInt(formData.tokenDecimals),
        formData.ownerAddress
      );

      const deploymentRecord = await createDeployment(account, {
        ...formData,
        contractAddress: contract.address,
        status: 'completed',
      });

      setDeploymentStatus(`OFT token deployed successfully at address: ${contract.address}`);
    } catch (error) {
      console.error('Deployment failed:', error);
      setError('Deployment failed. Please check the console for more information.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 dark:bg-black shadow-md rounded-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">OFT Token Launcher</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="tokenName" className="block mb-1">Token Name *</label>
            <input
              type="text"
              id="tokenName"
              name="tokenName"
              value={formData.tokenName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="tokenSymbol" className="block mb-1">Token Symbol *</label>
            <input
              type="text"
              id="tokenSymbol"
              name="tokenSymbol"
              value={formData.tokenSymbol}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-md"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="totalSupply" className="block mb-1">Total Supply *</label>
            <input
              type="number"
              id="totalSupply"
              name="totalSupply"
              value={formData.totalSupply}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="tokenDecimals" className="block mb-1">Token Decimals *</label>
            <input
              type="number"
              id="tokenDecimals"
              name="tokenDecimals"
              value={formData.tokenDecimals}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-md"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="ownerAddress" className="block mb-1">Owner/Deployer Address *</label>
          <input
            type="text"
            id="ownerAddress"
            name="ownerAddress"
            value={formData.ownerAddress}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-gray-800 text-white rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Deployment Type *</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="deploymentType"
                value="new"
                checked={formData.deploymentType === 'new'}
                onChange={handleInputChange}
                className="form-radio text-accent"
                required
              />
              <span className="ml-2">New OFT Token</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="deploymentType"
                value="migration"
                checked={formData.deploymentType === 'migration'}
                onChange={handleInputChange}
                className="form-radio text-accent"
                required
              />
              <span className="ml-2">Existing Token OFT Migration</span>
            </label>
          </div>
        </div>
        <div>
          <label className="block mb-1">Target Chains *</label>
          <div className="grid grid-cols-2 gap-2">
            {supportedNetworks.map(network => (
              <label key={network.id} className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="targetChains"
                  value={network.id}
                  checked={formData.targetChains.includes(network.id)}
                  onChange={handleChainSelection}
                  className="form-checkbox text-accent"
                />
                <span className="ml-2">{network.name}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="tokenIcon" className="block mb-1">Token Icon URL (optional)</label>
          <input
            type="url"
            id="tokenIcon"
            name="tokenIcon"
            value={formData.tokenIcon}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-gray-800 text-white rounded-md"
          />
        </div>
        <div>
          <label htmlFor="tokenDescription" className="block mb-1">Token Description (optional)</label>
          <textarea
            id="tokenDescription"
            name="tokenDescription"
            value={formData.tokenDescription}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-gray-800 text-white rounded-md"
            rows={3}
          ></textarea>
        </div>
        <div>
          <label htmlFor="websiteLink" className="block mb-1">Website Link (optional)</label>
          <input
            type="url"
            id="websiteLink"
            name="websiteLink"
            value={formData.websiteLink}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-gray-800 text-white rounded-md"
          />
        </div>
        <div>
          <label htmlFor="socialLinks" className="block mb-1">Social Links (optional, comma-separated)</label>
          <input
            type="text"
            id="socialLinks"
            name="socialLinks"
            value={formData.socialLinks}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-gray-800 text-white rounded-md"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="complianceAcknowledgment"
            name="complianceAcknowledgment"
            checked={formData.complianceAcknowledgment}
            onChange={handleInputChange}
            className="form-checkbox text-accent"
            required
          />
          <label htmlFor="complianceAcknowledgment" className="ml-2">
            I acknowledge that this project complies with all relevant laws and regulations *
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-accent text-black py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!account || isLoading || !isFormValid()}
        >
          {isLoading ? <LoadingSpinner /> : 'Deploy OFT Token'}
        </button>
      </form>
      {error && <ErrorMessage message={error} />}
      {deploymentStatus && (
        <div className="mt-4 p-4 bg-green-100 dark:bg-green-700 rounded-md">
          <p>{deploymentStatus}</p>
        </div>
      )}
    </div>
  );
};

export default OFTMigrationForm;