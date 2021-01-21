import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../store/repositories';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;