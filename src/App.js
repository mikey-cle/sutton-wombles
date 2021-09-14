import './App.css';
import './components/navbar.css';
import Nav from './components/navbar';

function App() {
  return (
   <div className = "body">
        <Nav />
        <div className= 'central'>
          <div className= 'left'>
              <h1>What we do</h1>
              <p>The Moss Fairy Crew are a group of volunteers from the local area. We dedicate our own time to ensure that Collier's Moss remains a place of beauty and tranquility. We do this through frequent litter picks, where we remove any unsightly litter to keep this local beauty spot a place for all to enjoy, including the indigenous wildlife.</p>
          </div>
          <div className = 'right'>

          </div>
        </div>
   </div>
   
  );
}

export default App;
