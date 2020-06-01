var InformationButton = function (node) {
  this.domNode  = node;
  this.infoNode = false;
  this.closedGlyphicon = 'glyphicon-triangle-top';
  this.openGlyphicon   = 'glyphicon-triangle-bottom';
  this.openGlyphicon   = 'glyphicon-info-sign';
  this.keyCode = Object.freeze({
    'RETURN'   : 13,
    'SPACE'    : 32
  });
};
InformationButton.prototype.init = function () {
  this.domNode.tabIndex = 0;
  this.domNode.setAttribute('role', 'button');
  this.domNode.setAttribute('aria-expanded', 'false');
  this.domNode.classList.add('glyphicon');
  this.domNode.classList.add(this.openGlyphicon);
  if (!this.domNode.getAttribute('aria-labelledby') &&
      !this.domNode.getAttribute('aria-label')) {
    var e = this.domNode.previousElementSibling
    if (!e) {
      e = this.domNode.parentNode;
      if (e && e.innerText.length) {
        e.setAttribute('aria-label', e.innerText);
      }
    }
    if (e) {
      var label = e.innerText;
      if (e.innerText){
        this.domNode.setAttribute('title', 'Information on ' + label);
      }
    }
  }
  var id = this.domNode.getAttribute('aria-controls');
  if (id) {
    this.infoNode = document.getElementById(id);
  }
  if (this.infoNode) {
    this.domNode.addEventListener('keydown',    this.handleKeydown.bind(this));
    this.domNode.addEventListener('click',      this.handleClick.bind(this));
    this.domNode.addEventListener('focus',      this.handleFocus.bind(this));
    this.domNode.addEventListener('blur',       this.handleBlur.bind(this));
    this.infoNode.style.display = "none";
  }
};
InformationButton.prototype.toggleExpanded = function () {
  if (this.domNode.getAttribute('aria-expanded') === 'true') {
    this.domNode.setAttribute('aria-expanded', 'false');
    this.domNode.classList.remove(this.closedGlyphicon);
    this.domNode.classList.add(this.openGlyphicon);
    this.infoNode.style.display = "none";
  }
  else {
    this.domNode.setAttribute('aria-expanded', 'true');
    this.domNode.classList.remove(this.openGlyphicon);
    this.domNode.classList.add(this.closedGlyphicon);
    this.infoNode.style.display = "block";
  }
};
/* EVENT HANDLERS */
InformationButton.prototype.handleKeydown = function (event) {
  var flag = false;
  switch (event.keyCode) {
    case this.keyCode.SPACE:
    case this.keyCode.RETURN:
      this.toggleExpanded();
      flag = true;
      break;
    default:
      break;
  }
  if (flag) {
    event.stopPropagation();
    event.preventDefault();
  }
};
InformationButton.prototype.handleClick = function (event) {
  this.toggleExpanded();
  event.stopPropagation();
  event.preventDefault();
};
InformationButton.prototype.handleFocus = function (event) {
  this.domNode.classList.add('focus');
};
InformationButton.prototype.handleBlur = function (event) {
  this.domNode.classList.remove('focus');
};
(function() {
  var ibs = document.getElementsByClassName('fae_info_button');
  for (var i = 0; i < ibs.length; i++) {
    var ib = new InformationButton(ibs[i]);
    ib.init();
  }
})();
