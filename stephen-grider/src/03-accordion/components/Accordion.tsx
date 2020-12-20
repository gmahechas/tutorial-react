import React, { FC, useState } from 'react';
import AccordionItem from './AccordionItem';

interface IProps {
  items: any[];
}

const Accordion: FC<IProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index: any) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    return (
      <AccordionItem
        key={item.title}
        item={item}
        index={index}
        onTitleClick={onTitleClick}
        isActive={activeIndex}
      />
    );
  });

  return <div className='ui styled accordion'>{renderedItems}</div>;
};

export default Accordion;
