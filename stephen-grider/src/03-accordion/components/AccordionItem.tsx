import React, { FC, memo } from 'react';

interface IProps {
  item: any;
  index: any;
  onTitleClick: (index: any) => void;
  isActive: any;
}

const AccordionItem: FC<IProps> = memo(({ item, index, onTitleClick, isActive }) => {
  const active = index === isActive ? 'active': '';
  console.log('me renderize', index);
  return (
    <React.Fragment>
      <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
        <i className='dropdown icon'></i>
        {item.title}
      </div>
      <div className={`content ${active}`}>
        <p>{item.content}</p>
      </div>
    </React.Fragment>
  );
});

export default AccordionItem;
