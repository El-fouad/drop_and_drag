import { useState } from "react";
import { Reorder, useDragControls } from "framer-motion";
import { Cols } from "./cols";

interface LeadInfo {
  id: number;
  name: string;
  team: String[];
  role: string;
  level: string;
  date: string;
  location: string;
  ads: string;
  color: string;
}
const initialTeamMembers: LeadInfo[] = [
  {
    id: 1,
    name: "Alice",
    team: ["adil", "omar"],
    role: "Developer",
    level: "High",
    date: "2023-10-01",
    location: "New York",
    ads: "Ad Campaign 1",
    color: "#FF0000", // red
  },
  {
    id: 2,
    name: "Bob",
    team: ["adil", "omar"],
    role: "Designer",
    level: "Medium",
    date: "2023-10-02",
    location: "San Francisco",
    ads: "Ad Campaign 2",
    color: "#0000FF", // blue
  },
  {
    id: 3,
    name: "Charlie",
    team: ["adil", "omar"],
    role: "Product Manager",
    level: "Low",
    date: "2023-10-03",
    location: "London",
    ads: "Ad Campaign 3",
    color: "#008000", // green
  },
  {
    id: 4,
    name: "Diana",
    team: ["adil", "omar"],
    role: "QA Engineer",
    level: "High",
    date: "2023-10-04",
    location: "Berlin",
    ads: "Ad Campaign 4",
    color: "#FFFF00", // yellow
  },
];
// Define a list of static colors
const colors = [
  "#FF0000", // Red
  "#00FF00", // Green
  "#0000FF", // Blue
  "#FFFF00", // Yellow
  "#FFA500", // Orange
  "#800080", // Purple
  "#FF6347", // Pink
  "#8B4513", // Brown
  "#4682B4", // SteelBlue
  "#4B0082", // Indigo
];

// ... (other imports)

const cards = [
  { id: 1, name: "stage 1", color: colors[0] },
  { id: 2, name: "stage 2", color: colors[1] },
  { id: 3, name: "stage 3", color: colors[2] },
  { id: 4, name: "stage 4", color: colors[3] },
  { id: 5, name: "stage 5", color: colors[4] },
  { id: 6, name: "stage 6", color: colors[5] },
  { id: 7, name: "stage 7", color: colors[6] },
];

// ... (rest of the file)
export default function App() {
  const [cols, setCols] = useState(cards.map(card => ({ ...card, items: initialTeamMembers })));
  const dragControls = useDragControls();

  const handleReorder = (colId: number, newItems: LeadInfo[]) => {
    setCols(cols.map(col => col.id === colId ? { ...col, items: newItems } : col));
  };

  return (
    <div className="h-screen w-screen overflow-hidden">
      <h1 className="text-center pb-4">Team Members</h1>
      <div className=" h-[86%] flex flex-row rounded-md  overflow-x-auto shrink-0 no-scrollbar">
        <Reorder.Group
          onReorder={setCols}
          values={cols}
          axis="x"
          as="div"
          className="flex px-4 h-full space-x-4 "
        >
          {cols.map((card) => (
            <Cols
              onDragg={dragControls}
              col={card}
              setItems={(newItems: LeadInfo[]) => handleReorder(card.id, newItems)}
              items={card.items}
              key={card.id}
            />
          ))}
        </Reorder.Group>
      </div>
    </div>
  );
}
export type { LeadInfo };
