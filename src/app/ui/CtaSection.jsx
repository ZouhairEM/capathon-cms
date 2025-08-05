'use client';

export default function CtaSection({ data }) {
    return (
        <section className="bg-capathon-primary">
            <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl ml-10 mt-10">{data.title}</h1>
            <div className="flex flex-col items-end lg:ml-10">
                <div className="flex flex-row items-center mt-20 mb-8 w-full relative">
                    <div className="relative flex-1">
                        <div className="w-1 h-[705px] bg-black absolute left-0 top-0 hidden lg:block"></div>
                        <div className="h-1 bg-black w-full"></div>
                    </div>
                    <div className="cut-corners-tl-br h-[118px] w-[80%] xl:w-[1018px]">
                        <img className="ml-5" src={data.boxes[0].icon} />
                        <p className="mx-5">{data.boxes[0].text}</p>
                    </div>
                </div>
                <div className="flex flex-row items-center mb-8 w-full lg:w-[calc(100%-64px)] relative">
                    <div className="relative flex-1">
                        <div className="w-1 h-[555px] bg-black absolute left-0 top-0 hidden lg:block"></div>
                        <div className="h-1 bg-black w-full"></div>
                    </div>
                    <div className="cut-corners-tl-br h-[118px] w-[70%] xl:w-[754px]">
                        <img className="ml-5" src={data.boxes[1].icon} />
                        <p className="mx-5">{data.boxes[1].text}</p>
                    </div>
                </div>
                <div className="w-full lg:w-[calc(100%-128px)] relative">
                    <div className="flex flex-row items-center">
                        <div className="relative flex-1">
                            <div className="w-1 h-[405px] bg-black absolute left-0 top-0 hidden lg:block"></div>
                            <div className="h-1 bg-black w-full"></div>
                        </div>
                        <div className="cut-corners-tl-br h-[118px] w-[60%] xl:w-[492px]">
                            <img className="ml-5" src={data.boxes[2].icon} />
                            <p className="mx-5">{data.boxes[2].text}</p>
                        </div>
                    </div>
                    <div className="bg-capathon-surface my-8 w-[70%] xl:w-[492px] h-70 border-2 place-self-center lg:place-self-end content-center text-center px-2">
                        <div>
                            <h1 className="text-4xl">{data.connectBox.ctaLine}</h1>
                            <p className="mt-4">
                                <a href={`mailto:${data.connectBox.email}`}>{data.connectBox.email}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
