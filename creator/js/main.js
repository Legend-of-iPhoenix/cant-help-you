var selected = reasons.map(x=>0);

// shows the creator.
function showCreator() {
	reasons.forEach(function(reason, index) {
		selected[reason] = false;
		var li = document.createElement("li");
		var checkbox = document.createElement("input");
		checkbox.setAttribute("type", "checkbox");
		checkbox.setAttribute("name", index);
		checkbox.id = index;
		checkbox.className = "reasonCheckbox";
		var label = document.createElement("label");
		label.setAttribute("for", index);
		label.innerHTML = reason;
		li.appendChild(checkbox);
		li.appendChild(label);
		document.getElementById("reasons").appendChild(li)
		document.getElementById("reasons").innerHTML += "<br>";
	});
	setTimeout(function() {
		var children = document.getElementsByClassName("reasonCheckbox");
		for (var i = 0; i < children.length; i++) {
			children[i].onchange = updateCreatorOutput;
		}
	}, 1000);
}

function updateCreatorOutput(event) {
	var target = event.target;
	console.log(target);
	selected[parseInt(target.name)] = target.checked;
	var linkID = [];
	selected.forEach(function(reason, index) {
		linkID[index] = ~~reason;
	});
	document.getElementById("outputURL").innerText = 'https://legend-of-iphoenix.github.io/cant-help-you/?reason='+parseInt(linkID.join(''), 2).toString(36);
}

window.onload = showCreator;