$(document).on('click','#start',function(){
    pergunta1();
    var x = 0, erro = 0;

    function confirma1(buttonIndex){
      if(buttonIndex == "1"){
        navigator.notification.beep(1);  
        pergunta2();
        x++; 
        erro = 0;
      }
      else{
        erro++;
        if(erro == 1){
          x = x-1;
        }
        pergunta1();
        navigator.vibrate(1000);
      }
    }
    function confirma2(buttonIndex){
      if(buttonIndex == "2"){
        navigator.notification.beep(1);  
        pergunta3();  
        x++;  
        erro = 0;   
      }
      else{
        erro++;
        if(erro == 1){
          x = x-1;
        }
        pergunta2();
        navigator.vibrate(1000);
      }
    }
    function confirma3(buttonIndex){
      if(buttonIndex == "2"){
        navigator.notification.beep(1);  
        pergunta4();   
        x++;   
        erro = 0; 
      }
      else{
        erro++;
        if(erro == 1){
          x = x-1;
        }
        pergunta3();
        navigator.vibrate(1000);
      }
    }
    function confirma4(buttonIndex){
      if(buttonIndex == "1"){
        navigator.notification.beep(1);  
        pergunta5();
        x++;       
        erro = 0;
      }
      else{
        erro++;
        if(erro == 1){
          x = x-1;
        }
        pergunta4();
        navigator.vibrate(1000);
      }
    }
    function confirma5(buttonIndex){
      if(buttonIndex == "1"){
        navigator.notification.beep(1);  
        x++; 
        erro = 0;
        final();   
      }
      else{
        erro++;
        if(erro == 1){
          x = x-1;
        }
        pergunta5();
        navigator.vibrate(1000);
      }
    }

  function pergunta1(){
    navigator.notification.confirm("Qual das alternativas tem dois zeros dois quatro?", confirma1, "Pergunta 1", ['0024','0044']);
  }
  function pergunta2(){
    navigator.notification.confirm("Qual o oposto de 'Subi no ônibus'?", confirma2, "Pergunta 2", ['Subinô on ibus','Desci do ônibus']);
  }
  function pergunta3(){
    navigator.notification.confirm("Qual o contrário de 'Simpatia'?", confirma3, "Pergunta 3", ['Antipatia','Nãopotio']);
  }
  function pergunta4(){
    navigator.notification.confirm("Se a soma dos ângulos internos de um quadrado é 360° e um círculo é 360°, um quadrado é igual à um círculo?", confirma4, "Pergunta 4", ['Não','Sim']);
  }
  function pergunta5(){
    navigator.notification.confirm("Você sabe qual a raiz quadrada de 1987367?", confirma5, "Pergunta 5", ['Não','Sim']);
  }
  function final(){
    $('.acertos').addClass('final');
    $('.acertos h4 strong').html('Você acertou: '+x+'/5!');
  }
});
