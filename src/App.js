
import './App.css';
import Filter from './components/Filter';
import UserList from './components/UserList';


function App() {
  return (
    <div className="styles.appContainer">
      <h1>User Filter App</h1>
      <Filter/>
      <UserList/>
      
    </div>
  );
}

export default App;
