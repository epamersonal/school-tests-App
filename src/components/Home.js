import React, {Fragment} from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { ClassComponent, FunctionalComponent } from './quiz/Test';

const Home = () => (
    <Fragment>
        <Helmet><title>Quiz App - Home</title></Helmet>
        <div id="home">
            <section>
                <div style={{textAlign: 'center', height: '1rem' }}>
                    <span className="mdi mdi-school school"></span>
                </div>
                <h1>Проверьте свои знания</h1>
                
                <div className="play-button-container">
                    <ul>
                        <li><Link className="play-button" to="/play/instructions">Приступить к тестам</Link></li>
                    </ul>
                </div>
                <div className="auth-container">
                    <Link to="/login" className="auth-buttons" id="login-button">Авторизация</Link>
                    <Link to="/register" className="auth-buttons" id="signup-button">Регистрация</Link>
                </div>
            </section>
        </div>
    </Fragment>
);

export default Home;