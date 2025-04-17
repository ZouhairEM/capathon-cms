"use client";
import { Button } from "primereact/button";
import React from "react";

export default function SignupButton({ className }) {
  return (
    <Button
      label="Sign up"
      link
      onClick={() => window.open("https://react.dev", "_blank")}
      className={className}
    />
  );
}
