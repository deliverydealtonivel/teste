function calcularIMC() {
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);

  if (!peso || !altura) {
    alert('Por favor, preencha peso e altura!');
    return;
  }

  const imc = peso / (altura * altura);

  // Redireciona para página de resultado
  window.location.href = `resultado.html?imc=${imc}`;
}
