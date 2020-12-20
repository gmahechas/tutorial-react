import React, { FC, useEffect, useState, useRef } from 'react';

interface IItem {
  label: string;
  value: string;
}

interface IProps {
  options: IItem[];
  selected: IItem;
  onSelectedChange: (item: IItem) => void;
  label?: string;
}

const Dropdown: FC<IProps> = ({
  options,
  selected,
  onSelectedChange,
  label,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onBodyClick = (event: any) => {
      if (ref.current?.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className='item'
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className='ui form'>
      <div className='field'>
        <label className='label'>{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className='dropdown icon'></i>
          <div className='text'>{selected.label}</div>
          <div className={`menu ${open ? 'visible' : ''} transition`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

Dropdown.defaultProps = {
  label: 'Default Label',
};

export default Dropdown;
