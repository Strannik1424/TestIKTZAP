import {React, useState} from 'react';
import { Link } from 'react-router-dom';


import '../../css/style.scss';
import '../../css/pages/header/homeHeader.scss';

function Header() {
  const [showMenu, setShowMenu] = useState(false)

  function clickBurger(bol){
    return setShowMenu(bol)
  }



  return (
    <div className='header'>
      <div className="container">
         <div className="header_one">
            <div className="contact">
                <p><img src="/img/local5.png" alt="" /><a href="https://maps.app.goo.gl/yZtsMqB1mRewJQFr5">Чита ул. Дивизионная 3</a></p>
                <p><img src="/img/phone.svg" alt="" /><a href="tel:+79998889999">+7 999 888 99-99</a></p>
            </div>
            <div className="register">
                <a className='signIN' href="#">Войти</a>
                <a className='signUP' href="#">Зарегистрироваться</a>
            </div>
        </div> 
        <div className="header_two">
            <div className="logo">
                <img src="/img/logo.png" alt="" />
                <p>ИКТ Запчасти</p>
            </div>
            <div className="search">
                <img src="/img/search.svg" alt="" />
                <input type="text" name="" id="" placeholder='Поиск...' />
            </div>
            <div className="search_phone">
              <img src="img/search.svg" alt="" />
            </div>
            <div className="basket">
                <a href=""><svg fill="none" height="27" viewBox="0 0 30 27" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M1.39999 1.70001H6.60001" stroke="#4F4F4F" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/><path d="M6.60001 1.70001L11 18.9" stroke="#4F4F4F" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/><path d="M11.8 18.9H28.3" stroke="#4F4F4F" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/><path d="M13.8 25.7C15.4569 25.7 16.8 24.3569 16.8 22.7C16.8 21.0432 15.4569 19.7 13.8 19.7C12.1431 19.7 10.8 21.0432 10.8 22.7C10.8 24.3569 12.1431 25.7 13.8 25.7Z" stroke="#4F4F4F" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/><path d="M25.3 25.7C26.9568 25.7 28.3 24.3569 28.3 22.7C28.3 21.0432 26.9568 19.7 25.3 19.7C23.6431 19.7 22.3 21.0432 22.3 22.7C22.3 24.3569 23.6431 25.7 25.3 25.7Z" stroke="#4F4F4F" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/><path d="M25.7 14.6H11.3C10.7 14.6 10.1 14.2 10 13.6L8.1 6.90001C7.9 6.00001 8.49999 5.20001 9.39999 5.20001H27.5C28.4 5.20001 29.1 6.10001 28.8 6.90001L26.9 13.6C26.9 14.2 26.4 14.6 25.7 14.6Z" stroke="#4F4F4F" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/></svg><p>Корзина</p></a>
            </div>
            <div  className="menu">
              <button onClick={()=> clickBurger(true)}><img src="img/icons/menu.png" alt="" /></button>

              {showMenu && (
                <div className="menu_item">
                <div className="item">
                  <div className="block">
                    <div className="logo">
                      <img className='logoIKT' src="img/logoIKT.png" alt="" />
                      <button onClick={()=> clickBurger(false)}><img className='close' src="img/close.svg" alt="" /></button>
                    </div>
                    <div className="spisok">
                      <ul>
                        <li><a href="">Главная</a></li>
                        <li><a href="">Категории</a></li>
                        <li><a href="">Магазин</a></li>
                        <li><a href="">Контакты</a></li>
                      </ul>
                    </div>
                    <div className="contact">
                        <a href="https://maps.app.goo.gl/yZtsMqB1mRewJQFr5"><img src="img/local5.png" alt="" />Чита ул. Дивизионная 3</a>
                        <a href="tel:+79998889999"><img src="img/phone.svg" alt="" />+7 999 888 99-99</a>
                    </div>
                    <div className="register">
                      <button className='voyti'>Войти</button>
                      <button className='zareg'>Зарегистрироваться</button>
                    </div>
                  </div>
                </div>
              </div>
              )}
            </div>
        </div>
      </div>
      <div className="header_three">
          <div className="container">
            <div className="header_three_item">
            <div></div>
            <ul>
              <li><Link to="/">Главная</Link></li>
              <li><Link to="/categories">Категории</Link></li>
              <li><Link to="/shop">Магазин</Link></li>
              <li><Link to="/contacts">Контакты</Link></li>
            </ul>
              <a href="" className='button'>
                гараж
                <img src="/img/right.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
    </div>
  )
};

export default Header;
