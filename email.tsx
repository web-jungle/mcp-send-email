import * as React from "react";
import { Html, Button } from "@react-email/components";

export function Email(props: { subject: string; content: string }) {
  const { subject, content } = props;

  return (
    <Html lang="en">
      <h1>{subject}</h1>
      <p>{content}</p>
    </Html>
  );
}

export default Email;
