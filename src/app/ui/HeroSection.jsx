import { Button } from 'primereact/button';

export default function HeroSection({ data }) {
  return (
    <div className="bg-blue-100 pt-20">
      <div className="m-auto flex w-3/4 flex-col border border-blue-800 p-5">
        <p className="mb-8 self-start text-4xl font-bold sm:text-6xl lg:text-8xl">
          {data.titles.title1}
        </p>
        <p className="mb-8 self-center text-3xl font-bold sm:text-5xl lg:text-6xl">
          {data.titles.title2}
        </p>
        <p className="self-end text-4xl font-bold sm:text-6xl lg:text-8xl">
          {data.titles.title3}
        </p>
      </div>

      <div className="m-10 flex justify-center">
        <Button
          className="border-blue-800 text-black"
          outlined
          icon="pi pi-angle-double-right mr-2"
        >
          {data.date}
        </Button>
      </div>

      <div className="flex flex-row justify-between border border-blue-800 py-10">
        {data.highlights.map((items) => (
          <div
            key={items.text}
            className="flex flex-1 flex-col items-center gap-5"
          >
            <img src={items.icon} className="h-9 w-9 sm:h-16 sm:w-16" />
            <p className="text-center text-sm">{items.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
