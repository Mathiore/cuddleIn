import React from 'react';
import './styles/Navbar.css'

export default Navbar =>
    <div className="MENU">
        <header id="header">
            <div class="fas fa-bars"></div>
            <nav id="topmenu">
                <ul>
                    <li><a href="#SHOP">Shop</a></li>
                    <li><a href="/signin">Sign in</a></li>
                    <li><a href="/cart">Cart<i class="fas fa-shopping-cart"></i></a></li>
                </ul>
            </nav>
        </header>
    </div>