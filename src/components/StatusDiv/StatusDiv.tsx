// framer-motion
import { motion } from "framer-motion";
import React from "react";
interface Props {
    index: number;
    title: string;
    icon: React.ReactNode;
    value: string | number;
    color: string;
}
const StatusDiv: React.FC<Props> = ({ index, title, icon, value, color }) => {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className={`rounded-lg py-3 px-4 font-semibold inline-flex gap-2 items-center text-sm  bg-${color}-100 text-${color}-500 border-2 border-${color}-200`}>
            <p className="ltr:first-letter:uppercase">{title}</p>
            <p> ( {value} )</p>
            {icon}
        </motion.div>
    )
}

export default StatusDiv;
