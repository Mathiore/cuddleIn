import React from 'react';
import './style.css';
import './css/bootstrap.min.css';
import './css/bootstrap.min.css.map';
import Navbar from './components/Navbar.jsx'
import Modal from './components/Modal.jsx'
import Card from './components/Card.jsx';

export default App =>

    <div>
        <Navbar>
            
        </Navbar>

        <section id="INICIO" className="container-fluid">
            <div className="row min-vh-100 align-items-center">
                <div className="col-md-8 ml-md-5 text-md-left text-center content">
                <h1>CuddleIn.<i className="fas fa-heart"></i></h1>
                </div>
            </div>
        </section>

        <section id="SLOGAN" className="container-fluid">
            <div className="heading text-center">
                <h1>Can't express your feelings through words?</h1>
                <h2>Now you can express yourself to the loved one through cuddles and gifts.</h2>
            </div>
        </section>

        <section id="SHOP">
            <div className="wrapper">
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h2>SHOP</h2>
                    </div>
                    <ul className="list-unstyled components">
                        <li><a href="#CUDDLES">Cuddles</a></li>
                        <li><a data-bs-toggle="modal" data-bs-target="#GIFTS" href="#GIFTS">Gifts for you</a></li>
                        <li><a href="#MOOD">Mood</a></li>
                    </ul>
                </nav>
            </div>

            <div className="row center" id="CUDDLES">
            <Card>

            </Card>
            
            <Modal>
                
            </Modal>
            </div>
        </section>
        

    </div>