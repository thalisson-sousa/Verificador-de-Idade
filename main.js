
function verificaIdade() {
    const dataNascimento = document.querySelector('#ano').value
    const resultado = document.querySelector('.resultado')
    const data = new Date()
    const ano = data.getFullYear()

    const idade = ano - dataNascimento

   if (idade <= 12) {
    if (document.getElementById('sexoMasculino').checked) {
      resultado.innerHTML = `Detectamos Menino com ${idade} anos.` + '<img src="img/foto-bebe-m.png">'
    } else if (document.getElementById('sexoFeminino').checked) {
      resultado.innerHTML = `Detectamos Menina com ${idade} anos.` + '<img src="img/foto-bebe-f.png">'
   }
  } else if (idade > 12 && idade < 18 ) {
    if (document.getElementById('sexoMasculino').checked) {
      resultado.innerHTML = `Detectamos Jovem com ${idade} anos.` + '<img src="img/foto-jovem-m.png">'
    } else if (document.getElementById('sexoFeminino').checked) {
      resultado.innerHTML = `Detectamos Jovem com ${idade} anos.` + '<img src="img/foto-jovem-f.png">'
   }
  } else if (idade >= 18 && idade <= 59) {
    if (document.getElementById('sexoMasculino').checked) {
      resultado.innerHTML = `Detectamos Homen com ${idade} anos.` + '<img src="img/foto-adulto-m.png">'
    } else if (document.getElementById('sexoFeminino').checked) {
      resultado.innerHTML = `Detectamos Mulher com ${idade} anos.` + '<img src="img/foto-adulto-f.png">'
   }
  } else if (idade >= 60) {
    if (document.getElementById('sexoMasculino').checked) {
      resultado.innerHTML = `Detectamos Homen com ${idade} anos.` + '<img src="img/foto-idoso-m.png">'
    } else if (document.getElementById('sexoFeminino').checked) {
      resultado.innerHTML = `Detectamos Mulher com ${idade} anos.` + '<img src="img/foto-idoso-f.png">'
   }
  }

}
