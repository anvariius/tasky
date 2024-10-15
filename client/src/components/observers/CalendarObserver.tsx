import { useEffect, useRef } from "react";

export default function CalendarObserver({ observe }: { observe: Function }) {
  const observerElem = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(() => observe());
    if (observerElem.current) observer.observe(observerElem.current);
  }, [observerElem]);
  return <div className="min-h-full min-w-1" ref={observerElem}></div>;
}
