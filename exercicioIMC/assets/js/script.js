const myescopo = () => {
    const form = document.querySelector('.form');
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    const resultado = document.querySelector('.resultado');
  
    const criaP = () => document.createElement('p');
  
    const setInfo = (msg, isValid) => {
      resultado.style.display = 'flex';
      resultado.innerHTML = '';
  
      const p = criaP();
  
      if (isValid) {
        p.classList.add('resultadoIMC');
      } else {
        p.classList.add('error');
      }
  
      p.innerHTML = msg;
      resultado.appendChild(p);
    };
  
    const recebeEventoForm = (evento) => {
      evento.preventDefault();
  
      const peso = parseFloat(pesoInput.value);
      const altura = parseFloat(alturaInput.value);
  
      if (!peso || isNaN(peso)) {
        setInfo('Peso inválido!', false);
        return;
      }
  
      if (!altura || isNaN(altura)) {
        setInfo('Altura inválida!', false);
        return;
      }
  
      const imc = (peso / (altura ** 2)).toFixed(1);
      let nivel;
  
      if (imc < 18.5) {
        nivel = 'Abaixo do peso';
      } else if (imc <= 24.9) {
        nivel = 'Peso normal';
      } else if (imc <= 29.9) {
        nivel = 'Sobrepeso';
      } else if (imc <= 34.9) {
        nivel = 'Obesidade grau 1';
      } else if (imc <= 39.9) {
        nivel = 'Obesidade grau 2';
      } else {
        nivel = 'Obesidade grau 3';
      }
  
      const msg = `Seu IMC é ${imc} (${nivel})`;
      setInfo(msg, true);
    };
  
    form.addEventListener('submit', recebeEventoForm);
  };
  
  myescopo();
  