import React from "react";
import { stopPropagation } from "./stopPropagation";
import { preventDefault } from "./preventDefault";
import { pickFromSyntheticEvent } from "./pickFromSyntheticEvent";
import { withKey } from "./withKey";

const add = (leftSide: number) => (rightSide: number) => leftSide + rightSide;

add(1)(1) // => 2

const addOne = add(1);
const addSix = add(6);

addOne(5) // => number;

window.addEventListener('resize', () => {});

// any в уроке не было
function addEventListenerWithDispose(element: any, name: any, handler: any) { 
  element.addEventListener(name, handler);

  return () => element.removeEventListener(name, handler);
}

const dispose = addEventListenerWithDispose(window, 'resize', () => {
  console.log('resize');
  dispose();
});

/// --- ///
interface IBlockProps {
  title: string;
  id: string;
}

const withIdKey = withKey('id');
const withIndexKey = withKey();

function Feed(props: { blocks: IBlockProps[] }) {
  return (
    <div>
      {props.blocks.map(withIdKey(Block))}
    </div>
  );
};

function Block(props: IBlockProps) {
  return (
    <div>{props.title}</div>
  )
}

/// --- ///
// function Input({ onChange, value }: { onChange: (value: string) => void, value: string}) {
//   return (
//     <input value={value} onChange={getValue(onChange)} />
//   )
// }

function Checkbox(props: { onChange: (value: boolean) => void, value: boolean}) {
  return (
    <input type="checkbox" checked={props.value} onChange={getChecked(props.onChange)} />
  )
}

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value');
export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked');

/// --- ///
function NotStandartLink(props: any) {
  return (
    <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello</a>
  )
}

interface InputProps {
  onChange: (value: string) => void;
  value: string;
}

function Input({ value, onChange }: InputProps) {
  return (
    <input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))} />
  )
}