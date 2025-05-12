"use client";
import { Button } from "primereact/button";

export default function SignupSection({ data }) {
  function handleSignUp() {
    console.log("Clicked!");
  }

  return (
    <section className="text-center">
      <p className="w-2/3 m-auto mb-4">{data.content}</p>
      <Button
        label={
          data.signUpPossible
            ? data.buttonLabels.label1
            : data.buttonLabels.label2
        }
        onClick={handleSignUp}
        disabled={!data.signUpPossible}
      ></Button>
    </section>
  );
}
