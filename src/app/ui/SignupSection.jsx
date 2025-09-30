'use client';
import { Button } from 'primereact/button';

export default function SignupSection({ data }) {
  function handleSignUp() {
    console.log('Clicked!');
  }

  return (
    <section>
      <div className="flex justify-center py-10">
        <div className="cut-corners-tl-br bg-capathon-primary flex h-auto justify-center xl:w-[50%]">
          <p className="m-auto w-2/3 py-4">{data.content}</p>
          <Button
            className="bg-capathon-secondary w-28 border-none md:w-40"
            label={
              data.signUpPossible
                ? data.buttonLabels.label1
                : data.buttonLabels.label2
            }
            onClick={handleSignUp}
            disabled={!data.signUpPossible}
          />
        </div>
      </div>
    </section>
  );
}
