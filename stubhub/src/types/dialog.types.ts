export interface DialogProps {
  isOpen: boolean;
  onClose: () => void; 
  errorMessage: string; 
  username: string;
}