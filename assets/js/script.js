// ボタンの要素を取得する
const button = document.getElementById('sendButton');

// ボタンのクリックイベントを定義
button.addEventListener('click', function(){
	// 各要素を取得して変数に代入
	const name = document.forms.requestForm.fullname.value;
	const zip = document.forms.requestForm.zip.value;
	const pref = document.forms.requestForm.pref.value;
	const address1 = document.forms.requestForm.address1.value;
	const address2 = document.forms.requestForm.address2.value;
	const tel = document.forms.requestForm.tel.value;
	const fromto = document.forms.requestForm.fromto;

	console.log('お名前：' + name);
	console.log('郵便番号：' + zip);
	console.log('都道府県：' + pref);
	console.log('住所：' + address1);
	console.log('マンション・アパート：' + address2);
	console.log('電話番号：' + tel);
	for(let i = 0; i < fromto.length; i++) {
		if (fromto[i].checked) {
			console.log('知ったきっかけ：' + fromto[i].value);
		}
	}

	// エラーメッセージを表示するエリアを取得
	const errorMessageArea = document.getElementById("errorMessage");
	// ボタンを押されるたびに表示をクリアする
	errorMessageArea.textContent = '';
	if (name == "") {
		const p = document.createElement('p');
		p.textContent = 'お名前を入力してください';
		errorMessageArea.appendChild(p);
	}
	if (zip == "") {
		const p = document.createElement('p');
		p.textContent = '郵便番号を入力してください';
		errorMessageArea.appendChild(p);
	}
	if (pref == "") {
		const p = document.createElement('p');
		p.textContent = '都道府県を入力してください';
		errorMessageArea.appendChild(p);
	}
	if (address1 == "") {
		const p = document.createElement('p');
		p.textContent = '住所を入力してください';
		errorMessageArea.appendChild(p);
	}
	if (tel == "") {
		const p = document.createElement('p');
		p.textContent = '電話番号を入力してください';
		errorMessageArea.appendChild(p);
	}
});
