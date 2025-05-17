/*

    this component for delete any thing
    just pass the title and the id of the thing

*/

// import the modal component
import Modal from "./Modal";
import Button from '../Button';

const ModalDelete = ({ title, isOpen, onClose , id }: { title: string, isOpen: boolean, onClose: () => void , id:any }) => {

    return (
        <Modal isOpen={isOpen} onClose={onClose} insideClick={true} btnClose={true}>
            <h1>{title} {id}</h1>
            <Button text='حذف' className='mt-10 w-fit bg-red1 text-xl' onClick={onClose} />
        </Modal>
    )
}

export default ModalDelete;