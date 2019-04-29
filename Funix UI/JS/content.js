$(document).ready(function() {
	if($(".sequence-nav").length > 0)
	{
		// Append Style to head
		var style = "#list-container {position: fixed; z-index: 100; } #list-container #list{height: 220px; overflow: auto; border: 2px solid black; } #list-container #list-button{margin-left: auto; margin-right: auto; display: inline-block; z-index: 9; cursor: move; border-radius: 50%; border: 2px solid black; background-color: #EAE7E7; height: 75px; width: 75px; } #list-container #list-button:hover{background-color: white; } #list-container #list-button > i{line-height: 50px; width: 50px; margin: 12px 18px; color: red; font-size: 40px; } #list-container .list-element{padding: 3px 10px; font-family: 'Josefin Sans', sans-serif; font-size: 20px; background-color: rgba(248, 240, 240, 1); line-height: 40px; } #list-container .list-element:hover{background-color: rgba(255, 255, 255, 1); }"
		$("head").append("<style>" + style + "</style>");
		$("head").append($("<link>").attr(
			{
				rel:"stylesheet",
				href: "https://fonts.googleapis.com/css?family=Josefin+Sans",
			}
		));
		$("head").append($("<link>").attr(
			{
				rel:"stylesheet",
				href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css",
				integrity: "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf",
				crossorigin:"anonymous"
			}
		));
		// Creat Float popup
		var ele = $("<div></div>");
		ele.attr({id : "list-container"});
		var button = $("<div></div>");
		button.attr({id: 'list-button'});
		button.append($("<i></i>").attr({class:"fas fa-list"}));
		ele.append(button);
		var listEle = $("<div></div>").attr({id: "list"});
		var itemList = $("#sequence-list").find("li > button");
		itemList.each(function(index, el) {
			let item = $("<div></div>").attr({class: "list-element"})
			item.append($(el).attr("data-page-title"));
			$(item).click(function(event) {
				$(el).trigger( "click" );
				$(".list-element").removeAttr("style");
				$(this).attr({
					style: 'background-color: rgba(223, 245, 192, 1)'
				});
			});
			if($(el).hasClass("active"))
			{
				$(item).attr({
					style: 'background-color: rgba(223, 245, 192, 1)'
				});			
			}	
			listEle.append(item);
		});
		ele.append(listEle);
		$("#content").prepend($(ele));
		// Dragable
		dragElement(ele[0]);
		function dragElement(elmnt) {
		  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
		  if (document.getElementById(elmnt.id + "header")) {
		    /* if present, the header is where you move the DIV from:*/
		    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
		  } else {
		    /* otherwise, move the DIV from anywhere inside the DIV:*/
		    elmnt.onmousedown = dragMouseDown;
		  }

		  function dragMouseDown(e) {
		    e = e || window.event;
		    e.preventDefault();
		    // get the mouse cursor position at startup:
		    pos3 = e.clientX;
		    pos4 = e.clientY;
		    document.onmouseup = closeDragElement;
		    // call a function whenever the cursor moves:
		    document.onmousemove = elementDrag;
		  }

		  function elementDrag(e) {
		    e = e || window.event;
		    e.preventDefault();
		    // calculate the new cursor position:
		    pos1 = pos3 - e.clientX;
		    pos2 = pos4 - e.clientY;
		    pos3 = e.clientX;
		    pos4 = e.clientY;
		    // set the element's new position:
		    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
		  }

		  function closeDragElement() {
		    /* stop moving when mouse button is released:*/
		    document.onmouseup = null;
		    document.onmousemove = null;
		  }
		}
		$(button).dblclick(function(event) {
			$(listEle).toggle("slow/400/fast");
		});
		$(listEle).toggle();
		$(".sequence-nav").hide();		
	}
});