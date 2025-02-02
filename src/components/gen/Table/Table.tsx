import React, { useMemo } from "react";


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
        <div className="overflow-y-scroll h-fit">
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
                    {data.map((row) => (
                        <tr key={row.id} className="border-b border-zinc-200">
                            {colKey.map((column, colIndex) => (
                                <td key={colIndex} className="p-3 border-x">
                                    {row[column]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
