import React from "react";
import Card from "./common/Card";

type Props = {};

const Goals = (props: Props) => {
  return (
    <Card title="Goals">
      <div>
        <ul className="list-inside list-disc">
          <li>Have money to buy a ticket</li>
          <li>Have a good workplace</li>
          <li>Get to travel where i want to go</li>
        </ul>
      </div>
    </Card>
  );
};

export default Goals;
