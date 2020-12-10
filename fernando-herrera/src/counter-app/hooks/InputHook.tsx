import UseStateHook from '../../hooks/UseStateHook';

const InputHook = () => {
  const [state, setState] = UseStateHook<number>(1);
  const changeFactor = (e: React.ChangeEvent<HTMLInputElement>) =>
    e.target.value ? setState(parseInt(e.target.value)) : setState(0);
  return { state, changeFactor };
};

export default InputHook;
