'use client';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-normal">Connect Wallet</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <span className="sr-only">Close</span>
            ×
          </button>
        </div>
        <p className="text-center text-gray-600 mb-6">Please connect Web3 wallet</p>
        <div className="space-y-4">
          <button className="w-full px-6 py-3 border border-gray-200 rounded-full hover:border-black transition-colors flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/images/metamask.svg" alt="MetaMask" className="w-6 h-6" />
              <span>MetaMask</span>
            </div>
            <span>Coming soon...</span>
          </button>
          <button className="w-full px-6 py-3 border border-gray-200 rounded-full hover:border-black transition-colors flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/images/walletconnect.svg" alt="WalletConnect" className="w-6 h-6" />
              <span>WalletConnect</span>
            </div>
            <span>Coming soon...</span>
          </button>
        </div>
      </div>
    </div>
  );
}; 