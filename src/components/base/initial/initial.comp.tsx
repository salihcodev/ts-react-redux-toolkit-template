// pkgs:

// utils:
import './style.sass';
import { RootState } from '../../../redux/store';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { asyncCall } from '../../../redux/slices/initial/logic/async-call.sliceLogic';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Container } from 'react-bootstrap';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../../../redux/slices/initial/initial.slice';

// comps:

// component>>>
const InitialSliceComponent = () => {
  // use preConfigured hooks:
  const dispatch = useAppDispatch();

  // component's state extractions:
  // InitialSlice => from store, if you asking your self :/
  const { val, stage } = useAppSelector((state: RootState) => state.InitialSlice);
  return (
    <div className="initial-component">
      <Container>
        <div className="result-box">
          {/* you check also for failure-stage and print the rejection message. */}
          {stage === `busy` ? (
            <span className="loading"></span>
          ) : (
            <h2 className="heading counter-number">{val}</h2>
          )}
        </div>

        <section className="controllers">
          {/* additional controller */}
          <button className="" onClick={() => dispatch(incrementByAmount(5))}>
            Add Amount +5
          </button>

          {/* basic controllers */}
          <button className="" aria-label="Decrement value" onClick={() => dispatch(decrement())}>
            <AiOutlineMinus />
          </button>
          <button className="" aria-label="Increment value" onClick={() => dispatch(increment())}>
            <AiOutlinePlus />
          </button>

          {/* additional controller */}
          <button className="" onClick={() => dispatch(asyncCall())}>
            Add Async
          </button>
        </section>
      </Container>
    </div>
  );
};

export default InitialSliceComponent;
