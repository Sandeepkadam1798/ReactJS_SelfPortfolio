import React from "react";
import { Progress } from "@nextui-org/react";


export default function Skillbar() {
  return (
    <Progress
      size="md"
      radius="sm"
    className={'gradient1'}
      label="Lose weight"
      value={65}
      showValueLabel={true}
    />
  );
}
