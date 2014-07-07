<script type="text/javascript"><!--
window.onload = function(){
    navigator.geolocation.watchPosition();
}

function currentplace(position){
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var routemap = 'comgooglemaps://?saddr='+lat+','+lng+'&daddr=目的地&directionsmode=walking';
    // 「目的地」の入力例
    // 北緯東経を使う場合
    // var routemap = 'comgooglemaps://?saddr='+lat+','+lng+'&daddr=35.712924,139.705445&directionsmode=walking';
    // 住所を使う場合
    // var routemap = 'comgooglemaps://?saddr='+lat+','+lng+'&daddr=新宿区高田馬場1丁目26-12&directionsmode=walking';

    location.href = routemap;
}
// --></script>
