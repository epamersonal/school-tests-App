import React, {Component, Fragment} from 'react';
import {Helmet} from 'react-helmet';
import { Link } from 'react-router-dom';

class QuizSummary extends Component {
    constructor (props) {
        super(props);
        this.state = {
            score: 0,
            numberOfQuestions: 0,
            numberOfAnsweredQuestions: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            time: 0
        }
    }
    componentDidMount () {
        const { state } = this.props.location;
        if (state) {
        this.setState({
            score: (state.score / state.numberOfQuestions) * 100,
            numberOfQuestions: state.numberOfQuestions,
            numberOfAnsweredQuestions: state.correctAnswers + state.wrongAnswers,
            correctAnswers: state.correctAnswers,
            wrongAnswers: state.wrongAnswers,
            minutes: 9-state.time.minutes,
            seconds: 60-state.time.seconds
        })
    }
    }
    render () {
        const {state} = this.props.location;
        let stats, remark;
        const userScore = this.state.score;
        
        if (userScore <= 30) {
            remark = 'Your score is too low. You have not passed the test!';
        } else if (userScore > 30 && userScore <= 50) {
            remark = 'You score is medium, practice more to pass the test!';
        } else if (userScore <= 70 && userScore > 50) {
            remark = 'You almost passed'
        } else if (userScore >= 71 && userScore <= 84) {
            remark = 'You have passed!'
        } else {
            remark = 'You have passed with a brilliant result!';
        }
        if (state !== undefined) {
            stats = (
                <Fragment>
                    <div>
                        <span className="mdi mdi-check-circle-outline success-icon"></span>
                    </div>
                        <h1 className="stat-head">Тест завершен</h1>
                        <div className="container">
                            <h4>{remark}</h4>
                            <h2>Ваш результат: {this.state.score.toFixed(0)}&#37;</h2>
                            <span className="stat left">Вопросов в тесте: </span>
                            <span className="right">{this.state.numberOfQuestions}</span><br />

                            <span className="stat left">Вопросов отвечено: </span>
                            <span className="right">{this.state.numberOfAnsweredQuestions}</span><br />

                            <span className="stat left">Вопросов отвечено правильно: </span>
                            <span className="right">{this.state.correctAnswers}</span><br />

                            <span className="stat left">Вопросов отвечено неправильно: </span>
                            <span className="right">{this.state.wrongAnswers}</span><br />

                            <span className="stat left">Затрачено времени (мин:сек): </span>
                            <span className="right">{this.state.minutes}:{this.state.seconds}</span><br />

                            
                        </div>
                        <section>
                            <ul style={{textAlign: 'center', height: '1rem'}}>
                                <li style={{display: 'inline-block', marginRight: '1rem' }}>
                                    <Link to = "/">На главную</Link>
                                </li>
                                <li style={{display: 'inline-block', marginLeft: '1rem' }}>
                                    <Link to = "/play/quiz">Пройти заново</Link>
                                </li>
                            </ul>
                        </section>
                </Fragment>
            );
        } else {
            stats = (
                <section>
                    <h1 className="no-stats">No statistics available</h1>
                    <ul>
                        <li>
                            <Link to = "/">Back to Home</Link>
                        </li>
                        <li>
                            <Link to = "/play/quiz">Take a Quiz</Link>
                        </li>
                    </ul>
                </section>
            )
        }
        return (
            <Fragment>
                <Helmet><title>Quiz App - Summary</title></Helmet>
                {stats}
            </Fragment>
        )
    }
}
export default QuizSummary;