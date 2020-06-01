// Update the title of the page with H1 header content
window.addEventListener('load', function() {
    var h1 = document.getElementsByTagName('h1')[0]
    window.document.title = h1.textContent + ": " + window.document.title;
});
// Functions for tabular data
var fae2TableUtils = {};
fae2TableUtils.addRow = function (tbody, id, class_name) {
	    if (!tbody) return false;
	    if (typeof id         !== 'string') id = "";
	    if (typeof class_name !== 'string') class_name = "";
	    var tr = document.createElement('tr');
	    if (tr) {
    	  	tr.id = id;
      	  	tr.className = class_name;
          if (tbody.firstChild) {
            tbody.insertBefore(tr, tbody.firstChild);
          }
          else {
            tbody.appendChild(tr);
        }
    	}
    	return tr;
	};
fae2TableUtils.addCell = function (row, text, id, class_name) {
	    if (!row) return false;
	    if (typeof id         !== 'string') id = "";
	    if (typeof class_name !== 'string') class_name = "";
	    var td = document.createElement('td');
	    if (td) {
    	  	td.id = id;
      	  td.className = class_name;
      		row.appendChild(td);
      		td.innerHTML = text;
      		td.setAttribute('data-value', text)
    	}
    	return td;
	};
fae2TableUtils.addCellLink = function (row, text, href, id, class_name) {
	    if (!row) return false;
	    if (typeof id         !== 'string') id = "";
	    if (typeof class_name !== 'string') class_name = "";
	    var td = document.createElement('td');
	    if (td) {
      	  	td.className = class_name;
      		row.appendChild(td);
      		td.setAttribute('data-value', text)
    	}
    	link = document.createElement('a');
    	if (td && link) {
	    	link.setAttribute('href', href);
    	  	link.id = id;
	    	link.innerHTML = text;
	    	td.appendChild(link)
    	}
    	return link;
	};
fae2TableUtils.addCellButton = function (row, value, label, class_name, evnt) {
      if (!row) return false;
      if (typeof class_name !== 'string') class_name = "";
      var td = document.createElement('td');
      if (td) {
            td.className = class_name;
          row.appendChild(td);
          td.setAttribute('data-value', '')
      }
      button = document.createElement('input');
      if (td && button) {
        button.type = "button";
        button.value = value;
        button.setAttribute('aria-label', label)
        button.addEventListener('click', evnt)
        td.appendChild(button);
      }
      return button;
  };
fae2TableUtils.addCellCheckbox = function (row, checked, id, label, class_name, evnt) {
	    if (!row) return false;
	    if (typeof id         !== 'string') id = "";
	    if (typeof class_name !== 'string') class_name = "";
	    var td = document.createElement('td');
	    if (td) {
      	  	td.className = class_name;
      		row.appendChild(td);
      		td.setAttribute('data-value', checked)
    	}
    	checkbox = document.createElement('input');
    	if (td && checkbox) {
	    	checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('aria-label', label);
	    	if (checked) checkbox.setAttribute('checked', '');
    	  	checkbox.id = id;
    	  	checkbox.addEventListener('click', evnt)
    	  	td.appendChild(checkbox);
    	}
    	return checkbox;
	};
fae2TableUtils.updateCheckbox = function (id, checked) {
		var checkbox = document.getElementById(id);
        if(checkbox) {
        	if (checked) checkbox.setAttribute('checked', '');
 	        else checkbox.removeAttribute('checked');
 	    }
	};
fae2TableUtils.formatDate = function(date) {
    	var hours = date.getHours();
      hours = hours < 10 ? '0'+hours : hours;
    	var minutes = date.getMinutes();
    	minutes = minutes < 10 ? '0'+minutes : minutes;
    	var strTime = hours + ':' + minutes;
    	return  date.getFullYear() + "-"  + (date.getMonth()+1) + "-" + date.getDate() + "  " + strTime;
  	};
fae2TableUtils.getJSON = function(url, callback) {
   		var http_request = new XMLHttpRequest();
	   	try {
    		// Opera 8.0+, Firefox, Chrome, Safari
      		http_request = new XMLHttpRequest();
   		} catch (e) {
	      	// Internet Explorer Browsers
    	  	try{
        		http_request = new ActiveXObject("Msxml2.XMLHTTP");
      		} catch (e) {
         		try{
            		http_request = new ActiveXObject("Microsoft.XMLHTTP");
         		} catch (e){
            		// Something went wrong
            		alert("Your browser broke!");
            		return false;
         		}
      		}
   		}
   		http_request.onreadystatechange  = function(){
      		if (http_request.readyState == 4) {
		        // Javascript function JSON.parse to parse JSON data
            var response = http_request.responseText;
        		var json_array = JSON.parse(response);
        		if (callback) callback(json_array);
      		}
   		}
 		http_request.open("GET", url, true);
   		http_request.send();
	};
