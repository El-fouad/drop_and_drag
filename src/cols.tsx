import { useMotionValue, Reorder, useDragControls } from "framer-motion";
import { useRaisedShadow } from "./use-raised-shadow";
import { LeadInfo } from "./App";

import { Item } from "./item";

interface Props {
  col: any;
  setItems: any;
  onDragg: any;
  items: LeadInfo[];
}

export const Cols = ({ col, setItems, items }: Props) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const onDrag = useDragControls();
  return (
    <Reorder.Item
      className="flex overflow-hidden flex-col rounded-md bg-[#F9F9F9]"
      as="div"
      value={col}
      id={col}
      dragListener={false}
      dragControls={onDrag}
      style={{ boxShadow, y }}
    >
      <div
        className={`rounded-t-md text-center font-bold text-lg py-2 mb-2`}
        style={{
          backgroundColor: `${col.color}50`,}}
        onPointerDown={(event) => onDrag.start(event)}
      >
        {col.name}
      </div>
      <div className="flex-1  min-w-[256px] no-scrollbar shrink-0 overflow-auto  px-2">
        <Reorder.Group axis="y" onReorder={setItems} values={items}>
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </Reorder.Group>
      </div>
    </Reorder.Item>
  );
};
