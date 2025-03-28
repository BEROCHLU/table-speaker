'use strict';

// クリックイベントの設定
$('#table_speaker').on('click', '.speaker', function () {

    const $td = $(this).closest('td');
    const $row = $td.closest('tr');
    const speechText = $row.find('td:nth-child(4)').text().trim(); // 英語列のテキストを取得

    const utterThis = new SpeechSynthesisUtterance(speechText);
    utterThis.rate = 0.8;
    utterThis.lang = 'en-US'; //chromeにはブラウザの言語が英語でないと初回再生されないバグがある

    window.speechSynthesis.cancel(); // 既存の音声をキャンセル
    window.speechSynthesis.speak(utterThis);

    console.log(speechText);
});

// ページロード時の処理
$(document).ready(function () {
    // 番号を自動で振る
    $('#table_speaker tbody tr').each(function (index) {
        if (index === 0) return; // ヘッダー行はスキップ
        $(this).find('.row-number').text(index);
    });
});

/* tableをdatatableにしてexcelかcsvを読み込んでテーブルを動的に生成するようにしたい
(async () => {
    const url = `./csv/sakubun.xlsx`;
    const data = await (await fetch(url)).arrayBuffer();
    const workbook = XLSX.read(data);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];

    const collection = XLSX.utils.sheet_to_json(worksheet, {
        range: worksheet['!ref']
    });

    console.log(collection);
})();*/