"use client";

import clsx from "clsx";
import React from "react";

export const Input = (props: React.ComponentProps<"input">) => {
  return (
    <input
      {...props}
      className={clsx("bg-white rounded-sm p-2", props.className)}
    />
  );
};
