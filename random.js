const getRandomNumber = n => Math.floor(Math.random() * n)
const getRandomColor = () => {
    const h = getRandomNumber(360);
    const s = getRandomNumber(100);
    const l = getRandomNumber(100);
   
    return `hsl(${h}deg, ${s}%, ${l}%)`;
  };

document.body.style.backgroundColor = getRandomColor();
