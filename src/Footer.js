import './Footer.css';
import { useSelector } from 'react-redux'

function Footer() {

  const count = useSelector((state) => state.counter.value)

  return (
    <div className="container">
      Footer
      <div className='row'>
        <div className='col-12'>
          Counter: {count}
        </div>
      </div>
    </div>
  );
}

export default Footer;
