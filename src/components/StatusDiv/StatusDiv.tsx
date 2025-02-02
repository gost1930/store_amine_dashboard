// framer-motion
import { motion } from "framer-motion";
import React from "react";
interface Props {
    index: number;
    title: string;
    icon: React.ReactNode;
    value: string | number;
    className: string;
}
const StatusDiv: React.FC<Props> = ({ index, title, icon, value, className }) => {
    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className={`rounded-lg py-3 px-4 font-semibold inline-flex gap-2 items-center text-sm ${className}`}>
            <p className="ltr:first-letter:uppercase">{title}</p>
            <p> ( {value} )</p>
            {icon}
        </motion.div>
    )
}

export default StatusDiv;
