import React from "react";

interface IItem {
  id: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

interface IGenericListProps {
  list: IItem[];
}

const NOOP = () => {};

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({ As = 'div', icon, children, onClick = NOOP, className, id, href}) => (
        <As
          className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >
          {icon}
          {children}
        </As>
      ))}
    </>
  );
}