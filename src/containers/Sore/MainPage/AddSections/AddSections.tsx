import { PageTile, Modal } from "../../../../components";
// custom hooks
// framer mation
import { motion } from "framer-motion";
// icons
import { IoText } from "react-icons/io5";

const AddSections = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} insideClick={true} btnClose={true}>
            <PageTile title="قسم جديد" />

            {/* miahiodjad */}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-10">
                {
                    Array.from({ length: 9 }).map((i, index) => (
                        <motion.div initial={{ x: (index % 2 === 0 ? 200 : -200), opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 , delay: 0.2 }} key={index}
                            className="shadow-lg border border-base-200 p-4 rounded-xl bg-white flex flex-col items-center space-y-3 cursor-pointer hover:bg-stone-100 duration-200">
                            <IoText className="text-6xl" />
                            <span className="text-black text-center">العنوان والعنوان الفرعي</span>
                        </motion.div>
                    ))
                }
            </div>
        </Modal>
    )
}

export default AddSections
