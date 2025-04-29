'use client'
import { Button } from "primereact/button"

export default function SignupSection({ signUpPossible }) {
  const content = 'Did we peak your enthusiasm? Great! You can sign up with your team. Don\'t have a team yet? Don\'t worry, we can match you to an awesome team! If the current edition has already started, you can sign up for the next one.'
  
  function signUpHandler() {
    console.log('Clicked!');
  }

  return (
    <section className="text-center">
      <p className="w-2/3 m-auto mb-4">{content}</p>
      {signUpPossible ? <Button label="Sign up" onClick={signUpHandler}></Button> : <Button label="Sign up next year!" onClick={signUpHandler}></Button>}
    </section>
  )
}