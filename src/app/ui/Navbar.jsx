import React from "react";
import { Menubar } from "primereact/menubar";
import SignupButton from "./SignupButton";

export default function Navbar({ data }) {
  const items = [
    {
      label: data.dropdownMenu.title,
      items: data.dropdownMenu.items.map((item) => ({
        label: item.title,
        url: "#", // url: "#past-events" (Remember to add ID to the section)
      })),
    },
  ];

  const start = (
    <img src="https://placehold.co/300x60" alt="logo" className="" />
  );
  const end = (
    <div className="flex align-items-center gap-2">
      <Menubar model={items} />
      <SignupButton className="bg-white text-blue" />
    </div>
  );

  return (
    <nav>
      <Menubar start={start} end={end} className="bg-blue-500" />
    </nav>
  );
}
