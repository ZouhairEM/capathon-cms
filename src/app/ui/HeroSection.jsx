import { Button } from 'primereact/button';

export default function HeroSection({ data }) {
  return (
    <div className="bg-black bg-[url(/asfalt-light.png)]">
      <div className='relative pt-20 pb-10'>
        <div className="absolute top-0 right-[-2.5rem] py-4 flex flex-col justify-between h-full">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-20 h-20 bg-none border-2 border-capathon-primary rounded-2xl"></div>
          ))}
        </div>
        <div className="m-auto flex w-3/4 flex-col bg-capathon-surface p-5">
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

        <div className="flex justify-center border-none mt-10">
          <Button
            className="flex items-center justify-center gap-2 bg-capathon-primary opacity-70 cut-corners-tr-bl text-black text-xl h-18 w-48"
            outlined
            icon="pi pi-angle-double-right mr-2"
          >
            {data.date}
          </Button>
        </div>
      </div>
      <div className="flex flex-row justify-between py-10 bg-capathon-primary opacity-70">
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
