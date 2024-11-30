'use client';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WalletModal({ isOpen, onClose }: WalletModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-3xl p-8 w-full max-w-md m-4">
        <div className="text-center">
          <h3 className="text-2xl mb-4">Connect Wallet</h3>
          <p className="text-gray-600 mb-6">请链接 Web3 钱包</p>
          <button 
            onClick={onClose}
            className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
} 