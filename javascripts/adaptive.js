// $(function(){
	var phoneWidth = parseInt(window.screen.width);
	var phoneScale = phoneWidth / 640;
	var ua = navigator.userAgent;
	if (/Android (\d+\.\d+)/.test(ua)) {
		var version = parseFloat(RegExp.$1);
		if (version > 2.3) {
			document.write('<meta name="viewport" content="width=640, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
		} else {
			document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
		}
	} else {
		if (/Android/.test(ua)) {//火狐浏览器兼容性
			document.write('<meta name="viewport" content="width=device-width, initial-scale=' + phoneScale + ',target-densitydpi=device-dpi,user-scalable=no,maximum-scale=1,   minimum-scale=1" >');
		} else {
			// document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
			document.write('<meta name="viewport" content="width=640, user-scalable=no">');
		}
	}
// });
