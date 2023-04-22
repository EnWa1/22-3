import React from "react";

export default function MainPage() {
  const handleButtonClick = () => {
    alert("Кнопка нажата!");
  };

  return (
    <div className="main-page">
      <h1>Добро пожаловать на главную страницу</h1>
      <p>Здесь вы можете найти много интересного контента.</p>
      <img src="/images/main-image.jpg" alt="Главное изображение" />
      <ul>
        <li>Пункт 1</li>
        <li>Пункт 2</li>
        <li>Пункт 3</li>
      </ul>
      <button className="main-page-button" onClick={handleButtonClick}>
        Нажми на меня
      </button>
    </div>
  );
}
