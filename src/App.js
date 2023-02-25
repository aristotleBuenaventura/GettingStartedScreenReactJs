import logo from './logo.svg';
import './App.css';
import aris from './aris.jpg'
import { ArrowRight } from 'react-bootstrap-icons';

function App() {
  return (
    <div className="App">
      <div className='container text-center'>
        <p className='h1 mt-5 mb-3'>Who is Aristotle?</p>
        <img src={aris} style={{ height: '350px' }} />
        <p className='h5 mt-4'>Aristotle was a Greek philosopher and polymath who made important contributions to fields such as logic, biology, and ethics.</p>
        <p className='font-bold mt-4'>By Buenaventura, Aristotle C.</p>
        <button type="button" class="btn btn-primary btn-lg mt-5 rounded rounded-pill">Know more about him  <ArrowRight color="white" size={28} /></button>
      </div>
    </div>
  );
}

export default App;
