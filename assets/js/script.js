// ボタンの要素を取得する
const button = document.getElementById('sendButton');

// ボタンのクリックイベントを定義
button.addEventListener('click', function(){
	// 各フォームの要素を取得して変数に代入
	const name = document.forms.requestForm.fullname.value;
	const zip = document.forms.requestForm.zip.value;
	const pref = document.forms.requestForm.pref.value;
	const address1 = document.forms.requestForm.address1.value;
	const address2 = document.forms.requestForm.address2.value;
	const tel = document.forms.requestForm.tel.value;
	const fromto = document.forms.requestForm.fromto;
	const formtoData = [];

	/* ----- ここから課題① ----- */
	// 取得したデータをコンソールに出力（課題①）
	console.log('お名前：' + name);
	console.log('郵便番号：' + zip);
	console.log('都道府県：' + pref);
	console.log('住所：' + address1);
	console.log('マンション・アパート：' + address2);
	console.log('電話番号：' + tel);
	for(let i = 0; i < fromto.length; i++) {
		if (fromto[i].checked) {
			console.log('知ったきっかけ：' + fromto[i].value);
			formtoData.push(fromto[i].value);
		}
	}
	/* ----- ここまで課題① ----- */

	/* ----- ここから課題② ----- */	
	// エラーメッセージを表示するエリアを取得
	const errorMessageArea = document.getElementById("errorMessage");
	// エラーフラグ（エラーがあった場合はtrue, エラーがなかった場合はfalse）
	let errorFlg = false;
	// ボタンを押されるたびに表示をクリアする
	errorMessageArea.textContent = '';
	if (name == "") {
		const p = document.createElement('p');
		p.textContent = 'お名前を入力してください';
		errorMessageArea.appendChild(p);
		errorFlg = true;
	}
	if (zip == "") {
		const p = document.createElement('p');
		p.textContent = '郵便番号を入力してください';
		errorMessageArea.appendChild(p);
		errorFlg = true;
	}
	if (pref == "") {
		const p = document.createElement('p');
		p.textContent = '都道府県を入力してください';
		errorMessageArea.appendChild(p);
		errorFlg = true;
	}
	if (address1 == "") {
		const p = document.createElement('p');
		p.textContent = '住所を入力してください';
		errorMessageArea.appendChild(p);
		errorFlg = true;
	}
	if (tel == "") {
		const p = document.createElement('p');
		p.textContent = '電話番号を入力してください';
		errorMessageArea.appendChild(p);
		errorFlg = true;
	}
	/* ----- ここまで課題② ----- */	

	if (errorFlg == false) {
		sessionStorage.setItem('keyNameName', name);
		sessionStorage.setItem('keyNameZip', zip);
		sessionStorage.setItem('keyNamePref', pref);
		sessionStorage.setItem('keyNameAddress1', address1);
		sessionStorage.setItem('keyNameAddress2', address2);
		sessionStorage.setItem('keyNameTel', tel);
		sessionStorage.setItem('keyNameFromto', formtoData);
		location.href = 'confirm.html';
	}
});
