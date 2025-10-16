'use client';

export default function CtaSection({ data }) {
  return (
    <section className="bg-capathon-primary bg-[url(/asfalt-dark.png)]">
      <h1 className="section-title-black font-heading mx-10 pt-20 pb-10">
        {data.title}
      </h1>
      <div className="flex flex-col items-end lg:ml-10">
        <div className="relative mt-10 mb-8 flex w-full flex-row items-center">
          <div className="relative flex-1">
            <div className="absolute top-0 left-0 hidden h-[705px] w-1 bg-black lg:block"></div>
            <div className="h-1 w-full bg-black"></div>
          </div>
          <div className="cut-corners-tl-br flex h-[118px] w-[80%] items-center justify-start bg-black/70 text-white xl:w-[1018px]">
            <img
              className="ml-5"
              src={data.ctaLines[0].fields.icon.fields.file.url}
              alt={data.ctaLines[0].fields.icon.fields.title}
            />
            <p className="mx-5">{data.ctaLines[0].fields.text}</p>
          </div>
        </div>
        <div className="relative mb-8 flex w-full flex-row items-center lg:w-[calc(100%-64px)]">
          <div className="relative flex-1">
            <div className="absolute top-0 left-0 hidden h-[555px] w-1 bg-black lg:block"></div>
            <div className="h-1 w-full bg-black"></div>
          </div>
          <div className="cut-corners-tl-br flex h-[118px] w-[70%] items-center justify-start bg-black/70 text-white xl:w-[754px]">
            <img
              className="ml-5"
              src={data.ctaLines[2].fields.icon.fields.file.url}
              alt={data.ctaLines[2].fields.icon.fields.title}
            />
            <p className="mx-5">{data.ctaLines[1].fields.text}</p>
          </div>
        </div>
        <div className="relative w-full lg:w-[calc(100%-128px)]">
          <div className="flex flex-row items-center">
            <div className="relative flex-1">
              <div className="absolute top-0 left-0 hidden h-[405px] w-1 bg-black lg:block"></div>
              <div className="h-1 w-full bg-black"></div>
            </div>
            <div className="cut-corners-tl-br flex h-[118px] w-[60%] items-center justify-start bg-black/70 text-white xl:w-[492px]">
              <img
                className="ml-5"
                src={data.ctaLines[2].fields.icon.fields.file.url}
                alt={data.ctaLines[2].fields.icon.fields.title}
              />
              <p className="mx-5">{data.ctaLines[2].fields.text}</p>
            </div>
          </div>
          <div className="bg-capathon-surface my-8 h-70 w-[70%] content-center place-self-center border-2 px-2 text-center lg:place-self-end xl:w-[492px]">
            <div>
              <h1 className="font-heading text-5xl">
                {data.ctaBox.fields.ctaLine}
              </h1>
              <p className="mt-4 underline">
                <a href={`mailto:${data.ctaBox.fields.email}`}>
                  {data.ctaBox.fields.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
