window.onload = function() {

	var dias = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do']
	var mes = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE']

	//creamos objeto fecha y calculamos los días que tiene el mes, al usar miFecha.getFullYear() ya tendremos correcto el año bisiesto
	var miFecha = new Date();
	var diasDelMes = (Date.UTC(miFecha.getFullYear(), miFecha.getMonth() + 1, 1) - Date.UTC(miFecha.getFullYear(), miFecha.getMonth(), 1)) / 1000 / 60 / 60 / 24;

	//centramos div
	document.getElementById("calendario").style.left = (document.body.clientWidth - 600) / 2 + "px";

	//creamos variables para usarlas como nodos y redimensionamos la tabla
	var th, tr, td, text;
	var table = document.getElementsByTagName("table")[0];
	table.style.width = "300px";
	table.style.height = "300px";
	table.style.margin = "10px auto";

	//CAPTION como cabecera de la tabla, donde irá "MES de AÑO"
	var caption = document.createElement("caption");
	var captionText = document.createTextNode(mes[miFecha.getMonth()] + " DE " + miFecha.getFullYear());
	caption.appendChild(captionText);
	table.appendChild(caption);

	//creamos los días de la tabla
	tr = document.createElement("tr");
	for (var i = 0; i < 7; i++) {
		th = document.createElement("th");
		text = document.createTextNode(dias[i]);
		th.appendChild(text);
		tr.appendChild(th);
	}
	table.appendChild(tr);

	//Creamos calendario, num serán los días y dateTemp una fecha temporal para saber por cual día empieza el mes miFecha.getMonth() del año miFecha.getFullYear() (para saber bisiestos)
	var num = 1;
	var dateTemp = new Date(miFecha.getFullYear() + '-' + (miFecha.getMonth() + 1) + '-1');

	for (var i = 0; i < 6; i++) {
		tr = document.createElement("tr");
		for (var j = 1; j < 8; j++) {

			td = document.createElement("td");
			if ((((j < dateTemp.getDay()) || (dateTemp.getDay() == 0 && j != 7)) && i == 0) || (num > diasDelMes)) {

				text = document.createTextNode("");
				td.appendChild(text);

			} else {
				text = document.createTextNode(num++);
				td.appendChild(text);
			}

			tr.appendChild(td);

		}
		table.appendChild(tr);
	}

}
