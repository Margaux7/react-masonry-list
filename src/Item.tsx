import React from 'react';

export interface ItemProps {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
  gridSpan?: number;
}

const Item: React.FC<ItemProps> = (props: ItemProps) => {
  const span = props.gridSpan || 0;
  return (
    <div
      className={props.className}
      style={{
        gridRowEnd: `span ${span}`,
        visibility: span ? 'initial' : 'hidden',
      }}
    >
      <div>{props.children}</div>
    </div>
  );
};

export default Item;
