$(document).ready(function(){
//	Recent Activities
	var URL = 'https://spreadsheets.google.com/feeds/list/19vew2MEl8TNUy8doBhsYzgfuvEo8MQwTUYSOQ87jorg/2/public/basic?alt=json'
	var table = $('<table>').addClass('table');
	var th_date = $('<th>').addClass('col-xs-2');
	var th_activity = $('<th>').addClass('col-xs-10');
	table.append(th_date);
	table.append(th_activity);
	
	$.getJSON(URL,function(data){
		$.each(data.feed.entry, function(i, field){			
			var row = $('<tr>');
			var date = $('<td>').text(field.title.$t);
			var activity = $('<td>').text(field.content.$t.split('activity: ')[1]);
			row.append(date);
			row.append(activity);
			table.append(row);
		});
		$('#p_activities').append(table);
	});
	
//	Favorite Quotes
	var URL = 'https://spreadsheets.google.com/feeds/list/1kbB7ju-dlnJuFm09wDqF32oEYkDuVMHGAfrwqZMtZ1c/6/public/basic?alt=json'	
	$.getJSON(URL,function(data){
		$.each(data.feed.entry, function(i, field){
			var author = field.content.$t.split('author: ')[1].split(', quote: ')[0];
			var quote = field.content.$t.split('quote: ')[1].split(', tag: ')[0];
			var tag = $('<span>').addClass('label label-info').text(field.content.$t.split('tag: ')[1]);
			var text = $('<p>').addClass('text-justify');			
			text.append(tag);
			text.append(" "+quote+" ‒ "+author+'</br>');
			var li = $('<li>').addClass('list-group-item').append(text);
			$('#ol_quotes').append(li);
		});
	});
});
