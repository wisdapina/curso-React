import React from "react";
import CartWidget from "../CartWidget/CartWidget.jsx";
import ItemListContainer from "../ItemListContainer/ItemListContainer.jsx"

const NavBar = () => {

return (


<div >
<nav className="navbar row navbar-expand-lg navbar-light bg-secondary ">
  <div className="container-fluid text-mute col-4">
    <a className="navbar-brand" href="#">Gamaleds</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inico</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pedidos</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Iluminacion</a></li>
            <li><a className="dropdown-item" href="#">Electricidad</a></li>
            <li><a className="dropdown-item" href="#">Hogar</a></li>
          </ul>
        </li>
      </ul>
      <CartWidget/>
      <ItemListContainer greeting={"carrito"}/>
    </div>
 
 
  </div>
</nav>

    
</div>



)

}

export default NavBar;