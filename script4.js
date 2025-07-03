  function selecionarCarro(modelo) {
    document.getElementById('formMotorista').classList.remove('oculto');
    document.getElementById('veiculoSelecionado').innerText = "Veículo: " + modelo;
    window.veiculoEscolhido = modelo;
  }
  
  function finalizarAluguel() {
    const nome = document.getElementById('nomeMotorista').value;
    const cnh = document.getElementById('cnhMotorista').value;
  
    if (nome && cnh) {
      document.getElementById('mensagemSucesso').innerText = 
        `Aluguel do veículo ${window.veiculoEscolhido} efetuado com sucesso!`;
    } else {
      alert("Preencha todos os dados do motorista.");
    }
  }
  
