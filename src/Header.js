import './Header.css';
import { useSelector } from 'react-redux'

function Header() {

  const count = useSelector((state) => state.counter.value)

  const balance = useSelector((state) => state.balancer.value)

  return (
    <div className="container">
      Header
      <div className='row'>
        <div className='col-12'>
          Counter: {count}
        </div>
      </div>

      <div className='row'>
        <div className='col-12'>
          Balance: {balance}
        </div>
      </div>
    </div>
  );
}

export default Header;
