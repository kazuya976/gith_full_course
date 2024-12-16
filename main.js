// ブラウザ起動イベント
window.onload = function()
{
    const ca = document.getElementById("main");     // mainキャンバスの要素を取得
    const g = ca.getContext("2d");                  // 2d描画コンテキストを取得
    g.fillText("Hello Rabit", 9, 64);
}