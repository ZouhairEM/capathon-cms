import { Button } from "primereact/button";

export default function HeroSection({ data }) {
  return (
    <div className="bg-blue-100 pt-20">
      <div className="flex flex-col border border-blue-800 w-3/4 m-auto p-5">
        <p className="self-start text-4xl sm:text-6xl lg:text-8xl mb-8 font-bold">
          {data.titles.title1}
        </p>
        <p className="self-center text-3xl sm:text-5xl lg:text-6xl mb-8 font-bold">
          {data.titles.title2}
        </p>
        <p className="self-end text-4xl sm:text-6xl lg:text-8xl font-bold">
          {data.titles.title3}
        </p>
      </div>

      <div className="flex justify-center m-10">
        <Button
          className="border-blue-800 text-black"
          outlined
          icon="pi pi-angle-double-right mr-2"
        >
          {data.date}
        </Button>
      </div>

      <div className="border border-blue-800 flex flex-row justify-between py-10">
        {data.highlights.map((items) => (
          <div
            key={items.text}
            className="flex-1 flex flex-col items-center gap-5"
          >
            <img
              src={items.icon}
              className="w-9 h-9 sm:w-16 sm:h-16"
            />
            <p className="text-center text-sm">{items.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
