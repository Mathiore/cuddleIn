import React from 'react';
import './styles/Navbar.css'

export default Navbar =>
    <div>
        <header id="header">
            <div class="fas fa-bars"></div>
            <nav id="topmenu">
                <ul>
                    <li><a href="#SHOP">Shop</a></li>
                    <li><a href="sigin.html">Sign in</a></li>
                    <li><a href="cart.html">Cart<i class="fas fa-shopping-cart"></i></a></li>
                </ul>
            </nav>
        </header>
    </div>