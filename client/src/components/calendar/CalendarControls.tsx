import RoundedIconButton from "../buttons/RoundedIconButton.tsx";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { getMonth, getYear } from "../../utils/utils.ts";
import { type Swiper } from "swiper";

export default function CalendarControls({
  swiper,
  currentDate,
}: {
  swiper: Swiper | null;
  currentDate: number;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="font-bold text-2xl">
        {getMonth(currentDate)} {getYear(currentDate)}
      </div>
      <div className="flex items-center gap-x-10">
        <RoundedIconButton
          Icon={VscChevronLeft}
          onClick={() => swiper && swiper.slidePrev()}
        />
        <RoundedIconButton
          Icon={VscChevronRight}
          onClick={() => swiper && swiper.slideNext()}
        />
      </div>
    </div>
  );
}
