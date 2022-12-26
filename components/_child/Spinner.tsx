import React from "react";

type Props = {};

export default function Spinner({}: Props) {
  return (
    <div className="flex justify-center py-15">
      <span className="loader"></span>
    </div>
  );
}
