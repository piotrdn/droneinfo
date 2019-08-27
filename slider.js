function alldokupy(){
var numer = Math.floor(Math.random()*5)+1;	
		
		var timer1 =0;
		var timer2 =0;
		
		var timer3 =0;
		
		function ustawslajd(nrslajdu)
		{
			clearTimeout(timer1);
			clearTimeout(timer2);
			
			schowaj();
			setTimeout("zmienslajd()", 500);
			numer = nrslajdu -1;
		
		}
		
		function schowaj()
		{
			dezactivebutton();
			timer3 = setTimeout("activebutton()", 1000);
			$("#slider").fadeOut(500);   <!-- jQuery -->			
		}

		function zmienslajd()
		{
			numer++; if (numer>5) numer=1;                     <!-- zwiêkszanie numeru dla obrazów o jeden co ka¿de wywo³anie funkcji -->
			var plik = "<img src=\"slajdyx/slajd" + numer + ".jpg\" />";   <!-- sprytne zmienianie numerów obrazków -->

			document.getElementById("slider").innerHTML = plik;
			
			$("#slider").fadeIn(500);  <!-- Biblioteka jQuery uchwyt do momentu fadeIn-->
			
			   
			timer1 = setTimeout("zmienslajd()", 5000);  <!-- zmienia slajd co 5sec -->
			timer2 = setTimeout("schowaj()", 4500);
				
		}
		
		function activebutton()
		{
		
			button = document.getElementById("button1");
			button.disabled=false;
			button = document.getElementById("button2");
			button.disabled=false;
			button = document.getElementById("button3");
			button.disabled=false;
			button = document.getElementById("button4");
			button.disabled=false;
			button = document.getElementById("button5");
			button.disabled=false;
			
			
		}
		
		function dezactivebutton()
		{
		
			button = document.getElementById("button1");
			button.disabled=true;
			button = document.getElementById("button2");
			button.disabled=true;
			button = document.getElementById("button3");
			button.disabled=true;
			button = document.getElementById("button4");
			button.disabled=true;
			button = document.getElementById("button5");
			button.disabled=true;
			
		
		}

}