import { create } from 'zustand';

interface WaitlistState {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const useWaitlistStore = create<WaitlistState>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({ isOpen }),
}));

export default useWaitlistStore;