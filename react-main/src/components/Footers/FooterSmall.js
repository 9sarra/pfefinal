import React from "react";

export default function FooterSmall(props) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 bg-transparent"
            : "relative") + " pb-6"
        }
      ></footer>
    </>
  );
}
