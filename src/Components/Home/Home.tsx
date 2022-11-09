import { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Menu from '../Menu/Menu';

const Home = () => {
    const [menuActive, setMenuActive] = useState<boolean>(false);
    return (
        <div className="home">
            <Header menuActive={menuActive} setMenuActive={setMenuActive} />
            <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
            <div className="wrapper row2 bgded">
                <div className="overlay">
                    <h2>Преимущества</h2>
                    <div id="intro" className="clear">
                        <article className="one_third first">
                            <h3 className="heading">Словарь</h3>
                            <ul className="nospace">
                                <li>Граммотная сортировка слов: </li>
                                <li>-по уровню сложности</li>
                                <li>-по изученности</li>
                                <li>Транскрипция</li>
                                <li>Аудиосопровождение</li>
                            </ul>
                            <p className="link">
                                <Link to="/bookInfo">Подробнее &raquo;</Link>
                            </p>
                        </article>
                        <article className="one_third">
                            <h3 className="heading">Статистика</h3>
                            <ul className="nospace">
                                <li>Простматривай свой прогресс изучения:</li>
                                <li>-количество новых слов за день</li>
                                <li>-количество изученных слов за день</li>
                                <li>-процент правильных ответов за день</li>
                            </ul>
                            <p className="link">
                                <Link to="/statInfo">Подробнее &raquo;</Link>
                            </p>
                        </article>
                        <article className="one_third">
                            <h3 className="heading">Игры </h3>
                            <ul className="nospace">
                                <li>Сделайте изучение слов более увлекательным:</li>
                                <li>- уровни сложности</li>
                                <li>- улучшение запоминания</li>
                                <li>- восприятие на слух и навыки перевода</li>
                            </ul>
                            <p className="link">
                                <Link to="/gameInfo">Подробнее &raquo;</Link>
                            </p>
                        </article>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
