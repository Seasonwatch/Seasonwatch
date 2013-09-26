$("document").ready(function() {
$("#content").load("loadtreedata.php?action=get_rows");
	//$("#page_count").val("loadtreedata.php?action=row_count");

	$.get("loadtreedata.php?action=row_count", function(data) {
		//if(data){
		//$("#page_count").val(Math.ceil(data / 10));
		$("#page_count").val(Math.ceil(data / 5));
		generateRows(1);//}
	});
	

});

function generateRows(selected) {
	var pages = $("#page_count").val();var i;
		
	if (pages <= 5) {
		
	var pagers = "<div id='paginator'>";
		for(i=1;i<=pages;i++){
		if(i==selected){	
		pagers+="<a href='#' class='pagor selected'>"+i+"</a>";}
		else{pagers +="<a href='#' class='pagor'>"+i+"</a>";}               //<a href='#' class='pagor'>2</a><a href='#' class='pagor'>3</a><a href='#' class='pagor'>4</a><a href='#' class='pagor'>5</a><div style='clear:both;'></div></div>");
		}
		pagers += "<div style='clear:both;'></div></div>";
		$("#content").after(pagers);
		$(".pagor").click(function() {
			var index = $(".pagor").index(this);
			
			$("#content").load("loadtreedata.php?action=get_rows&start=" + index);
			$(".pagor").removeClass("selected");
			$(this).addClass("selected");
		});		
	} else {                                  //else  if pages>5
		if (selected < 5) {
			// Draw the first 5 then have ... link to last
			var pagers = "<div id='paginator'>";
			for (i = 1; i <= 5; i++) {
				if (i == selected) {
					pagers += "<a href='#' class='pagor selected'>" + i + "</a>";
				} else {
					pagers += "<a href='#' class='pagor'>" + i + "</a>";
				}				
			} //for 
			pagers += "<div style='float:left;padding-left:6px;padding-right:6px;'>...</div><a href='#' class='pagor'>" + Number(pages) + "</a><div style='clear:both;'></div></div>";
			
			$("#paginator").remove();
			$("#content").after(pagers);
			$(".pagor").click(function() {
				updatePage(this);
			});
		} else if (selected > (Number(pages) - 4)) {
			// Draw ... link to first then have the last 5
			var pagers = "<div id='paginator'><a href='#' class='pagor'>1</a><div style='float:left;padding-left:6px;padding-right:6px;'>...</div>";
			for (i = (Number(pages) - 4); i <= Number(pages); i++) {
				if (i == selected) {
					pagers += "<a href='#' class='pagor selected'>" + i + "</a>";
				} else {
					pagers += "<a href='#' class='pagor'>" + i + "</a>";
				}				
			}			
			pagers += "<div style='clear:both;'></div></div>";
			
			$("#paginator").remove();
			$("#content").after(pagers);
			$(".pagor").click(function() {
				updatePage(this);
			});		
		} else {
			// Draw the number 1 element, then draw ... 2 before and two after and ... link to last
			var pagers = "<div id='paginator'><a href='#' class='pagor'>1</a><div style='float:left;padding-left:6px;padding-right:6px;'>...</div>";
			for (i = (Number(selected) - 2); i <= (Number(selected) + 2); i++) {
				if (i == selected) {
					pagers += "<a href='#' class='pagor selected'>" + i + "</a>";
				} else {
					pagers += "<a href='#' class='pagor'>" + i + "</a>";
				}
			}
			pagers += "<div style='float:left;padding-left:6px;padding-right:6px;'>...</div><a href='#' class='pagor'>" + pages + "</a><div style='clear:both;'></div></div>";
			
			$("#paginator").remove();
			$("#content").after(pagers);
			$(".pagor").click(function() {
				updatePage(this);
			});			
		}
	}
}

function updatePage(elem) {
	// Retrieve the number stored and position elements based on that number
	var selected = $(elem).text();

	// First update content
	$("#content").load("loadtreedata.php?action=get_rows&start=" + (selected - 1));
	
	// Then update links
	generateRows(selected);
}