import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Accounts from './pages/Accounts';
import Airtime from './pages/Airtime';
import PurchaseAirtime from './pages/PurchaseAirtime';
import Transfers from './pages/Transfers';
import TransferFunds from './pages/TransferFunds';
import Upload from './pages/Upload';
import UploadedFiles from './pages/UploadedFiles';
import ConfirmTransfer from './pages/ConfirmTransfer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="airtime" element={<Airtime />} />
        <Route path="airtime/purchase-airtime" element={<PurchaseAirtime />} />
        <Route path="transfers" element={<Transfers />} />
        <Route path='transfer-funds/confirm-transfer' element={<ConfirmTransfer />} />
        <Route path="transfer-funds" element={<TransferFunds />} />
        <Route path="upload" element={<Upload />} />
        <Route path="uploaded-files" element={<UploadedFiles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
