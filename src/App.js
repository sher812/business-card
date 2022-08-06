import './App.css';
import MyImage from "./images/profile-pic.jpg";
import Name from './components/Name';
import Info from './components/Info';
import Footer from './components/Footer';

function App() {
  return (
    <div className="card-body">
      <img src={MyImage} className="profile-pic" alt="profile-pic"/>
      <Name />
      <Info />
      <Footer />
    </div>
  );
}
export default App;
