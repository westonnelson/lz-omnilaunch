import React from 'react';
import { Book, Code, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const KnowledgeCenter: React.FC = () => {
  const modules = [
    {
      title: 'lzAcademy',
      description: 'Learn about LayerZero and OFT concepts. Become an expert in all things Omnichain and learn at your pace from our Academy.',
      icon: <Book size={24} />,
      link: '/lz-academy',
    },
    {
      title: 'OFT Integration Guide',
      description: 'Step-by-step guide and Quickstart to integrate OFTs to your protocol',
      icon: <Code size={24} />,
      link: 'https://docs.layerzero.network/v2/developers/evm/oft/quickstart',
    },
    {
      title: 'LayerZero Ecosystem',
      description: 'Explore the rapidly growing LayerZero ecosystem and leading OFTs such as giants like wBTC, USDe, WIF, and hundreds more',
      icon: <Globe size={24} />,
      link: 'https://layerzero.network/ecosystem/dapps',
    },
  ];

  return (
    <section className="my-12 max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Knowledge Center</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, index) => (
          <div key={index} className="bg-gray-900 dark:bg-black p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="text-accent mr-3">{module.icon}</div>
              <h3 className="text-xl font-semibold">{module.title}</h3>
            </div>
            <p className="text-gray-400 mb-4">{module.description}</p>
            {module.title === 'lzAcademy' ? (
              <Link to={module.link} className="text-accent hover:underline inline-flex items-center">
                Learn more <span className="ml-1">→</span>
              </Link>
            ) : (
              <a
                href={module.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline inline-flex items-center"
              >
                Learn more <span className="ml-1">→</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default KnowledgeCenter;