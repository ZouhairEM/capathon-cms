import React from "react";
import { Menubar } from "primereact/menubar";

export default function Navbar({ data }) {
  const items = [
    {
      label: data.dropdownMenu.title,
      items: data.dropdownMenu.items.map((item) => ({
        label: item.title,
        url: "#", // url: "#past-events" (Remember to add ID to the section)
      })),
    },
    {
      label: "Sign Up",
      url: "https://react.dev",
      target: "_blank",
    },
  ];

  const start = (
    <img
      src="https://placehold.co/300x60"
      alt="logo"
      className="w-32 md:w-48 lg:w-60"
    />
  );

  return (
    <nav className="bg-blue-700 flex justify-between items-center p-4">
      <div className="flex justify-between items-center w-full">
        {start}
        <Menubar model={items} className="" />
      </div>
    </nav>
  );
}
