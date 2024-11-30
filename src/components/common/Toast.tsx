'use client';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export function Toast({ message, isVisible, onClose }: ToastProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black text-white px-6 py-3 rounded-full shadow-lg text-base animate-fadeIn">
        {message}
      </div>
    </div>
  );
} 