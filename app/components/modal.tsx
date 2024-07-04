// Simple Modal Component
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string; 
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
    if (!isOpen) return null;

    return (
        <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
            <div onClick={(e) => e.stopPropagation()} className={`text-black relative bg-white p-5 rounded-lg shadow-lg z-50 ${className}`}>
                <button onClick={onClose} className="absolute top-2.5 right-2.5 text-3xl bg-transparent border-none cursor-pointer">
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal