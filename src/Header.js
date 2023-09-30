import './Header.css';
import { useSelector } from 'react-redux'

function Header() {

  const count = useSelector((state) => state.counter.value)
  
  return (
    <div className="container">
      Header
      <div className='row'>
        <div className='col-12'>
          Counter: {count}
        </div>
      </div>
    </div>
  );
}

export default Header;
