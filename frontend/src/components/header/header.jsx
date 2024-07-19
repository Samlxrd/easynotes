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
          <li><h3>Username</h3></li>
          <li><img src="https://i.pinimg.com/originals/70/c4/f6/70c4f6ccba510995bcfcd87fd0704191.jpg" alt=""/></li>
        </div>
      </ul>
    </header>
  );
}

export default Header;
