'use client';

export default function CtaSection({ data }) {
    return (
        <section className="bg-capathon-primary h-256 mb-100">
            <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl ml-10 mt-10">Show me what you have got</h1>
            <div className="flex flex-col items-end lg:ml-10">
                <div className="flex flex-row items-center mt-20 mb-8 w-full relative">
                    <div className="relative flex-1">
                        <div className="w-1 h-[807px] bg-black absolute left-0 top-0 hidden lg:block"></div>
                        <div className="h-1 bg-black w-full"></div>
                    </div>
                    <div className="dingetje w-[80%] xl:w-[1016px] flex items-center opacity-70">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDKaiZ2jc68FUsiaHg32uI1RAUHw673w4F-w&s" />
                        <p className="ml-5">Do you have a specific business case, or a problem you want to share?</p>
                    </div>
                </div>
                <div className="flex flex-row items-center mb-8 w-full lg:w-[calc(100%-64px)] relative">
                    <div className="relative flex-1">
                        <div className="w-1 h-[657px] bg-black absolute left-0 top-0 hidden lg:block"></div>
                        <div className="h-1 bg-black w-full"></div>
                    </div>
                    <div className="dingetje w-[70%] xl:w-[754px] flex items-center opacity-70">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDKaiZ2jc68FUsiaHg32uI1RAUHw673w4F-w&s" />
                        <p className="ml-5">An interesting problem space?</p>
                    </div>
                </div>
                <div className="flex flex-row items-center mb-8 w-full lg:w-[calc(100%-128px)] relative">
                    <div className="relative flex-1">
                        <div className="w-1 h-[507px] bg-black absolute left-0 top-0 hidden lg:block"></div>
                        <div className="h-1 bg-black w-full"></div>
                    </div>
                    <div className="dingetje w-[60%] xl:w-[492px] flex items-center opacity-70">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDKaiZ2jc68FUsiaHg32uI1RAUHw673w4F-w&s" />
                        <p className="ml-5">Or just a cool idea?</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
