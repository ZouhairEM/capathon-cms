'use client';
import { Button } from 'primereact/button';

export default function SignupSection({ data }) {
  return (
    <section>
      <div className="flex justify-center py-10">
        <div className="cut-corners-tl-br bg-capathon-primary flex h-auto justify-center xl:w-[50%]">
          <p className="m-auto w-2/3 py-4">
            {data.content.content[0].content[0].value}
          </p>
          <Button
            className="bg-capathon-secondary w-28 border-none md:w-40"
            label={
              data.signupPossible
                ? data.signupButtonLabels[0]
                : data.signupButtonLabels[1]
            }
            disabled={!data.signupPossible}
          />
        </div>
      </div>
    </section>
  );
}
