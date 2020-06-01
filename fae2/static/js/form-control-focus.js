$(document).ready(function() {
    var elements = document.querySelectorAll('input');
    for(var i = 0; i < elements.length; i++ ) {
        var e = elements[i];
        if (" button hidden url text submit password".indexOf(e.type) > 0) continue;
        e.addEventListener('focus', function (event) { addHighlight(event, 'fae_focus');    });
        e.addEventListener('blur',  function (event) { removeHighlight(event, 'fae_focus'); });
//        e.parentNode.addEventListener('mouseover', function (event) { addHighlight(event, 'fae_hover');   });
//        e.parentNode.addEventListener('mouseout',  function (event) { removeHighlight(event, 'fae_hover');});
    }
    function hasDisabled(node) {
        var e = node.firstElementChild;
        while(e) {
            if (e.disabled) return true;
            e = e.nextElementSibling;
        }
        return false;
    }
    function addHighlight(event, style) {
        var node = event.currentTarget;
        if (node.tagName !== 'DIV') node = node.parentNode;
        if (hasDisabled(node)) style='fae_disabled';
        node.classList.add(style);
        event.stopPropagation();
        event.preventDefault();
    };
    function removeHighlight(event, style) {
        var node = event.currentTarget;
        if (node.tagName !== 'DIV') node = node.parentNode;
        if (hasDisabled(node)) style='fae_disabled';
        node.classList.remove(style);
        event.stopPropagation();
        event.preventDefault();
    };
 });
