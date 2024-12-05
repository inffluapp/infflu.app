'use client'

import { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

export default function Accordion({
  title, text
}: {
  title: string;
  text: string;
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="shadow rounded-lg w-full">
      <button type="button" className="border-b p-2 w-full flex justify-between items-center" onClick={() => {
        setOpen(!open)
      }}>
        <p className="text-left">{title}</p>
        <span>
          {open ? (<LuChevronUp />) :(<LuChevronDown />)}
        </span>
      </button>
      <div className={`p-2 ${open ? '' : 'hidden'}`}>
        {text}
      </div>
    </div>
  );
}
