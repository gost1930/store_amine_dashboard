import { Modal } from "../../components"

const AddCategory = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} insideClick={true} btnClose={true}>
            <h1>add category</h1>
        </Modal>
    )
}

export default AddCategory;
