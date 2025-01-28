import { useState } from 'react'
// dnd-kit
import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensors, useSensor } from "@dnd-kit/core";
// drag and drop
import DragAndDrop from './DragAndDrop';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';

const Sections = () => {
  const [sec, setSec] = useState([
    { id: 1, title: 'as', k: 1 },
    { id: 2, title: 'ds', k: 2 },
    { id: 3, title: 'as', k: 3 },
  ])
  const getSecPosition = (id: number) => sec.findIndex(sect => sect.id === id)
  const handleDrageEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setSec((prevSec: any) => {
      const orgPos = getSecPosition(active.id);
      const newPos = getSecPosition(over.id);

      const reordered = arrayMove(prevSec, orgPos, newPos);

      return reordered.map((section: any, index: number) => ({
        ...section,
        k: index + 1,
      }));
    });
  };


  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <section className='w-full h-fit m-3'>
      <DndContext sensors={sensors} onDragEnd={handleDrageEnd} collisionDetection={closestCorners}>
        <DragAndDrop sec={sec} />
      </DndContext>
    </section>
  )
}

export default Sections;
