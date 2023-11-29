const nodes = [
	{
		name:"alemaninc's homepage",
		link:"https://alemaninc.github.io/",
		outline:"Best website ever",
		description:"<ul><span style=\"color:#dc143c\">"+["Hi","You are here","You are trapped here","I̶n̴f̵i̷n̴i̴t̵e̶","E̸t̸e̶r̵n̷a̸l̸","F̵o̶r̴e̶v̸e̸r̸"].map(x=>"<li style=\"list-style-type:'♅ '\">"+x+".</li>").join("")+"</span><li>This link will just take you back to the start of the animation.</li><li>But if you want to see it again, by all means have a click!</li><li>Only at alemaninc.</li>"
	},
	{
		name:"Exotic Matter Dimensions",
		link:"https://alemaninc.github.io/Exotic-Matter-Dimensions/",
		outline:"Best game ever",
		description:nodeBulletPointGenerator(["You are an entity in a multiverse of exotic matter.","Make exotic matter.","Spend exotic matter.","Refine exotic matter.","Reset all your progress for a minuscule reward.","<s>Challenge Celestials.</s>","Brag about your progress on our Discord.","Not much else.","Only at alemaninc."]),
		marker:"highlight"
	},
	{
		name:"infOP",
		link:"https://alemaninc.github.io/infOP/",
		outline:"To transcend 1.8×10<sup>308</sup>",
		description:nodeBulletPointGenerator(["So you need to store numbers above 1.8e+308, but don't know how.","With our full gamut of excellently explained functions, you can work with massive numbers without needing to work with <i>any</i> class, <i>any</i> objects or <i>any</i> strings! Only pure <i>numbers</i>.","Only at alemaninc.","We cannot take responsibility for infOP numbers suddenly and inexplicably becoming NaN."])
	},
	{
		name:"BEA Notations",
		link:"https://alemaninc.github.io/BEA-Notations/",
		outline:"Understand what <i>Exotic Matter Dimensions</i> is about",
		description:nodeBulletPointGenerator(["<code style=\"font-family:Courier New\">break_eternity_alemaninc.js</code> supports lots of large number notations in it, ranging from the logical and intuitive to the absolutely useless.","Here you can convert raw numbers to see what they look like in these notations.","Not vice versa because alemaninc doesn't know how to do that.","Oh, and did we mention that it doesn't work at all yet?","Only at alemaninc."])
	},
	{
		name:"The Ultimate Unit Converter",
		link:"https://alemaninc.github.io/Ultimate-Unit-Converter/",
		outline:"One converter to rule them all and in the darkness bind them",
		description:nodeBulletPointGenerator(["Have you ever found yourself needing to convert between megalines and maxwells? Probably not.","But if you ever do, we have the solution.","Convert between all manner of units quickly and accurately with alemaninc's only product without more than 100 bugs.","Hasn't been updated in over "+(new Date().getUTCFullYear()===2023?"a year":((new Date().getUTCFullYear()-2022)+" years"))+" and probably never will be, but nobody uses this anyways so what's the point?","Only at alemaninc."])
	},
	{
		name:"Zip Points",
		link:"https://alemaninc.github.io/Z-Points/",
		outline:"Bitcoin game gone wrong",
		description:nodeBulletPointGenerator(["There once was a young boy called xhwzwka.","One day, xhwzwka made an incremental game.","But, you can finish it in 5 minutes.","alemaninc, being very virtuous, took it upon himself to make \"Zip Points\" great again.","Only at alemaninc.","If you want to play the original it's <a href=\"https://xhwzwka.github.io/Zip-Points/\" target=\"_blank\">here</a>, by the way."])
	},
	{
		name:"Synergism Calculators",
		link:"https://alemaninc.github.io/Synergism-Calc/",
		outline:"Not related to alemaninc at all",
		description:nodeBulletPointGenerator(["Do you play <i>Synergism</i> by Platonic?","Do you ever find yourself wondering if it's worth your time to enter Challenge 15?","How about which to choose from among Flame, Blaze or Inferno?","What about the best time to buy PL-AT?","Here's an arbitrary assortment of weird calculators and optimizers.","We are genuinely surprised no one else thought of this before us.","Only at alemaninc.","PS: Please don't get addicted to a game requiring this many spreadsheets again."])
	},
	{
		name:"TemPastebin",
		link:"https://github.com/alemaninc/Temp/blob/main/index.html",
		outline:"7 lines of code (no, literally)",
		description:nodeBulletPointGenerator(["We all know about Pastebin.","We all know how notoriously unreliable it is.","Why would anyone ever use Pastebin when this is around?","All you need to do is make a copy of the GitHub repository and insert your paste into line 5!","It's just like a temporary Pastebin. A temPastebin, if you like.","Only at alemaninc."])
	},
	{
		name:"Browser Cookies",
		link:"https://orteil.dashnet.org/cookieclicker/",
		outline:"alemaninc prefers <code>localStorage</code>.",
		description:nodeBulletPointGenerator(["Click the cookie to get cookies.","Spend your cookies to get more cookies.","Can you reach 1 <i>trevigintillion</i> cookies?<br>(That's 1"+Array(25).join("&nbsp;000")+" for any grade schoolers out there)"]),
		marker:"bootleg"
	}
]
function nodeBulletPointGenerator(arr){return "<ul>"+arr.map(x=>"<li>"+x+"</li>").join("")+"</ul>"}
const markerData = {
	highlight:{color:"0,255,255",nodeDesc:"Highlight",popupDesc:"This is the best alemaninc could do. How pathetic..."},
	bootleg:{color:"255,0,0",nodeDesc:"Not by alemaninc! Be careful.",popupDesc:"alemaninc has no control over what goes on on this website, so if you download a virus that is entirely your problem. Sorry!"},
	clickable:{color:"153,102,0",nodeDesc:"Try clicking this!"} // popups don't exist for these
}