import {MouseEvent} from "react"

export const useSpotlight = () => {
      const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const { currentTarget, clientX, clientY } = e;
    
    // Крок А: Дивимося сирі координати миші відносно всього екрану браузера
    console.log('1. Екран браузера:', { clientX, clientY });

    const rect = currentTarget.getBoundingClientRect();
    
    // Крок Б: Дивимося, де зараз на екрані розташована наша "велика коробка" додатка
    console.log('2. Межі контейнера:', { left: rect.left, top: rect.top });
    
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    // Крок В: Фінальні цифри, які підуть у CSS (вже відносно додатка)
    console.log('3. Чисті координати для CSS:', { x, y });
    console.log('------------------------------------');

    currentTarget.style.setProperty('--mouse-x', `${x}px`);
    currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };


    return { handleMouseMove }
}