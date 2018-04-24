window.onload = function () {
	var reasonData = location.search.split('=')[1];
	if (reasonData === undefined || reasonData == "0") {
		location.href = "creator/"
	} else {
		var reasonList = [];
		reasonData = parseInt(reasonData, 36).toString(2).padStart(reasons.length,0).split(''); // convert to binary
		var selectedOptions = reasonData.map((x,y)=>x=="1"?reasons[y]:false).filter(x=>x);
		selectedOptions.map(x=>gtag('event', "cant-help-you", {'event_category':'engagement','event_label': x}));
		if (1 == reasonData.reduce((accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue))) { // if only one reason was selected
			var reasonString = reasons[reasonData.indexOf("1")];
			document.getElementById("reasonStart").innerHTML = " because "+(["I","I'm"].indexOf(reasonString.match(/\w*/)[0]) === -1 ? reasonString.charAt(0).toLowerCase() : "I") + reasonString.substring(1);
		} else {
			reasonData.forEach(function(value, index) {
				// if the binary bit is set to 1, add the reason to the list.
				if (value === "1") {
					var li = document.createElement("li");
					li.innerHTML = reasons[index];
					document.getElementById("reasons").appendChild(li)
					document.getElementById("reasons").innerHTML += "<br>";
				}
			});
		}
	}
}