import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is an OFT (Omnichain Fungible Token)?',
      answer: 'OFT is a token standard developed by LayerZero that allows for seamless transfer of tokens across multiple blockchain networks. It enables true interoperability and liquidity across different chains. OFTs are crucial for unlocking greater potential for volume and usage in omnichain DeFi. Learn more about why omnichain tokens matter <a href="https://medium.com/layerzero-ecosystem/why-omnichain-tokens-matter-04435722ffca" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">here</a>.',
    },
    {
      question: 'How does OmniLaunch simplify OFT deployment?',
      answer: 'OmniLaunch provides an intuitive interface and automated tools to deploy new OFT tokens or migrate existing ERC-20 tokens to the OFT standard across multiple blockchains simultaneously. We handle the complex backend processes, allowing you to focus on your project goals. With support for over 80 EVM and non-EVM chains, OmniLaunch leverages LayerZero\'s mesh network to enable token launches on multiple chains at once.',
    },
    {
      question: 'What chains are supported for OFT deployment?',
      answer: 'OmniLaunch supports OFT deployment on a wide range of chains, including Ethereum, Arbitrum, Optimism, Base, Polygon, BNB Chain, Avalanche, and many more. The exact number of supported chains is constantly growing, thanks to LayerZero\'s extensive network.',
    },
    {
      question: 'How does OmniLaunch handle token distribution?',
      answer: 'OmniLaunch offers two primary methods of token distribution: airdrops and fundraising. Airdrops distribute tokens to eligible participants based on their previous activities, while fundraising allows users to exchange tokens (like USDC) for the protocol\'s token on any of the chosen chains.',
    },
    {
      question: 'Is OmniLaunch secure?',
      answer: 'Yes, security is our top priority. Our smart contracts are built on LayerZero\'s battle-tested infrastructure and follow best practices in Web3 security. We implement rigorous security measures and conduct regular audits. However, we always recommend users to conduct their own research and exercise caution when interacting with any blockchain application.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="my-12 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700 pb-4">
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-semibold">{faq.question}</span>
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-400" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;