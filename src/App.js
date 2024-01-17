import './App.css';
import Navbar from './Component/Navbar/Navbar';
import ContentPage from './Component/ContentPage/ContentPage';
import Footer from './Component/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/rsuite.min.css';
import 'rsuite/dist/rsuite-no-reset.min.css';

function App() {
  return (
    <>
  <Navbar/>
  <ContentPage/>
  <Footer/>
    </>
  );
}

export default App;
