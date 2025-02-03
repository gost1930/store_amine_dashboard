/* 
* @description: useDisCloser
* this is a custom hook that is used to handle the modal
* @returns {isOpen , setIsOpen , openModal , onClose}
* @exemple
* const {isOpen , setIsOpen , openModal , onClose} = useDisCloser()
*/

import { useState, useCallback } from 'react'

const useDisCloser = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [])
  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [])
  return {
    // state
    isOpen,
    setIsOpen,
    // func
    openModal,
    onClose,
  }
}

export default useDisCloser;
