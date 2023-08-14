const expositionFunctions = [
	{delay:0.75,func:function(){d.element("exposition").style["font-size"]="35px";d.innerHTML("exposition","IS")}},
	{delay:0.75,func:function(){d.element("exposition").style["font-size"]="40px";d.innerHTML("exposition","NOT")}},
	{delay:0.75,func:function(){d.element("exposition").style["font-size"]="45px";d.innerHTML("exposition","A")}},
	{delay:0.75,func:function(){d.element("exposition").style["font-size"]="50px";d.innerHTML("exposition","WEBPAGE")}},
	{delay:2,func:function(){d.innerHTML("exposition","")}},
	{delay:2,func:function(){d.element("exposition").style["font-size"]="30px";d.innerHTML("exposition","THIS")}},
	{delay:0.75,func:function(){d.element("exposition").style["font-size"]="40px";d.innerHTML("exposition","IS")}},
	{delay:0.75,func:function(){d.element("exposition").style["font-size"]="50px";d.innerHTML("exposition","A BLANK CANVAS")}},
	{delay:2,func:function(){d.innerHTML("exposition","")}},
	{delay:2,func:function(){d.element("exposition").style["font-size"]="30px";d.innerHTML("exposition","THIS")}},
	{delay:0.75,func:function(){d.element("exposition").style["font-size"]="40px";d.innerHTML("exposition","IS")}},
	{delay:0.75,func:function(){d.element("exposition").style["font-size"]="50px";d.innerHTML("exposition","A BLACK COMPUTER SCREEN")}},
	{delay:2,func:function(){d.innerHTML("exposition","")}},
	{delay:2,func:function(){d.element("exposition").style["font-size"]="30px";d.innerHTML("exposition","THIS")}},
	{delay:0.75,func:function(){d.element("exposition").style["font-size"]="35px";d.innerHTML("exposition","IS")}},
	{delay:0.75,func:function(){d.element("exposition").style["font-size"]="40px";d.innerHTML("exposition","NOT")}},
	{delay:0.75,func:function(){d.element("exposition").style["font-size"]="50px";d.innerHTML("exposition","A VUE CINEMAS RIPOFF")}},
	{delay:2,func:function(){d.innerHTML("exposition","")}},
	{delay:2,func:function(){d.element("exposition").style["font-size"]="30px";d.innerHTML("exposition","THIS")}},
	{delay:2,func:function(){d.element("exposition").style["font-size"]="40px";d.innerHTML("exposition","IS")}},
]
function mainDivImage() {
	let progress = (Date.now()/1e4)%1
	if (progress < 0.5) return "repeating-radial-gradient(circle,hsl(270 100% "+(20-progress*20)+"%),hsl(270 100% 20%) "+(progress*20)+"%, hsl(270 100% 10%) "+(10+progress*20)+"%, hsl(270 100% "+(20-progress*20)+"%) 20%)"
	else return "repeating-radial-gradient(circle,hsl(270 100% "+(progress*20)+"%),hsl(270 100% 10%) "+(progress*20-10)+"%, hsl(270 100% 20%) "+(progress*20)+"%, hsl(270 100% "+(progress*20)+"%) 20%)"
}
for (let i=0;i<12;i++) {
	d.element("mainDiv").innerHTML += "<div class=\"node\" id=\"node"+i+"\" style=\"display:none\" onClick=\"nodeAction('"+i+"')\"><h4 id=\"node"+i+"Heading\"></h4><hr><p id=\"node"+i+"Description\"></p></div>"
}
const nodeHeight = d.element("dummyNode").offsetHeight
const nodeWidth = d.element("dummyNode").offsetWidth
function maxNodes() {
	return Math.floor((1+d.element("mainDiv").offsetHeight/(nodeHeight+20))/2)*Math.floor((1+d.element("mainDiv").offsetWidth/(nodeWidth+20))/2)
}
function numberOfNodes() {
	return Math.min(12,nodes.length,maxNodes()>6?Math.floor(5.5+Math.sqrt(maxNodes()-5.75)):maxNodes())
}
var currentNodes = Array(12).fill({id:-1,coordinates:[-999,-999],animationStart:Infinity})
var unusedNodes = []
function getNextNodeId() {
	if (unusedNodes.length == 0) {unusedNodes = countTo(nodes.length,true)}
	return unusedNodes.splice(0,1)[0]
}
function checkCoordinatesForOverlap(array,next) {
	for (let i of array) {
		if ((Math.abs(i[0]-next[0])<nodeWidth+20)&&(Math.abs(i[1]-next[1])<nodeHeight+20)) {
			return true
		}
	}
	return false
}
function prepNode(id) {
	if (id<numberOfNodes()) {
		let nextCoordinates = []
		let coordinateAttempts = 0 // after 100 attempts the nodes will simply overlap instead of the page crashing
		do {
			nextCoordinates = [ranint(10,document.getElementById("mainDiv").offsetWidth-nodeWidth-10),ranint(10,document.getElementById("mainDiv").offsetHeight-nodeHeight-10)]
		} while (checkCoordinatesForOverlap(currentNodes.map(x=>x.coordinates),nextCoordinates))
		let nextId
		do {
			nextId = getNextNodeId()
		} while (currentNodes.map(x=>x.id).includes(nextId))
		currentNodes[id] = {id:nextId,coordinates:nextCoordinates,animationStart:Date.now()+8000*Math.random()}
		let marker = nodes[nextId].marker ?? "basic"
		let color = (markerData[marker]==undefined)?"0,0,255":markerData[marker].color
		d.element("node"+id).style["background-color"] = "rgba("+color+",0.25)"
		d.element("node"+id).style.color = "rgb("+color+")"
		d.innerHTML("node"+id+"Heading",nodes[nextId].name)
		if (markerData[nodes[nextId].marker] !== undefined) d.element("node"+id+"Heading").innerHTML += "<br><span style=\"font-size:12px;font-weight:400\">"+markerData[nodes[nextId].marker].nodeDesc+"</span>"
		d.innerHTML("node"+id+"Description",nodes[nextId].outline)
		d.element("node"+id).style.left = nextCoordinates[0]+"px"
		d.element("node"+id).style.top = nextCoordinates[1]+"px"
	} else {
		currentNodes[id].animationStart = Infinity
	}
}
function removeNode(id) {
	currentNodes[id] = {id:-1,coordinates:[-999,-999],animationStart:Infinity}
}
function nodeAction(id) {
	let node = nodes[currentNodes[id].id]
	if (node.marker == "clickable") {
		currentNodes.animationStart=0
		node.onClick()
	} else {
		d.display("popupTab","inline-block")
		d.innerHTML("popup",(Object.keys(markerData).includes(node.marker)?("<p style=\"color:rgb("+(markerData[node.marker].color??"0,0,255")+")\">"+markerData[node.marker].popupDesc+"</p>"):"")+node.description+"<br><a href=\""+node.link+"\" target=\"_blank\"><button>Open</button></a><button onClick=\"d.display('popupTab','none')\">Close</button>")
	}
}
var expositionProgress = 0
var expositionFrameStart = Date.now()
var timeOpened = Date.now()
var automator = window.setInterval(function(){
	d.element("mainDiv").style["background-image"] = mainDivImage()
	if (expositionProgress < expositionFunctions.length) {
		if (Date.now()-expositionFrameStart>expositionFunctions[expositionProgress].delay*1000) {
			expositionFunctions[expositionProgress].func()
			expositionProgress++
			expositionFrameStart = Date.now()
		}
		d.element("exposition").style.opacity = 1-0.0002*(Date.now()-timeOpened)/expositionFunctions.map(x=>x.delay).reduce((x,y)=>x+y)
	} else {
		d.innerHTML("exposition","IS"+Array(Math.ceil((Date.now()-expositionFrameStart)/1000)).join("."))
		if (Date.now()-expositionFrameStart<5000) {
			d.element("exposition").style.opacity = (1-0.0002*(Date.now()-timeOpened)/expositionFunctions.map(x=>x.delay).reduce((x,y)=>x+y))*Math.cos((Date.now()-expositionFrameStart)*Math.PI/1e4)
		} else {
			d.display("exposition","none")
		}
		for (let i=0;i<12;i++) {
			let animationProgress = Date.now()-currentNodes[i].animationStart
			if (i<numberOfNodes()||animationProgress<8000) {
				if (currentNodes[i].id==-1) prepNode(i)
				if (animationProgress<0||currentNodes[i].id==-1) {
					d.display("node"+i,"none")
				} else if (animationProgress<8000) {
					d.display("node"+i,"inline-block")
					d.element("node"+i).style.opacity = (animationProgress/2000)-(animationProgress**2/1.6e7)
				} else {
					d.display("node"+i,"none")
					prepNode(i)
				}
			} else {
				if (currentNodes[i].id!==-1) currentNodes[i].id=-1
			}
		}
	}
	let activeNotifications = document.getElementsByClassName("notification")
	for (let i=activeNotifications.length-1;i>=0;i--) {
		let element = activeNotifications[i]
		let timeSinceIn = Date.now()-element.dataset.in
		let timeSinceOut = Date.now()-element.dataset.out
		element.style.left = (timeSinceIn<500)?(((1-4.8e-3*timeSinceIn+5.6e-6*timeSinceIn**2)*element.offsetWidth)+"px"):(timeSinceOut>0)?((element.offsetWidth*(timeSinceOut/500)**2)+"px"):"0px"
		if (timeSinceOut>500) element.remove()
	}
},50)
var animationSkips = 0
function animationSkip() {
	if (animationSkips == 9) {
		expositionProgress = expositionFunctions.length
		expositionFrameStart = Date.now()-5000
	} else {
		animationSkips++
	}
}