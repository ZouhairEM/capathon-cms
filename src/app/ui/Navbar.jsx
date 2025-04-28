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
      url: data.signupButton.url,
      target: "_blank",
    },
  ];

  return (
    <nav>
      <Menubar
      model={items}
      start={
        <img src={data.logo.url} alt="logo" className="w-32 md:w-48 lg:w-60" />
      }
      className="w-full flex justify-between bg-blue-700"
    />
    </nav>
   
  );
}
