import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import { Helmet} from 'react-helmet';

import answer from '../../assets/img/answer.png';
import fiftyFifty from '../../assets/img/fiftyFifty.png';
import hints from '../../assets/img/hints.png';
import options from '../../assets/img/options.png';

const QuizInstructions = () => (
    <Fragment>
        <Helmet><title>Quiz Instructions - Quiz App</title></Helmet>
        <div className="instructions container">
            <h1>Правила выполнения тестов</h1>
            <p>Внимательно ознакомьтесь с условиями</p>
            <ul className="browser-default" id="main-list">
                <li>Каждый тест длится 30 минут и может быть завершен досрочно</li>
                <li>Тест состоит из 15 вопросов</li>
                <li>
                    Каждый вопрос содержит 4 варианта ответа
                    <img src={options} alt="Quiz App options example" />
                </li>
                <li>
                    Выберите наиболее подходящий вариант ответа.
                    <img src={answer} alt="Quiz App answer example" />
                </li>
                <li>
                    После каждого ответа Вы увидите уведомление:
                    <ul id="sublist">
                        <li>Зеленого цвета, если ответили правильно</li>
                        <li>Красного цвета, если ответили неправильно </li>
                    </ul>
                </li>
                <li>
                    Продолжайте, пока не ответите на все вопросы.
                    <img src={fiftyFifty} alt="Quiz App Fifty-Fifty example" />
                </li>
                <li>
                    Вы можете прервать выполнение теста
                    <img src={hints} alt="Quiz App hints example" />
                </li>
                <li>В этом случае тест считается несостоявшимся, и Вы не узнаете результата</li>
                <li>Завершите тест в отведенное время</li>
                <li>Если Вы готовы, приступайте к прохождению теста на знание английского языка</li>
            </ul>
            <div>
                <span className="left"><Link to="/">Отказаться</Link></span>
                <span className="right"><Link to="/play/quiz">Пройти тест!</Link></span>
            </div>
        </div>
    </Fragment>
);

export default QuizInstructions;