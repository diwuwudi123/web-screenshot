window.onload = function () {
	main();
}
async function main() {

	const area_screenshot = $('#area-screenshot');

	// 界面文字设置
	$("#plugin_name").html(chrome.i18n.getMessage("pluginName"));
	$("#create_task").html(chrome.i18n.getMessage("createTask"));
	$("#manage_task").html(chrome.i18n.getMessage("manageTask"));
	$(".desc").html(chrome.i18n.getMessage("desc"));
	area_screenshot.html(chrome.i18n.getMessage('areaScreenshotDesc') + '(Alt+Shift+Q)');
	var value = "base64";
	console.log("value: ", value)
	// 将设置存入本地
	await chrome.storage.sync.set({ model: value });

	// 区域截图
	area_screenshot.on('click', () => {
		chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
			// 通知 content.js 区域截图
			chrome.tabs.sendMessage(tabs[0].id, { type: 'area-screenshot' });
		});
		// 关闭面板 
		window.close();
	});
}
