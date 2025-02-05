import React, { useMemo } from "react";
// framer motion
import { motion } from "framer-motion";

type Row = {
    id: number | string;
    [key: string | number]: any;
};

type TableProps = {
    columns: {};
    data: Row[];
};


const Table: React.FC<TableProps> = ({ columns, data }) => {

    const renderCol = useMemo(() => Object.values(columns), [columns]);
    const colKey = Object.keys(columns)

    return (
        <div className="w-full h-fit">
            <table className="min-w-full bg-white border border-zinc-200 rounded-lg">
                <thead className="bg-gray-100 border-b border-zinc-200">
                    <tr>
                        {renderCol.map((column: any, index) => (
                            <th key={index} className="p-3 text-start text-zinc-500">
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row , index) => (
                        <motion.tr initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 * index , duration: 0.2 }} key={row.id} className="border-b border-zinc-200">
                            {colKey.map((column, colIndex) => (
                                <td key={colIndex} className="p-3">
                                    {row[column]}
                                </td>
                            ))}
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
