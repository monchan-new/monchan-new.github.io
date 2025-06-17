// const { version } = require("react");

// 画像ギャラリーを動かす
// ここでやりたいのは、ギャラリーの各サムネイル画像にイベントリスターをアタッチして
// クリックされたときにメイン画像をサムネイル画像に対応するものに差し替えること
function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  // ">"は直下にあるものしか指定できないことに注意！
  // let thumbnails = document.querySelector("#gallery-thumbs").querySelectorAll("img");
  let mainImage = document.querySelector("#gallery-photo img");
  let asideTitle = document.querySelector("#gallery-info .title");
  let asideDescription = document.querySelector("#gallery-info .description");

  thumbnails.forEach(function(thumbnail) {
    // 大画像をプリロードする
    let newImageSrc = thumbnail.dataset.largeVersion;
    let largeVersion = new Image();
    largeVersion.src = newImageSrc;
    // imageオブジェクト（インスタンス）はWebページのメモリ上に存在するが、画面には表示されないもの
    // そのソース属性を設定するとイメージデータの読み込みがバックグラウンドで（クリックされる前に）行われる

    thumbnail.addEventListener("click", function() {
      // クリックされたサムネイル画像をメイン画像として設定する
      mainImage.setAttribute("src", newImageSrc);

      // 現在選択されている画像の表示をクリックしたものに変更する
      let currentClass = "current"
      document.querySelector("." + currentClass).classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);

      // クリックされたサムネイル画像のalt属性を設定する
      mainImage.setAttribute("alt", thumbnail.alt);
      // クリックされたサムネイル画像のタイトルをアサイドに設定する
      asideTitle.innerHTML = thumbnail.dataset.title;
      // asideTitle.textContent = thumbnail.dataset.title;
      // クリックされたサムネイル画像の説明をアサイドに設定する
      asideDescription.innerHTML = thumbnail.dataset.description;
    });
  });

  alert("ギャラリーファイルからこんにちは！");
}