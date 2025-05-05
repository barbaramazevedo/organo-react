import Banner from './components/Banner';
import TextField from './components/TextField';

function App() {
  return (
    <div className="App">
      <Banner />
      <TextField label="Name" placeholder="Enter your name"/>
      <TextField label="Position" placeholder="Enter your position"/>
      <TextField label="Image" placeholder="Enter image address"/>
    </div>
  );
}

export default App;
