import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Layers, Twitter, MessageCircle, Youtube, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 flex items-center justify-center md:justify-start">
            <Rocket size={32} className="mr-2 text-accent" />
            <div>
              <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">OmniLaunch</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Simplifying OFT deployments for teams and DAOs</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-center">
            <button className="bg-accent text-black px-4 py-2 rounded-full hover:bg-opacity-80 transition-colors">
              Buy OLA
            </button>
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:justify-end space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
              <Twitter size={24} />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
              <MessageCircle size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
              <Youtube size={24} />
            </a>
            <a href="https://docs.layerzero.network" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
              <BookOpen size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 OmniLaunch. All Rights Reserved.</p>
          <p className="mt-2">
            <Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link> | 
            <Link to="/terms-of-service" className="hover:text-accent transition-colors ml-2">Terms of Service</Link>
          </p>
        </div>
        <div className="mt-4 flex justify-center items-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">Powered by</span>
          <Layers size={24} className="ml-2 text-accent" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;