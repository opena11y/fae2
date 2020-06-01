
   function enableSubmit() {
     function test_domain() {
       var s  = node_domain.value;
       s = s.trim();
       return s.length > 0;
     }
     function test_title() {
       var s  = node_title.value;
       s = s.trim();
       return s.length > 0;
     }
     var node_domain   = document.getElementById('id_input_domain');
     var node_title    = document.getElementById('id_input_title');
     var node_submit   = document.getElementById('id_submit');
     if (test_domain() && test_title()) {
        node_submit.disabled = false;
        node_submit.setAttribute('title', 'Submit form to start evaluation');
     }
     else {
        node_submit.disabled = true;
        node_submit.setAttribute('title', 'You must enter a valid URL and a title before you can request a report');
     }
   }
  function disableSubmit() {
    enableDomains();
    var node_submit = document.getElementById('id_submit');
    node_submit.disabled = true;
    node_submit.setAttribute('title', 'Report request has already been sent');
  }
  function enableDomains() {
      var n = document.getElementById("id_input_span_sub_domains");
      if (n) n.removeAttribute('disabled');
      n = document.getElementById("id_input_span_sub_domains_label");
      if (n) n.classList.remove('disabled');
      n = document.getElementById("id_input_exclude_sub_domains");
      if (n) n.removeAttribute('disabled');
      n = document.getElementById("id_input_exclude_sub_domains_label");
      if (n) n.classList.remove('disabled');
      n = document.getElementById("id_input_include_domains");
      if (n) n.removeAttribute('disabled');
      n = document.getElementById("id_input_include_domains_label");
      if (n) n.classList.remove('disabled');
  }
  function disableDomains() {
    var n = document.getElementById("id_input_span_sub_domains");
    if (n) n.setAttribute('disabled','');
    n = document.getElementById("id_input_span_sub_domains_label");
    if (n) n.classList.add('disabled');
    n = document.getElementById("id_input_exclude_sub_domains");
    if (n) n.setAttribute('disabled','');
    n = document.getElementById("id_input_exclude_sub_domains_label");
    if (n) n.classList.add('disabled');
    n = document.getElementById("id_input_include_domains");
    if (n) n.setAttribute('disabled','');
    n = document.getElementById("id_input_include_domains_label");
    if (n) n.classList.add('disabled');
  }
  function enableMaxPages() {
      var i;
      var c;
      var mps = document.getElementById("id_max_pages");
      controls = mps.getElementsByTagName("input");
      for(i = 1; i < controls.length; i++) {
        c = controls[i];
        if (c.id.indexOf("disabled") < 0 ) {
          c.removeAttribute('disabled');
        }
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
          c.setAttribute('checked','');
        }
        else {
           c.setAttribute('disabled', '');
         }
      }
    }
   function updateDomains() {
      var depth1 = document.getElementById("depth_1");
      if (depth1.checked) {
        disableMaxPages();
      }
      else {
        enableMaxPages();
      }
      var p = document.getElementById("id_input_path").value;
      if (p) {
        if (p.length && p[0] === '/') {
          p = p.substring(1);
        }
        if (p.length && p[p.length-1] === '/') {
          p = p.substring(0, (p.length-1));
        }
        console.log('[updateDomains][path]: ' + p)
        if (p.length || depth1.checked) {
          disableDomains();
        }
        else {
          enableDomains();
        }
      }
      else {
        if (depth1.checked) {
          disableDomains();
        }
        else {
          enableDomains();
        }
      }
    };
    function checkDomainAndPath() {
      enableSubmit();
      updateDomains();
    };
    function initRun () {
      enableSubmit();
      var c = document.getElementById('id_input_domain');
      if (c) {
        c.addEventListener('keyup', checkDomainAndPath);
        c.addEventListener('blur', checkDomainAndPath);
      }
      var c = document.getElementById('id_input_path');
      if (c) {
        c.addEventListener('keyup', checkDomainAndPath);
        c.addEventListener('blur', checkDomainAndPath);
      }
    }
window.addEventListener('load', initRun);
