// import logo from './logo.svg';
import './App.css';
import AlbumData from './component/Album/AlbumData';
// import AlbumData from './component/Album/AlbumData';
import Hero from './component/Hero/Hero';
import Navbar from './component/Navbar/Navbar';



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AlbumData/>
    </>
  );
}

export default App;

