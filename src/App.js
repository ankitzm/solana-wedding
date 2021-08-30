import './App.css';
import Certificate from './component/certificate/Certificate';
import Homepage from './component/homepage/Homepage';
import WalletAdapter from './component/wallet/WalletAdapter';

function App() {
  return (
    <div className="App">
      <WalletAdapter />
      {/* <Homepage /> */}
      {/* <Certificate /> */}
    </div>
  );
}

export default App;
