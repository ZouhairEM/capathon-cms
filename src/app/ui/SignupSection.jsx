'use client';
import { Button } from 'primereact/button';

export default function SignupSection({ data }) {
  function handleSignUp() {
    console.log('Clicked!');
  }

  return (
    <section>
      <div className='py-10 flex justify-center'>
        <div className='cut-corners-tl-br bg-capathon-primary flex lg:w-[50%] h-auto justify-center'>
          <p className="m-auto w-2/3 py-4">{data.content}</p>
          <Button
            className='bg-capathon-secondary border-none'
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
