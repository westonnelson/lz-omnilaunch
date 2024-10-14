import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About OmniLaunch</h1>
      <p className="mb-4">
        OmniLaunch is a cutting-edge Web3 full-stack application designed to simplify the process of deploying or migrating to the OFT (Omnichain Fungible Token) standard by LayerZero. Our mission is to empower users, protocols, and DAOs with the tools they need to seamlessly transition to an Omnichain structure.
      </p>
      <p className="mb-4">
        With OmniLaunch, you can:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Deploy new OFT tokens across multiple chains</li>
        <li>Migrate existing tokens to the OFT standard</li>
        <li>Manage and monitor your Omnichain deployments</li>
        <li>Access educational resources about LayerZero and OFT</li>
      </ul>
      <p>
        Our team of Web3 experts and blockchain enthusiasts is dedicated to providing a user-friendly, secure, and efficient platform for all your Omnichain needs. Join us in shaping the future of cross-chain interoperability!
      </p>
    </div>
  );
};

export default About;