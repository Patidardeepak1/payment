import {BrowserRouter as Router,Routes,Route}  from 'react-router-dom'
import Home from './Home';
import PaymentSucees from './PaymentSucees';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/PaymentSucees' element={<PaymentSucees/>}/>
      </Routes>
    </Router>
  );
}

export default App;
