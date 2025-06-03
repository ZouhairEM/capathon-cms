'use client';

export default function CtaSection({ data }) {
  return (
    <section>
        <div className="flex flex-col items-end">
            <div className="dingetje w-[1016px] mb-8">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDKaiZ2jc68FUsiaHg32uI1RAUHw673w4F-w&s"></img>
                <p className="ml-5">Do you have a specific business case, or a problem you want to share?</p>
            </div>
            <div className="dingetje w-[754] mb-8">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDKaiZ2jc68FUsiaHg32uI1RAUHw673w4F-w&s"></img>
                <p className="ml-5">An interesting problem space?</p>
            </div>
            <div className="dingetje w-[492px]">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDKaiZ2jc68FUsiaHg32uI1RAUHw673w4F-w&s"></img>
                <p className="ml-5">Or just a cool idea?</p>
            </div>
        </div>
    </section>
  );
}
