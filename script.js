$(document).ready(function(){
  $("#tabela").on('change', function(){
    var selectValor = '#'+$(this).val();
    $('#Camp').children('div').hide();
    $('#Camp').children(selectValor).show();
    
  })
});