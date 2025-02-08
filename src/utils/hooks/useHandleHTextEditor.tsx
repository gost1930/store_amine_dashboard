/*
* @description: useHandleHTextEditor
* this is a custom hook that is used to handle the text editor
* @returns {content , handleChange , clear}
* @example
* const {content , handleChange , clear} = useHandleHTextEditor()
*/

import { useState } from 'react'

const useHandleHTextEditor = () => {
  const [content, setContent] = useState("");

  const handleChange = (value: string) => {
    setContent(value);
  };
  const clear = () => setContent("")
  return {
    content,
    handleChange,
    clear
  }
}

export default useHandleHTextEditor;
