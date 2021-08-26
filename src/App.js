import './App.css';
import Header from './components/header/Header';
import Card from './components/card/Card';
import Story from './components/story/story';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="app">
      <Header />
      <Card />
      <Story />
      <Footer />
    </div>
  );
}

export default App;
