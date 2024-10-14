import React from 'react';
import OFTMigrationForm from '../components/OFTMigrationForm';
import KnowledgeCenter from '../components/KnowledgeCenter';
import FAQ from '../components/FAQ';
import { Layers } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to OmniLaunch</h1>
        <p className="text-xl text-gray-400 mb-2">Simplifying OFT deployments for teams and DAOs</p>
        <div className="flex justify-center items-center">
          <span className="text-sm text-gray-500">Powered by</span>
          <Layers size={24} className="ml-2 text-accent" />
        </div>
      </section>
      
      <div className="border-t border-accent my-12"></div>
      
      <OFTMigrationForm />
      
      <div className="border-t border-accent my-12"></div>
      
      <KnowledgeCenter />
      
      <div className="border-t border-accent my-12"></div>
      
      <FAQ />
    </div>
  );
};

export default Home;