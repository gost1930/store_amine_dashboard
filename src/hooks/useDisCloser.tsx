import { useState, useCallback } from 'react'

const useDisCloser = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [])
  const onClose =useCallback(() => {
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
