import { useMotionValue, Reorder } from "framer-motion";
import { useRaisedShadow } from "./use-raised-shadow";
import { LeadInfo } from "./App";
import { GrGroup } from "react-icons/gr";
import { RiFlag2Line } from "react-icons/ri";
import { IoIosCalendar } from "react-icons/io";
import { FcHome } from "react-icons/fc";
import { TbNetwork } from "react-icons/tb";

interface Props {
  item: LeadInfo;
}

export const Item = ({ item }: Props) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  return (
    <Reorder.Item as="div" value={item} id={item} style={{ boxShadow, y }}>
      <div
        className="flex bg-[#F9F9F9] text-md font-light mb-2 p-4 text-black flex-col items-start space-y-2 "
        style={{
          border: "2px solid #E8EBF0",

          borderRadius: "8px",
        }}
      >
        <span className="flex flex-row items-center">
          <div className=" rounded-full bg-black h-[24px] w-[24px] mr-2"></div>
          {item.name}
        </span>
        <span className="flex flex-row items-center space-x-2">
          <GrGroup
            color="#62728E"
            size={20}
            className=" font-bold text-2xl mr-2"
          />{" "}
          {item.team.join(", ")}
        </span>
        <span className="flex flex-row items-center space-x-2">
          <RiFlag2Line
            color="#FF9C40"
            size={20}
            className=" font-bold text-2xl mr-2"
          />{" "}
          {item.level}
        </span>
        <span className="flex flex-row items-center space-x-2">
          <IoIosCalendar size={20} className=" font-bold text-2xl mr-2" />{" "}
          {item.date}
        </span>

        <span className="flex flex-row items-center space-x-2">
          <FcHome size={20} className=" font-bold text-2xl mr-2" />{" "}
          {item.location}
        </span>
        <span className="flex flex-row items-center space-x-2">
          <TbNetwork size={20} className=" font-bold text-2xl mr-2" />{" "}
          {item.ads}
        </span>
      </div>
    </Reorder.Item>
  );
};
