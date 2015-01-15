	var resultado ;
	var pontos=0;
	var vida=3;
	var positionX = 750;

	var myMusic = document.getElementById("myMusic");  
	function playMus()  {
		myMusic.play();
	}
	playMus(); 

 
 
// imagens
	var boss = new Image();
	var megaman = new Image();
	var background = new Image();

	boss.src="imagens/boss2.png";
	background.src="imagens/fundo2.jpg";
	megaman.src = "imagens/x0.png";


	//canvas
	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');

	<!-- draw do megaman X -->

	context.translate(0,0 );
	megaman.onload = function() {
		context.drawImage(megaman, 0,570);
	};

	<!-- draw do cenario -->
	context.translate(0,0 );
	boss.onload = function() {
		context.drawImage(background, 0,0);
	};

	  <!-- draw do boss + placa -->

	 background.onload = function(){
		context.drawImage(boss, 750,350);

		<!-- Placa com os resultados -->
		context.beginPath();
		context.rect(815, 450, 70, 180);       // rect recebe ( X inicio , Y inicio,  X final, Y final) para montar um retangulo 
		context.fillStyle = 'yellow';
		context.fill();
		context.lineWidth = 7;
		context.strokeStyle = 'black';
		context.stroke();
		
		function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		var a = getRandomInt(1, 5);
		var b = getRandomInt(1, 5);
		resultado = a * b; 

		<!-- posicao dos numeros / texto -->
		context.font = '20pt Arial';
		context.fillStyle = 'black';
		context.fillText(a ,840, 510);  	  // fillTtext recebe (texto, posicao X, posicao Y )
		context.fillText('x' ,840, 550);
		context.fillText(b ,840, 590);
		context.fillText('Vida: ',500,100);
		context.fillText(vida,570,100);
		context.fillText('Pontos: ',500,130);
		context.fillText(pontos,600,130);
	};

	count = 11;

	function start(){
		if( count == 0 ){
			if( vida == 0 ){
				context.font = '60pt Arial';
				context.fillStyle = 'black';
				context.fillText('Game Over!',300, 370);
				document.getElementById("butao").disabled = true;
			}else{
				positionX = positionX - 250;
				context.clearRect(0, 0, canvas.width, canvas.height);
				context.drawImage(background, 0,0);
				context.drawImage(megaman, 0,570);
				context.drawImage(boss, positionX, 350);


				vida = vida - 1;
				context.fillText('Vida: ',500,100);
				context.fillText(vida,570,100);
				context.fillText('Pontos: ',500,130);
				context.fillText(pontos,600,130);
			
				context.beginPath();
				context.rect(positionX+70, 450, 70, 180);       // rect recebe ( X inicio , Y inicio,  X final, Y final) para montar um retangulo 
				context.fillStyle = 'yellow';
				context.fill();
				context.lineWidth = 7;
				context.strokeStyle = 'black';
				context.stroke();

				function getRandomInt(min, max) {
					return Math.floor(Math.random() * (max - min + 1)) + min;
				}

				var a = getRandomInt(1, 5);
				var b = getRandomInt(1, 5);

				resultado = a * b; 

				context.font = '20pt Arial';
				context.fillStyle = 'black';
				context.fillText(a ,positionX+100, 510);  	  // fillTtext recebe (texto, posicao X, posicao Y )
				context.fillText('x' ,positionX+100, 550);
				context.fillText(b ,positionX+100, 590);
				context.fillText('Vida: ',500,100);
				context.fillText(vida,570,100);
				context.fillText('Pontos: ',500,130);
				context.fillText(pontos,600,130);
				
				count = 11;//seta o contador para 10
				setTimeout('start();',1000);
			}
		}else{
			if( vida != 0 ){
				count = count - 1;
				tempo.innerText=count;
				setTimeout('start();',1000);
			}else{
				context.font = '60pt Arial';
				context.fillStyle = 'black';
				context.fillText('Game Over!',300, 370);
				document.getElementById("butao").disabled = true;
			}
		};
	}

function teste(){
	var inputResultado = document.getElementById("resultado");
	var valor = inputResultado.value;

	if (resultado == valor){
		context.clearRect(0,0, canvas.width, canvas.height);
		context.drawImage(background, 0,0);
		context.drawImage(megaman, 0,570);
		context.drawImage(boss, positionX,350);


		pontos=pontos+1;
		context.fillText('Pontos: ',500,130);
		context.fillText(pontos,600,130);
		context.fillText('Vida: ',500,100);
		context.fillText(vida,570,100);
		context.beginPath();
		context.rect(positionX+70, 450, 70, 180);       // rect recebe ( X inicio , Y inicio,  X final, Y final) para montar um retangulo 
		context.fillStyle = 'yellow';
		context.fill();
		context.lineWidth = 7;
		context.strokeStyle = 'black';
		context.stroke();
		function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		var a = getRandomInt(1, 5);
		var b = getRandomInt(1, 5);

		resultado = a * b; 

		context.font = '20pt Arial';
		context.fillStyle = 'black';
		context.fillText(a ,positionX+100, 510);  	  // fillTtext recebe (texto, posicao X, posicao Y )
		context.fillText('x' ,positionX+100, 550);
		context.fillText(b ,positionX+100, 590);
		context.fillText('Vida: ',500,100);
		context.fillText(vida,570,100);
		context.fillText('Pontos: ',500,130);
		context.fillText(pontos,600,130);

		count = 11;
	}else{
		positionX= positionX-250;
		context.clearRect(0,0, canvas.width, canvas.height);
		context.drawImage(background, 0,0);
		context.drawImage(megaman, 0,570);
		context.drawImage(boss, positionX, 350);
		
		vida=vida-1;
		context.fillText('Vida: ',500,100);
		context.fillText(vida,570,100);
		context.fillText('Pontos: ',500,130);
		context.fillText(pontos,600,130);
		
		context.beginPath();
		context.rect(positionX+70, 450, 70, 180);       // rect recebe ( X inicio , Y inicio,  X final, Y final) para montar um retangulo 
		context.fillStyle = 'yellow';
		context.fill();
		context.lineWidth = 7;
		context.strokeStyle = 'black';
		context.stroke();

		function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		var a = getRandomInt(1, 5);
		var b = getRandomInt(1, 5);

		resultado = a * b; 

		<!-- posicao dos numeros / texto -->
		context.font = '20pt Arial';
		context.fillStyle = 'black';
		context.fillText(a ,positionX+100, 510);  	  // fillTtext recebe (texto, posicao X, posicao Y )
		context.fillText('x' ,positionX+100, 550);
		context.fillText(b ,positionX+100, 590);
		context.fillText('Vida: ',500,100);
		context.fillText(vida,570,100);
		context.fillText('Pontos: ',500,130);
		context.fillText(pontos,600,130);
	
		count = 11;
	}
}
	/* o X do boss + 30 e o texto é mais 50
	O Y do boss + 200 para a caixa e mais 250 para o texto 
	*/
