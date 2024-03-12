import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './module/counter'
import { TypedUseSelectorHook, useDispatch, useSelector,shallowEqual } from 'react-redux'
const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

//自定义useselector
type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>

//自定义usedispatch
type DispatchType = typeof store.dispatch

export const useAppDispatch: () => DispatchType = useDispatch
//传出一个usEDispatch的变式

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
//传出一个useselector的变式，指定类型后的可以指定state的类型，并作出提示

export const appshallowEqual=shallowEqual

export default store
