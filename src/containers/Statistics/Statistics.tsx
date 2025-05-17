// import React from 'react'
// import LineChart from "./LineChart"
import { LineChart, PieChart } from "./Chart"
import { lineData, lineData2, lineOptions, pieData, pieData2, pieOptions, cardData } from "../../utils/StaticData/ChartData";
import { PageTile, Table } from "../../components";
import { columns, data } from "../../utils/StaticData/staticData";
const Statistics = () => {
  return (
    <section className="w-full h-fit">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid grid-cols-2  gap-4">
          {cardData.map((c, index) => (
            <div key={index} className="rounded-xl border flex flex-col justify-center items-center bg-slate-100">
              <h1 className="text-xl text-slate-900 font-semibold">{c.title}</h1>
              <p>45</p>
            </div>
          ))}
        </div>
        <LineChart data={lineData} option={lineOptions} />
        {/* <LineChart data={lineData2} option={lineOptions} /> */}
      </div>
      {/* <BarChart /> */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <PieChart data={pieData2} option={pieOptions} />
        <PieChart data={pieData} option={pieOptions} />
      </div>
      {/* <DoughnutChart /> */}
      {/* table */}
      <PageTile title="أكثر 10 منتجات طلبا (كل الوقت)" />
      <Table data={data} columns={columns} />
    </section>
  )
}

export default Statistics;
