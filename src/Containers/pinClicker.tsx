import { useDispatch, useSelector } from 'react-redux';
import { addNumber } from './pinClickerSlice.ts';
import { RootState } from '../app/store.ts';

const PinClicker = () => {
  const pinClickerValue = useSelector((state: RootState) => state.pinClicker);
  const dispatch = useDispatch();

  const clickNumber = (number: string) => {
    dispatch(addNumber(number));
  };

  return (
    <>
      <div className="d-flex flex-column align align-items-center mt-5">
        <h3>Enter PIN</h3>
        <div>Message</div>

        <div className="d-flex flex-wrap justify-content-center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
            <button key={number}
                    className="btn btn-outline-secondary m-1"
                    onClick={() => clickNumber(number.toString())}
            >
              {number}
            </button>
          ))}

          <button className="btn btn-primary m-1"> &lt; </button>
          <button className="btn btn-primary m-1"> E </button>
        </div>
      </div>
    </>
  );
};

export default PinClicker;