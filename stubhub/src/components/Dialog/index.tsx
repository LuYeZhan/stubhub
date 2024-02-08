import { useState } from 'react';
import { DialogContent, DialogOverlay,  } from './wrappers';
import Button from '../Button';
import { DialogProps } from '../../types/dialog.types';
import { ButtonColors } from '../../constants/colors';

const Dialog = ({ errorMessage, onClose, username }:DialogProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleDialogClose = () => {
    setIsOpen(false);
    onClose();
  };

  let message; 
  if(username) {
    message = 'Username'
  } else {
    message = ' '
  }

  return (
    <>
      {isOpen && (
        <DialogOverlay>
          <DialogContent>
            <p>Error</p>
            <p>{message} <b>{username}</b> {errorMessage}</p>
            <Button bgColor={ButtonColors.grey} color={ButtonColors.black} onClick={handleDialogClose} label='Close'/>
          </DialogContent>
        </DialogOverlay>
      )}
    </>
  );
};

export default Dialog;
