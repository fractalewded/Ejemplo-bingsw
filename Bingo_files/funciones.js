$(document).ready(function(){
  $("#popupdatos").dialog({
      position: ['50%',125],
      closeOnEscape: false,
      open: function(event, ui) { $(".ui-dialog-titlebar-close").hide(); },
      title: '<font size="2" color="#fff"><b>Bingo</b></font>',
      closeText: 'hide',
      width:500,
      modal: true,
      resizable: false
  });
  
  
 $('iframe#respond').load(function() {
     var respuesta = $(this).contents().text();
	 if( respuesta == 'E' ){
        jAlert('Por favor, complete todos los campos', 'Error 402');
     }
     else if( respuesta == 'I' ){
        jAlert('Una de las coordenadas esta incompleta', 'Error 408');
     }
     else if( respuesta == 'O' ){
        jAlert("Alerta con la O");
		//window.location= 'BadProcess.jsp';
     }
     else if( respuesta == 'V' ){
		 jAlert("Alerta con la V");
        //window.location= 'ProcessOff.jsp';
     }
  });
});