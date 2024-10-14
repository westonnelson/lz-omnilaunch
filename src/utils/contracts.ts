import { ethers } from 'ethers';

const OFT_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint256)",
  "function transfer(address to, uint amount) returns (bool)",
  "function mint(address to, uint256 amount) returns (bool)",
  "event Transfer(address indexed from, address indexed to, uint amount)"
];

const OFT_BYTECODE = "0x60806040..."; // This should be the actual bytecode of your OFT contract

export const deployOFT = async (
  signer: ethers.Signer,
  name: string,
  symbol: string,
  initialSupply: ethers.BigNumber,
  decimals: number,
  owner: string
) => {
  const factory = new ethers.ContractFactory(OFT_ABI, OFT_BYTECODE, signer);
  const contract = await factory.deploy(name, symbol, initialSupply, decimals, owner);
  await contract.deployed();
  return contract;
};

export const getOFTContract = (address: string, signer: ethers.Signer) => {
  return new ethers.Contract(address, OFT_ABI, signer);
};