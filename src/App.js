import './App.css';
import Contact from './components/Contact';

function App() {
  
  return (
    <div className="App">
      <Contact 
      image="https://randomuser.me/api/portraits/women/84.jpg"
       name ="Lucille Carlson"
        online={true} 
        />
        <Contact 
      image="https://randomuser.me/api/portraits/women/57.jpg"
       name ="Ethel Sullivan"
        online={false} />
        <Contact 
      image="https://randomuser.me/api/portraits/women/2.jpg"
       name ="Jenny Simpson"
        online={true} />
    </div>
  );
}

export default App;
