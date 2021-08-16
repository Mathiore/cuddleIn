import React from 'react';
import './style.css';
import './css/bootstrap.min.css';
import './css/bootstrap.min.css.map';
import Navbar from './components/Navbar.jsx'
import Modal from './components/Modal.jsx'

export default App =>

    <div>
        <Navbar>
            
        </Navbar>

        <section id="INICIO" class="container-fluid">
            <div class="row min-vh-100 align-items-center">
                <div class="col-md-8 ml-md-5 text-md-left text-center content">
                <h1>CuddleIn.<i class="fas fa-heart"></i></h1>
                </div>
            </div>
        </section>

        <section id="SLOGAN" class="container-fluid">
            <div class="heading text-center">
                <h1>Can't express your feelings through words?</h1>
                <h2>Now you can express yourself to the loved one through cuddles and gifts.</h2>
            </div>
        </section>

        <section id="SHOP">
            <div class="wrapper">
                <nav id="sidebar">
                    <div class="sidebar-header">
                        <h2>SHOP</h2>
                    </div>
                    <ul class="list-unstyled components">
                        <li><a href="#CUDDLES">Cuddles</a></li>
                        <li><a data-bs-toggle="modal" data-bs-target="#GIFTS" href="#GIFTS">Gifts for you</a></li>
                        <li><a href="#MOOD">Mood</a></li>
                    </ul>
                </nav>
            </div>
        </section>

        <div class="row center" id="CUDDLES">
            <div class="card">
                <a href="product.html"><img class="medium" src="./img/cafune.png" alt="product"></img></a>
                <div class="card-body">
                    <a href="product.html"><h2>Cafuné</h2></a>
                </div>
                <div class="desc">
                    <p>Compre um cafuné para tirar um soninho.</p>
                </div>
                <div class="price">
                    R$0,99
                </div>
            </div>
            <div class="card">
                <a href="product.html"><img class="medium" src="img/costas.png" alt="product"></img></a>
                <div class="card-body">
                    <a href="product.html"><h2>Massagem nas Costas</h2></a>
                </div>
                <div class="desc">
                    <p>Compre uma massagem nas costas para tirar as dores.</p>
                </div>
                <div class="price">
                    R$1,99
                </div>
            </div>
            <div class="card">
                <a href="product.html"><img class="medium" src="img/pe.png" alt="product"></img></a>
                <div class="card-body">
                    <a href="product.html"><h2>Massagem nos pés</h2></a>
                </div>
                <div class="desc">
                    <p>Compre uma massagem para os pé para relaxar.</p>
                </div>
                <div class="price">
                    R$0,50
                </div>
            </div>
            <div class="card">
                <a href="product.html"><img class="medium" src="img/hug.png" alt="product"></img></a>
                <div class="card-body">
                    <a href="product.html"><h2>Abraços</h2></a>
                </div>
                <div class="desc">
                    <p>Amor para você é sempre de graça.</p>
                </div>
                <div class="price">
                    FREE
                </div>
            </div>
            <Modal>
                
            </Modal>
        </div>

    </div>