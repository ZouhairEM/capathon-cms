import { Button } from 'primereact/button';

export default function HeroSection({ data }) {
  return (
    <div className="bg-capathon-secondary bg-[url(/asfalt-light.png)]">
      <img src="/shapes/left-shape.svg" className="left-hero-shape" alt="" />
      <img src="/shapes/right-shape.svg" className="right-hero-shape" alt="" />
      <div className="relative overflow-x-clip pt-25 pb-10 xl:overflow-x-visible">
        <div className="absolute top-0 right-[-1.5rem] flex h-full flex-col justify-between py-4 md:right-[-2.5rem]">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="border-capathon-primary h-12 w-12 rounded-2xl border-2 bg-none md:h-20 md:w-20"
            ></div>
          ))}
        </div>
        <div className="bg-capathon-surface m-auto flex w-3/4 flex-col p-5">
          <h1 className="font-heading mb-8 self-start text-4xl font-bold sm:text-6xl lg:text-8xl">
            {data.heroSectionTitleList[0]}
          </h1>
          <h1 className="font-heading mb-8 self-center text-3xl font-bold sm:text-5xl lg:text-6xl">
            {data.heroSectionTitleList[1]}
          </h1>
          <h1 className="font-heading self-end text-4xl font-bold sm:text-6xl lg:text-8xl">
            {data.heroSectionTitleList[2]}
          </h1>
        </div>

        <div className="mt-10 flex justify-center border-none">
          <Button
            className="bg-capathon-primary cut-corners-tr-bl flex h-18 w-48 items-center justify-center gap-2 text-xl text-black opacity-70"
            outlined
            icon="pi pi-angle-double-right mr-2"
          >
            {data.eventPeriod}
          </Button>
        </div>
      </div>
      <div className="bg-capathon-primary flex flex-row justify-between py-10 opacity-70">
        {data.highlights.map((items) => (
          <div
            key={items.fields.text}
            className="flex flex-1 flex-col items-center gap-5"
          >
            <img
              src={items.fields.icon.fields.file.url}
              className="h-9 w-9 sm:h-16 sm:w-16"
              alt={items.fields.icon.fields.title}
            />
            <p className="text-center text-sm">{items.fields.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
