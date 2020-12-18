function myFunction() {

  var textField = $('#pedido');
  var pedido = document.getElementById("pedir_abacaxi").value;
  var qtd_pedido = document.getElementById("sorvete_qtd").value;
  alert("Você adicionou " + qtd_pedido + ' '+ pedido + 'Ao pedido.');
  textField.val(textField.val()+ pedido + ' - ' + qtd_pedido + ' und');
}
function enviarPedido() {
  var pedidoCompleto = document.getElementById('pedido').value;
  window.open('https://api.whatsapp.com/send?phone=5538999133051&text='+ pedidoCompleto);

}
