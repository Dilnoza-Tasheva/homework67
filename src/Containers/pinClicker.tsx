import { useDispatch, useSelector } from 'react-redux';
import { addNumber, confirmPin } from './pinClickerSlice.ts';
import { RootState } from '../app/store.ts';

const PinClicker = () => {
  const {userMessage, input} = useSelector((state: RootState) => state.pinClicker);
  const dispatch = useDispatch();

  const clickNumber = (number: string) => {
    dispatch(addNumber(number));
  };

  const checkPin = () => {
    dispatch(confirmPin());
  };

  return (
    <>
      <div className="d-flex flex-column align align-items-center mt-5">
        <h3>Enter PIN</h3>
        <div className="border rounded text-center mb-3 p-4">
          <div className="mb-2 text-center">{userMessage}</div>
          <div>{input.length}</div>
        </div>

        <div className="d-flex flex-wrap justify-content-center" style={{ width: '200px' }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
            <button key={number}
                    className="btn btn-outline-secondary m-1"
                    onClick={() => clickNumber(number.toString())}
            >
              {number}
            </button>
          ))}

          <button className="btn btn-danger m-1"> &lt; </button>
          <button className="btn btn-success m-1" onClick={checkPin}> E </button>
        </div>
      </div>
    </>
  );
};

export default PinClicker;