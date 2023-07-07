import { RootState } from './redux/store'
import {
  drcrement,
  increment,
  incrementByAmount,
} from './redux/features/Counter/CounterSlice'
import { useAppDispatch, useAppSelector } from './redux/hook'

function App() {
  const { count } = useAppSelector((state: RootState) => state.counter)
  const dispatch = useAppDispatch()
  return (
    <div className="flex  items-center mt-10">
      <button
        onClick={() => dispatch(increment())}
        className="p-2 mx-3 border rounded-full"
      >
        Increment
      </button>
      <h1>{count}</h1>

      <button
        onClick={() => dispatch(incrementByAmount(5))}
        className="p-2 mx-3 border rounded-full"
      >
        Increment by Payload
      </button>
      <button
        onClick={() => dispatch(drcrement())}
        className="p-2 mx-3 border rounded-full"
      >
        Drecrement
      </button>
    </div>
  )
}

export default App
