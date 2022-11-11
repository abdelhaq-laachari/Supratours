// import { Fragment, useState } from "react";
// import {
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
// } from "@material-tailwind/react";
// import { IoIosArrowDropdown } from "react-icons/io";

// function Icon({ id, open }) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className={`${
//         id === open ? "rotate-180" : ""
//       } h-5 w-5 transition-transform`}
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       strokeWidth={2}
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//     </svg>
//   );
// }

// export default function Example() {
//   const [open, setOpen] = useState(0);

//   const handleOpen = (value) => {
//     setOpen(open === value ? 0 : value);
//   };

//   return (
//     <Fragment>
//       <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
//         <AccordionHeader onClick={() => handleOpen(1)}></AccordionHeader>
//         <AccordionBody>
//           We're not always in the position that we want to be at. We're
//           constantly growing. We're constantly making mistakes. We're constantly
//           trying to express ourselves and actualize our dreams.
//         </AccordionBody>
//       </Accordion>
//     </Fragment>
//   );
// }

import React from "react";
import Collapsible from "react-collapsible";
import { IoIosArrowDropdown } from "react-icons/io";

const Card = () => {
  return (
    <>
      <Collapsible trigger="Start here">
        <button className="bg-slate-300 p-1 rounded-t-md absolute bottom-0 right-0">
          <IoIosArrowDropdown size={20} />
        </button>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
      </Collapsible>
    </>
  );
};

export default Card;
