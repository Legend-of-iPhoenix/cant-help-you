// List of reasons. In JSON format (key: value pairs) where the key is a helpful identifier and the value is valid HTML shown to the user.
var reasons = [
	"I am working on other projects right now.",
	"Your project just does not appeal to me.",
	"I don't know how to solve your problem, so I cannot help you.",
	"You have put minimal effort into solving the problem yourself. You should use your favorite search engine to find your information. <a href='https://www.google.com/'>Google</a> works nicely :)",
	"You have ignored my advice on the subject.",
	"You have been unhelpful or even hostile when I tried to help you with your project. How can I help you if you won't let me?",
	"The information is plainly listed in the documentation, which you have obviously not checked.",
	"I'm really tired right now. I'm going to place my personal health above the immediate success of your project.",
	"You got me at the wrong time. I have other things to do right now.",
	"I'm not going to help you, because it will be a good learning experience for you. You will learn better if you try to do it yourself than if I were to just give you the answer.",
	"You ask for help on every single point. I'm not going to do your project for you."
]

var selected = reasons.map(x=>0);

// shows the creator.
function showCreator() {
	reasons.forEach(function(reason, index) {
		selected[reason] = false;
		var li = document.createElement("li");
		var checkbox = document.createElement("input");
		checkbox.setAttribute("type", "checkbox");
		checkbox.setAttribute("name", index);
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