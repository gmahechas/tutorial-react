import UseStateHook from './UseStateHook';

const UseFormHook = function <T>(initialState: T) {
  const [state, setState] = UseStateHook<T>(initialState);

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [target.name]: target.value });
  };

  return {state, handleInputChange };
};

export default UseFormHook;
