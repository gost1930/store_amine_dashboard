// import React from 'react'
import SecUi from "./SecUi"
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

const DragAndDrop = ({ sec }: { sec: any }) => {
  return (
    <div>
      <SortableContext items={sec} strategy={verticalListSortingStrategy}>

        {sec.map((s: any, index: any) => (
          <SecUi index={s.id} s={s} key={index} />
        ))}
      </SortableContext>
    </div>
  )
}

export default DragAndDrop;
