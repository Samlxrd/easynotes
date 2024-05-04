import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Login</h1>
      <form action="teste.jsx" method='GET'>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" />
        <input type="submit" value="Submit" />
      </form>
      <Footer/>
    </div>
  );
}

export default App;
