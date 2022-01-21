import React from "react";
import Button from "../Component/ButtonLink";

function Main() {
  return (
    <div>
      <Button link="/slider" name="Перейти к слайдеру"></Button>
      <div className="flex mx-auto w-4/6 mt-5">
        <div className="text-center">Здесь должно быть приветствие</div>
      </div>
    </div>
  );
}
export default Main;
