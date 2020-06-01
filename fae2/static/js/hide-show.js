$(document).ready(function() {
    var buttons = [];
    $(".hide-show a").each(function() {
        buttons.push(this);
        var panel_id = $(this).attr('href');
        $(this).attr('role', 'button');
        if ($(this).parent().hasClass('active')) {
          $(this).attr('aria-expanded', 'true');
          $(panel_id).removeAttr('hidden');
        }
        else {
          $(this).attr('aria-expanded', 'false');
          $(panel_id).attr('hidden', '');
        }
        $(this).attr('aria-controls', panel_id.replace('#',''));
        function showPanel(node) {
            for(var i = 0; i < buttons.length; i++) {
              $(buttons[i]).attr('aria-expanded', 'false');
              $(buttons[i]).parent().removeClass('active');
              var panel_id = $(buttons[i]).attr('href');
              $(panel_id).attr('hidden', '');
            }
            var panel_id = $(node).attr('href');
            $(node).attr('aria-expanded', 'true');
            $(node).parent().addClass('active');
            $(panel_id).removeAttr('hidden');
        }
        $(this).click(function(event) {
            showPanel(event.currentTarget);
            event.preventDefault();
            event.stopPropagation();
        });
        $(this).keydown(function(event) {
            if (event.keyCode === 32) {
                showPanel(event.currentTarget);
                event.preventDefault();
                event.stopPropagation();
            }
        });

    });
});
function showHide(event) {
    function clearActive() {
        var i = 1;
        var node1 = document.getElementById('shb' + i)
        while (node1) {
            node1.parentNode.className = "";
            node1.setAttribute('aria-expanded', false);
            node2 = document.getElementById('shp' + i)
            if (node2) node2.setAttribute('hidden', '')
            i = i + 1;
            node1 = document.getElementById('shb' + i);
        }
    }
    var type = event.type.toLowerCase();
    var target = event.currentTarget;
    if ((type === 'click') ||
        (type === 'keydown' && event.keyCode === 32)) {
        clearActive();
        target.parentNode.className = "active";
        target.setAttribute('aria-expanded', true);
        node2 = document.getElementById(target.id.replace('b', 'p'));
        if (node2) node2.removeAttribute('hidden');
        event.preventDefault();
        event.stopPropagation();
    }
}
