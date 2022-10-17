//Элементы вне функции

var child_panel = document.getElementById('child_panel');
//var sub_child_panel = document.getElementById('sub_child_panel');
var sub_child_panel2 = document.getElementById('sub_child_panel2');
var inZone = document.getElementById('inneredZone');
var spis = document.getElementById('spisokMain');
//var search = document.getElementById('searchMain');
var footer1 = document.getElementById('footerPanel');
var footer2 = document.getElementById('footerPanel2');
var itemImage = document.getElementById('itemImage');




//Загрузка файла

var xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', false);
xhr.send();
var text = JSON.parse(xhr.responseText);
var resulted = text.list;


//function setOne() {
//	child_panel.style.display = "none";
//	sub_child_panel.style.display = "flex"
//}



//Функция при нажатии на (центральную) кнопку списка.
function setTwo(){
	child_panel.style.display = "none";
	sub_child_panel2.style.display = "flex"


    if (xhr.status != 200) {
        // обработать ошибку
        alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
    } 
	else {
		let index = 0; // Количество оружия ( не скинов! )
		while (index < 199) {
			let createOpt = document.createElement('option'); //Создаёться элемент списка
			createOpt.value = index; //значение Value присваиваеться = номер оружия
			createOpt.innerHTML = resulted[index].name; // в список вставляется название оружия
			console.log(resulted[index].name); // вывод в консоль*
			inZone.insertBefore(createOpt, inZone.children[index]); //Элементы ижут по порядку
			index = index + 1; //Берём следующее оружее
		}

    }
}

























function getInfo() {

	let who = spis.value; // создание переменной со значением (НОМЕР ОРУЖИЯ --> из списка)
	footer1.style.display = "flex";
	footer2.style.display = "none";
    if (xhr.status != 200) {
        // обработать ошибку
        alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
    } 
	else {
		let statNumber = 1;
		while (statNumber<19) {
			console.log(statNumber);
			let stateNumberZone = document.getElementById(String("state"+statNumber));
			switch (statNumber) {
				case 1:
						//stateNumberZone.innerText = resulted[who].numder;
						itemImage.src = "../screenshots/"+resulted[who].numder+".png"
						statNumber++;
				break;
				case 2:
						stateNumberZone.innerText = resulted[who].name;
						statNumber++;
				break;
				case 3:
						stateNumberZone.innerText = resulted[who].series;
						statNumber++;
				break;
				case 4:
						stateNumberZone.innerText = resulted[who].type;
						statNumber++;
				break;
				case 5:
						stateNumberZone.innerText = resulted[who].dm_type;
						statNumber++;
				break;
				case 6:
						stateNumberZone.innerText = resulted[who].damage;
						statNumber++;
				break;
				case 7:
						stateNumberZone.innerText = resulted[who].full_damage;
						statNumber++;
				break;
				case 8:
						stateNumberZone.innerText = resulted[who].clip;
						statNumber++;
				break;
				case 9:
						stateNumberZone.innerText = resulted[who].full_clip;
						statNumber++;
				break;
				case 10:
						stateNumberZone.innerText = resulted[who].box;
						statNumber++;
				break;
				case 11:
						stateNumberZone.innerText = resulted[who].full_box;
						statNumber++;
				break;
				case 12:
						stateNumberZone.innerText = resulted[who].speed;
						let stNZSpeed = document.getElementById('state12f');
						stNZSpeed.innerText = resulted[who].speed;
						statNumber++;
				break;
				case 13:
						stateNumberZone.innerText = resulted[who].range;
						statNumber++;
				break;
				case 14:
						stateNumberZone.innerText = resulted[who].reload;
						statNumber++;
				break;
				case 15:
						stateNumberZone.innerText = resulted[who].price;
						statNumber++;
				break;
				case 16:
						stateNumberZone.innerText = resulted[who].max_dm;
						statNumber++;
				break;
				case 17:
						stateNumberZone.innerText = resulted[who].max_cl;
						statNumber++;
				break;
				case 18:
						stateNumberZone.innerText = resulted[who].max_bo;
						statNumber++;
				break;
				default:
					alert( "ОШИБКА" );
			} 
		}
}}