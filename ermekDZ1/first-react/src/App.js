import './App.css';
import { Component } from './components/Component';
import { Component2 } from './components/Component';
import Button from './Button/Button';
import Header from './components/Header';
import Classtext from '../src/Text/Text.js'
import Footer from "./Footer/Footer";
import Content from "./Content/Propis";
function App() {
  const menuList = [
    'Main',
    'about',
    'profile',
  ]
  return (
      <div className="App">
        <Header menuList={menuList} />
        <Component
            text={'Component1 fdsafdsa'}
            description={'text for our  12321 212 component'} />
        <Component2 />
        <Button
            clickText={'Click me '}

        />

        <Classtext />
        <Content text={"Пульт От Ядерки в интернет-магазине OZON по низким ценам! Большой выбор, скидки и акции! Рассрочка и быстрая доставка!"} />
        <Footer />
      </div>
  );
}

export default App;