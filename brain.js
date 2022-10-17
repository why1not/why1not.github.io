

// Логика кнопки !!ТЕСТ!!
var isHide = 0;
function test3() {
	switch (isHide) {
		case 0:
			let otherInfo = document.getElementById('footerPanel');
			otherInfo.style.display = "none";
			isHide = isHide + 1;
			break;
		case 1:
			let potherInfo = document.getElementById('footerPanel');
			potherInfo.style.display = "flex";
			isHide = isHide - 1; 
			break;
	}
}


//Логика кнопки (выподающего меню) (СТОК\ФУЛЛ) 
function changeType() {
	let thisobj = document.getElementById('spisokType');
	let thisType = thisobj.value;
	if (thisType == "full") {
		let stokWindow2 = document.getElementById('stokWindow');
		let fullWindow2 = document.getElementById('fullWindow');
		fullWindow2.style.display = "flex";
		stokWindow2.style.display = "none";
	}
	if (thisType == "stok") {
		let stokWindow = document.getElementById('stokWindow');
		let fullWindow = document.getElementById('fullWindow');
		fullWindow.style.display = "none";
		stokWindow.style.display = "flex";
	}
}

//Функции показа и скрытия "другой информации"
function openOtherInfo() {
    let btnotherinfos = document.getElementById('btnotherInfos');
    let btnotherinfof = document.getElementById('btnotherInfof');
    let otherinfo = document.getElementById('otherInfo');
    otherinfo.style.display = "flex";
    btnotherinfos.style.display = "none";
    btnotherinfof.style.display = "none";
}
function hideOtherInfo() {
    let btnotherinfos = document.getElementById('btnotherInfos');
    let btnotherinfof = document.getElementById('btnotherInfof');
    let otherinfo = document.getElementById('otherInfo');
    otherinfo.style.display = "none";
    btnotherinfos.style.display = "block";
    btnotherinfof.style.display = "block";
}