function reloj(){ 
	var reloj = document.getElementById('reloj');
	var hora = document.getElementById('hora');
	var minuto = document.getElementById('minuto');
	var segundo = document.getElementById('segundo');
	var timezone = document.getElementById('timezone');
	var m = moment();

	//hora alarma ('0' + 4).slice(-2)
  var horaValue = ('0' + hora.options[hora.selectedIndex].value).slice(-2);
  var minutoValue = ('0' + minuto.options[minuto.selectedIndex].value).slice(-2);
  var segundoValue = ('0' + segundo.options[segundo.selectedIndex].value).slice(-2);

  //timezone
  var tzValue = timezone.options[timezone.selectedIndex].value;
  var strHoraAlarma = horaValue + ":" + minutoValue + ":" + segundoValue;
  var current = m.tz(tzValue).format("hh:mm:ss a");


  if(strHoraAlarma === m.tz(tzValue).format("hh:mm:ss")){
  	var snd = new Audio("vendor/wav/alarm.wav"); // buffers automatically when created
  	snd.play();
  }
	reloj.innerHTML = current; 
  
}


function populateArray(num,start){
	var array = [];
	for (var i = ((start == 0)?start:1); i <= num; i++) 
		array.push(i);
	return array;
}

function populateSelect(select, langArray){
	
	for(element in langArray)
	{
	   var opt = document.createElement("option");
	   opt.value = (typeof langArray[element] == "number") ? (('0' + langArray[element]).slice(-2)):langArray[element];
	   opt.innerHTML = (typeof langArray[element] == "number") ? (('0' + langArray[element]).slice(-2)):langArray[element];
	  select.appendChild(opt);
	}
} 

+function () {

  document.addEventListener('DOMContentLoaded', function () {
  	  	
  	populateSelect(document.getElementById('hora'),populateArray(12));

  	populateSelect(document.getElementById('minuto'),populateArray(59,0));
  	populateSelect(document.getElementById('segundo'),populateArray(59,0));
  	populateSelect(document.getElementById('timezone'),moment.tz.names());
  	 //sound

  	setInterval(reloj, 1000);
  });

}();
