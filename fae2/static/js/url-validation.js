    function getParsedURL() {
        var node_url = document.getElementById('id_input_url');
        var parser = document.createElement('a'),
            searchObject = {},
            queries, split, i;
        // Let the browser do the work
        parser.href = node_url.value;
        // Convert query string to object
        queries = parser.search.replace(/^\?/, '').split('&');
        for( i = 0; i < queries.length; i++ ) {
            split = queries[i].split('=');
            searchObject[split[0]] = split[1];
        }
        return {
            protocol: parser.protocol,
            host: parser.host,
            hostname: parser.hostname,
            port: parser.port,
            pathname: parser.pathname,
            search: parser.search,
            searchObject: searchObject,
            hash: parser.hash
        };
    }
    function enableSubmit() {
      function test_url() {
        var url_info = getParsedURL();
        var s  = node_url.value;
        s = s.trim();
        return s.length > 0;
      }
      function test_title() {
        var s  = node_title.value;
        s = s.trim();
        return s.length > 0;
      }
      var node_url      = document.getElementById('id_input_url');
      var node_title    = document.getElementById('id_input_title');
      var node_submit   = document.getElementById('id_submit');
      updatePathOption();
      if (test_url() && test_title()) {
        node_submit.disabled = false;
        node_submit.setAttribute('title', 'Submit form to start evaluation');
      }
      else {
        node_submit.disabled = true;
        node_submit.setAttribute('title', 'You must enter a valid URL and a title before you can request a report');
      }
    }
  function disableSubmit() {
    var node_submit = document.getElementById('id_submit');
    node_submit.disabled = true;
    node_submit.setAttribute('title', 'Report request has already been sent');
  }
  function disableFollowOptions () {
    var follow1   = document.getElementById("id_follow_1");
    var follow2   = document.getElementById("id_follow_2");
    var follow3   = document.getElementById("id_follow_3");
    if (follow1) {
      follow1.checked = true;
      updatePathOption();
    }
    if (follow2) {
      follow2.disabled = true;
    }
    if (follow3) {
      follow3.disabled = true;
      disableAdvancedOptions();
    }
  }
  function enableFollowOptions () {
    var follow1   = document.getElementById("id_follow_1");
    var follow2   = document.getElementById("id_follow_2");
    var follow3   = document.getElementById("id_follow_3");
    if (follow1) {
      follow1.disabled = false;
      if(follow1.checked) {
        updatePathOption();
      }
      else {
        disablePathOption();
      }
    }
    if (follow2) {
      follow2.disabled = false;
    }
    if (follow3) {
      follow3.disabled = false;
      if (follow3.checked) {
        enableAdvancedOptions();
      }
      else {
        disableAdvancedOptions();
      }
    }
  }
    function updatePathOption() {
      var n;
      var url_info = getParsedURL();
      var path_value = document.getElementById("id_path_value");
      var follow_1   = document.getElementById("id_follow_1");
      if (url_info.pathname && (url_info.pathname.length > 1)) {
        path_value.innerHTML = url_info.pathname;
        path_value.classList.remove('undefined');
        if (follow_1.checked) {
          n = document.getElementById("id_input_require_path");
          if (n) n.removeAttribute('disabled');
          n = document.getElementById("id_input_require_path_label");
          if (n) n.classList.remove('disabled');
        }
      }
      else {
        path_value.innerHTML = "no path defined";
        path_value.classList.add('undefined');
        disablePathOption();
      }
    }
    function disablePathOption() {
      var n = document.getElementById("id_input_require_path");
      if (n) n.setAttribute('disabled', '');
      n = document.getElementById("id_input_require_path_label");
      if (n) n.classList.add('disabled');
    }
    function enableAdvancedOptions() {
      var checkbox, textbox, label;
      checkbox = document.getElementById("id_enable_next_level_sub_domains");
      if (checkbox) {
        checkbox.disabled = false;
        label = document.getElementById("id_label_next_level_sub_domains");
        if (label) label.classList.remove('disabled');
      }
      checkbox = document.getElementById("id_enable_span_sub_domains");
      if (checkbox) {
        checkbox.disabled = false;
        label = document.getElementById("id_label_span_sub_domains");
        if (label) label.classList.remove('disabled');
        textbox = document.getElementById("id_input_span_sub_domains");
        if (checkbox.checked) {
          textbox.disabled = false;
        }
      }
      checkbox = document.getElementById("id_enable_exclude_domains");
      if (checkbox) {
        checkbox.disabled = false;
        label = document.getElementById("id_label_exclude_domains");
        if (label) label.classList.remove('disabled');
        textbox = document.getElementById("id_input_exclude_domains");
        if (checkbox.checked) {
          textbox.disabled = false;
        }
      }
      checkbox = document.getElementById("id_enable_include_domains");
      if (checkbox) {
        checkbox.disabled = false;
        label = document.getElementById("id_label_include_domains");
        if (label) label.classList.remove('disabled');
        textbox = document.getElementById("id_input_include_domains");
        if (checkbox.checked) {
          textbox.disabled = false;
        }
      }
    }
    function disableAdvancedOptions() {
      var checkbox, textbox, label;
      checkbox = document.getElementById("id_enable_next_level_sub_domains");
      if (checkbox) checkbox.disabled = true;
      label = document.getElementById("id_label_next_level_sub_domains");
      if (label) label.classList.add('disabled');
      checkbox = document.getElementById("id_enable_span_sub_domains");
      if (checkbox) checkbox.disabled = true;
      label = document.getElementById("id_label_span_sub_domains");
      if (label) label.classList.add('disabled');
      textbox = document.getElementById("id_input_span_sub_domains");
      if (textbox) textbox.disabled = true;
      checkbox = document.getElementById("id_enable_exclude_domains");
      if (checkbox) checkbox.disabled = true;
      label = document.getElementById("id_label_exclude_domains");
      if (label) label.classList.add('disabled');
      textbox = document.getElementById("id_input_exclude_domains");
      if (textbox) textbox.disabled = true;
      checkbox = document.getElementById("id_enable_include_domains");
      if (checkbox) checkbox.disabled = true;
      label = document.getElementById("id_label_include_domains");
      if (label) label.classList.add('disabled');
      textbox = document.getElementById("id_input_include_domains");
      if (textbox) textbox.disabled = true;
    }
  function updateFollow(event) {
      var follow1   = document.getElementById("id_follow_1");
      var follow2   = document.getElementById("id_follow_2");
      var follow3   = document.getElementById("id_follow_3");
      updatePathOption();
      if (follow1 && follow1.checked) {
        disableAdvancedOptions();
      }
      if (follow2 && follow2.checked) {
        disablePathOption();
        disableAdvancedOptions();
      }
      if (follow3 && follow3.checked) {
        disablePathOption();
        enableAdvancedOptions();
      }
   }
   function updateDomainTextbox (event) {
      var node = event.currentTarget;
      if (node) {
        var textbox = document.getElementById(node.getAttribute('aria-controls'));
        if (textbox) {
          if (node.checked) {
            textbox.disabled = false;
          }
          else {
            textbox.disabled = true;
          }
        }
      }
   }
   function enableMaxPages() {
      var i;
      var c;
      var mps = document.getElementById("id_max_pages");
      controls = mps.getElementsByTagName("input");
      for(i = 1; i < controls.length; i++) {
        controls[i].disabled = false;
      }
   }
   function disableMaxPages() {
      var i;
      var c;
      var mps = document.getElementById("id_max_pages");
      controls = mps.getElementsByTagName("input");
      for(i = 0; i < controls.length; i++) {
        c = controls[i];
        if (i === 0) {
          c.disabled = false;
          c.checked = true;
        }
        else {
           c.disabled = true;
         }
      }
    }
   function updateDepth(event) {
      var depth1 = document.getElementById("id_depth_1");
      if (depth1.checked) {
        disableMaxPages();
        disableFollowOptions();
      }
      else {
        enableMaxPages();
        enableFollowOptions();
      }
    };
    function initRun () {
      var c;
      enableSubmit();
      updateFollow();
      c = document.getElementById('id_input_url');
      if (c) {
        c.addEventListener('keyup', enableSubmit);
        c.addEventListener('blur', enableSubmit);
      }
      c = document.getElementById('id_input_title');
      if (c) {
        c.addEventListener('keyup', enableSubmit);
        c.addEventListener('blur', enableSubmit);
      }
      i = 1
      c = document.getElementById('id_depth_' + i);
      while(c) {
        c.addEventListener('click', updateDepth);
        i += 1;
        c = document.getElementById('id_depth_' + i);
      }
      /* The following need to be explicit */
      c = document.getElementById('id_follow_1');
      if (c) {
        c.addEventListener('click', updateFollow);
      }
      c = document.getElementById('id_follow_2');
      if (c) {
        c.addEventListener('click', updateFollow);
      }
      c = document.getElementById('id_follow_3');
      if (c) {
        c.addEventListener('click', updateFollow);
      }
      updateDepth();
    }
window.addEventListener('load', initRun);
