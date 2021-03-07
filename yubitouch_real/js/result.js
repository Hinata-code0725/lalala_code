// <!DOCTYPE html>
// <html lang="ja">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>

// {/* URLのパラメーターを取得 */}
// let v = new URLSearchParams(window.location.search);
// {/* URLのパラメーターのうち検索されたキーワードを取得 */}
// v = v.get('search-key');
// {/* 検索したい全てのURLを配列に格納 */}
// const urlLists = [
//     "/data/xml/",
//     "/site-speed/asynchronous/",
//     "/site-speed/for_while/",
//     "/site-speed/async-2/"];
//     $.each(urlLists, function(i){
//     $.ajax({
//     url: urlLists[i],
//     dataType : 'html',
//     success: function(data){
// 　　　   //上記のURLからキーワードを探す
//         if( $(data).find("#article").text().indexOf(v) !== -1){
// 　　　　　　//あれば、ページを表示する
//         $('<li><a href="' + urlLists[i] + '">' +$(data).find("h1").text() + '</a></li>').appendTo('ul');
//         }
//         },
//         error: function(data){
//         console.log("error")
//         }
//     });
//     });
// <body>
    
// </body>
