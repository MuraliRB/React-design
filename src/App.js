
import './App.css';
import CarouselCard from './components/CarouselCards/CarouselCard';
import Header from './components/Header/Header';
import MainCard from './components/Maincard/MainCard';
import MidCard from './components/MidCard/MidCard';
import PrimarySearchAppBar from './components/NavBar/NavBar';
import ResponsiveDrawer from './components/Drawer/Drawer';
import ClippedDrawer from './components/Drawer/Drawer';
import BottomCard from './components/BottomCard/BottomCard';

function App() {
  return (
    <div className="App">
    
    
    <MainCard/>
    <CarouselCard/>
    <MidCard/>
    <BottomCard/>
    <ClippedDrawer/>
    </div>
  );
}

export default App;
