import React from "react";
import Card from "./common/Card";

type Props = {};

const Education = (props: Props) => {
  return (
    <Card title="Education">
      <div className="relative border-l-4 border-white">
        <div className="mb-5 ml-4">
          <div className="absolute -left-2 mt-1.5 h-3 w-3 rounded-full border border-white bg-white"></div>
          <div className="rounded-lg bg-white p-2 shadow-md">
            <time className="text-sm font-semibold text-gray-500">
              2022-present
            </time>
            <h2 className="mb-2 text-sm font-semibold">Walailak University</h2>
          </div>
        </div>
        <div className="mb-5 ml-4">
          <div className="absolute -left-2 mt-1.5 h-3 w-3 rounded-full border border-white bg-blue-500"></div>
          <div className="rounded-lg bg-white p-2 shadow-md">
            <time className="text-sm font-semibold text-gray-500">
              2015-2022
            </time>
            <h2 className="mb-2 text-sm font-semibold">Chalong Rat Rat Uthit School</h2>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Education;
