// List of reasons. In JSON format (key: value pairs) where the key is a helpful identifier and the value is valid HTML shown to the user.
var reasons = {
	"busy": "I am working on other projects right now.",
	"not-interested": "Your project just does not appeal to me.",
	"diy": "You have put minimal energy into solving the problem yourself. You should use your favorite search engine to find your information. <a href='https://www.google.com/'>Google</a> works nicely :)",
	"ignore-advice": "You have ignored my advice on the subject.",
	"unhelpful": "You have been unhelpful when I tried to help you with your project. How can I help you if you won't let me?",
	"rtfm": "The information is plainly listed in the documentation, which you have obviously not checked.",
	"sleep": "I'm really tired right now. I'm going to place my personal health above the immediate success of your project.",
	"life": "You got me at the wrong time. I have other things to do right now.",
	"teach": "I'm not going to help you, because it will be a good learning experience for you. You will learn better if you try to do it yourself than if I were to just give you the answer.",
	"help": "You ask for help on every single point. I'm not going to do your project for you."
}

// List of ID's. Whenever a reason is added, append the reason to this list.
var IDs = [
	"busy",
	"not-interested",
	"diy",
	"ignore-advice",
	"unhelpful",
	"rtfm",
	"sleep",
	"life",
	"teach",
	"help"
]

var selected = {}

// shows the creator.
function showCreator() {
	Object.keys(reasons).forEach(function(reason) {
		selected[reason] = false;
		var li = document.createElement("li");
		var checkbox = document.createElement("input");
		checkbox.setAttribute("type", "checkbox");
		checkbox.setAttribute("name", reason);
		var label = document.createElement("label");
		label.setAttribute("for", reason);
		label.innerHTML = reasons[reason];
		li.appendChild(checkbox);
		li.appendChild(label);
		document.getElementById("reasons").appendChild(li)
		document.getElementById("reasons").innerHTML += "<br>";
	});
	setTimeout(function() {
		var children = document.getElementById("reasons").children;
		for (var i = 0; i < children.length; i++) {
			if (children[i].firstElementChild.type) {
				children[i].firstElementChild.onchange = updateCreatorOutput;
			}
		}
	}, 1000);
}

function updateCreatorOutput(event) {
	var target = event.target;
	console.log(target);
	selected[target.name] = target.checked;
	var linkID = IDs.map(x=>0);
	Object.keys(selected).filter(reason=>selected[reason]).forEach(function(reason) {
		linkID[IDs.indexOf(reason)] = 1;
	});
	document.getElementById("outputURL").innerText = 'https://legend-of-iphoenix.github.io/cant-help-you/?reason='+parseInt(linkID.join(''), 2).toString(36);
}

window.onload = showCreator;