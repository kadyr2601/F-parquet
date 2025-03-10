import { useEffect } from 'react';

export default function Modal({ children, isOpen, onClose }) {
    // Close the modal when the user presses the Escape key.
    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === 'Escape') {
                onClose();
            }
        }
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.94)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
            }}
            onClick={onClose}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "transparent",
                    borderRadius: '8px',
                    position: 'relative',
                    gap: '40px',
                }}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                <button
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        color: 'red',
                        zIndex: 1,
                        cursor: 'pointer',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',

                    }}
                    onClick={onClose}
                >
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
}
