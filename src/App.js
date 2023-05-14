import TaskList from './TastList';
import AddTask from './AddTask';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Journey to Tokaido</h1>
      <AddTask/>
      <TaskList/>
    </div>
  );
}

export default App;
