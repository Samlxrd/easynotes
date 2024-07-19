import './header.css';

function Header() {
  return (
    <header>
      <ul class="nav-bar">
        <div class="nav">
          <li><a href="#">Notas</a></li>
          <li><a href="#">Grupos</a></li>
          <li><a href="#">Favoritos</a></li>
        </div>
        <div class="data-user">
          <li><span>username</span></li>
          
        </div>
      </ul>
    </header>
  );
}

export default Header;
