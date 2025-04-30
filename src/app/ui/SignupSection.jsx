"use client";
import { Button } from "primereact/button";

export default function SignupSection({ data }) {

  function handleSignUp() {
    console.log("Clicked!");
  }

  return (
    <section className="text-center">
      <p className="w-2/3 m-auto mb-4">{data.content}</p>
      {data.signUpPossible ? (
        <Button 
          label={data.buttonLabels.label1} 
          onClick={handleSignUp} 
          disabled={!data.signUpPossible}
        ></Button>
      ) : (
        <Button 
          label={data.buttonLabels.label2} 
          onClick={handleSignUp} 
          disabled={!data.signUpPossible}
        ></Button>
      )}
    </section>
  );
}
