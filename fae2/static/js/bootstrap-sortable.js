/*! TINY SORT modified according to this https://github.com/Sjeiti/TinySort/pull/51*/
(function (e, t) { function h(e) { return e && e.toLowerCase ? e.toLowerCase() : e } function p(e, t) { for (var r = 0, i = e.length; r < i; r++) if (e[r] == t) return !n; return n } var n = !1, r = null, i = parseFloat, s = Math.min, o = /(-?\d+\.?\d*)$/g, u = /(\d+\.?\d*)$/g, a = [], f = [], l = function (e) { return typeof e == "string" }, c = Array.prototype.indexOf || function (e) { var t = this.length, n = Number(arguments[1]) || 0; n = n < 0 ? Math.ceil(n) : Math.floor(n); if (n < 0) n += t; for (; n < t; n++) { if (n in this && this[n] === e) return n } return -1 }; e.tinysort = { id: "TinySort", version: "1.5.2", copyright: "Copyright (c) 2008-2013 Ron Valstar", uri: "https://tinysort.sjeiti.com/", licensed: { MIT: "https://www.opensource.org/licenses/mit-license.php", GPL: "https://www.gnu.org/licenses/gpl.html" }, plugin: function () { var e = function (e, t) { a.push(e); f.push(t) }; e.indexOf = c; return e }(), defaults: { order: "asc", attr: r, data: r, useVal: n, place: "start", returns: n, cases: n, forceStrings: n, ignoreDashes: n, sortFunction: r } }; e.fn.extend({ tinysort: function () { var d, v, m = this, g = [], y = [], b = [], w = [], E = 0, S, x = [], T = [], N = function (t) { e.each(a, function (e, n) { n.call(n, t) }) }, C = function (t, r) { var s = 0; if (E !== 0) E = 0; while (s === 0 && E < S) { var a = w[E], c = a.oSettings, p = c.ignoreDashes ? u : o; N(c); if (c.sortFunction) { s = c.sortFunction(t, r) } else if (c.order == "rand") { s = Math.random() < .5 ? 1 : -1 } else { var d = n, v = !c.cases ? h(t.s[E]) : t.s[E], m = !c.cases ? h(r.s[E]) : r.s[E]; v = v.replace(/^\s*/i, "").replace(/\s*$/i, ""); m = m.replace(/^\s*/i, "").replace(/\s*$/i, ""); if (!A.forceStrings) { var g = l(v) ? v && v.match(p) : n, y = l(m) ? m && m.match(p) : n; if (g && y) { var b = v.substr(0, v.length - g[0].length), x = m.substr(0, m.length - y[0].length); if (b == x) { d = !n; v = i(g[0]); m = i(y[0]) } } } s = a.iAsc * (v < m ? -1 : v > m ? 1 : 0) } e.each(f, function (e, t) { s = t.call(t, d, v, m, s) }); if (s === 0) E++ } return s }; for (d = 0, v = arguments.length; d < v; d++) { var k = arguments[d]; if (l(k)) { if (x.push(k) - 1 > T.length) T.length = x.length - 1 } else { if (T.push(k) > x.length) x.length = T.length } } if (x.length > T.length) T.length = x.length; S = x.length; if (S === 0) { S = x.length = 1; T.push({}) } for (d = 0, v = S; d < v; d++) { var L = x[d], A = e.extend({}, e.tinysort.defaults, T[d]), O = !(!L || L == ""), M = O && L[0] == ":"; w.push({ sFind: L, oSettings: A, bFind: O, bAttr: !(A.attr === r || A.attr == ""), bData: A.data !== r, bFilter: M, $Filter: M ? m.filter(L) : m, fnSort: A.sortFunction, iAsc: A.order == "asc" ? 1 : -1 }) } m.each(function (n, r) { var i = e(r), s = i.parent().get(0), o, u = []; for (j = 0; j < S; j++) { var a = w[j], f = a.bFind ? a.bFilter ? a.$Filter.filter(r) : i.find(a.sFind) : i; u.push(a.bData ? f.data(a.oSettings.data) : a.bAttr ? f.attr(a.oSettings.attr) : a.oSettings.useVal ? f.val() : f.text()); if (o === t) o = f } var l = c.call(b, s); if (l < 0) { l = b.push(s) - 1; y[l] = { s: [], n: [] } } if (o.length > 0) y[l].s.push({ s: u, e: i, n: n }); else y[l].n.push({ e: i, n: n }) }); e.each(y, function (e, t) { t.s.sort(C) }); e.each(y, function (t, r) { var i = r.s.length, o = [], u = i, a = [0, 0]; switch (A.place) { case "first": e.each(r.s, function (e, t) { u = s(u, t.n) }); break; case "org": e.each(r.s, function (e, t) { o.push(t.n) }); break; case "end": u = r.n.length; break; default: u = 0 } for (d = 0; d < i; d++) { var f = p(o, d) ? !n : d >= u && d < u + r.s.length, l = (f ? r.s : r.n)[a[f ? 0 : 1]].e; l.parent().append(l); if (f || !A.returns) g.push(l.get(0)); a[f ? 0 : 1]++ } }); m.length = 0; Array.prototype.push.apply(m, g); return m } }); e.fn.TinySort = e.fn.Tinysort = e.fn.tsort = e.fn.tinysort })(jQuery);
(function ($) {
  var $prefix = "table_sortable_";
  var $last_header = false;
  function restoreDefaultSort(cname) {
    document.cookie = $prefix + cname + "=";
    document.cookie = $prefix + cname + "_key=";
    location.reload();
  }
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = $prefix + cname + "=" + cvalue + "; " + expires;
  }
  function getCookie(cname) {
    var name = $prefix + cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
  }
    var $document = $(document),
        bsSort = [],
        lastSort,
        signClass;
    $.bootstrapSortable = function (applyLast, sign) {
        // check if moment.js is available
        var momentJsAvailable = (typeof moment !== 'undefined');
        //Set class based on sign parameter
        signClass = !sign ? "arrow" : sign;
        // set attributes needed for sorting
        $('table.sortable').each(function () {
            var $this = $(this);
            // Added by JRG
            // Adds a default sort button before the table
            if ($this.attr('id')) {
              $this.before('<input id="' + $this.attr('id') + '_default"  class="sort-button" type="button" value="Default Sort" disabled>');
              $('#' + $this.attr('id') + '_default').click(function() {
                 restoreDefaultSort($this.attr('id'));
                }
              );
              if ($this.attr('aria-labelledby')) {
                $('#' + $this.attr('id') + '_default').attr('aria-describedby', $this.attr('aria-labelledby'));
              }
              else if ($this.attr('aria-label')) {
                $('#' + $this.attr('id') + '_default').attr('title', $this.attr('aria-label'));
              }

              var i = 1;
              var col_id = $this.attr('id') + "_col_";
              $this.find('th').each(function() {
                if (!$(this).attr('id')) {
                  $(this).attr('id', col_id + i);
                  i += 1;
                }
              });
            }

            applyLast = (applyLast === true);
            $this.find('span.sign').remove();
            $this.find('thead tr').each(function (rowIndex) {
                var columnsSkipped = 0;
                $(this).find('th').each(function (columnIndex) {
                    var $this = $(this);
                    $this.attr('data-sortcolumn', columnIndex + columnsSkipped);
                    $this.attr('data-sortkey', columnIndex + '-' + rowIndex);
                    if ($this.attr("colspan") !== undefined) {
                        columnsSkipped += parseInt($this.attr("colspan")) - 1;
                    }
                });
            });
            $this.find('td').each(function () {
                var $this = $(this);
                if ($this.attr('data-dateformat') != undefined && momentJsAvailable) {
                    $this.attr('data-value', moment($this.text(), $this.attr('data-dateformat')).format('YYYY/MM/DD/HH/mm/ss'));
                }
                else {
                    $this.attr('data-value') === undefined && $this.attr('data-value', $this.text());
                }
            });
            $this.find('thead th[data-defaultsort!="disabled"]').each(function (index) {
                var $this = $(this);
                var $sortTable = $this.closest('table.sortable');
                $this.data('sortTable', $sortTable);
                var sortKey = $this.attr('data-sortkey');
                var thisLastSort = applyLast ? lastSort : -1;
                bsSort[sortKey] = applyLast ? bsSort[sortKey] : $this.attr('data-defaultsort');
                if (bsSort[sortKey] != null && (applyLast == (sortKey == thisLastSort))) {
                    bsSort[sortKey] = bsSort[sortKey] == 'asc' ? 'desc' : 'asc';
                    doSort($this, $sortTable);
                }
                // added by JRG
                $this.attr('tabindex', '0');
                $this.attr('role', 'columnheader');
                $this.attr('aria-sort', 'none');
            });
            $onloadSort = $this.find('[data-loadsort]');
            if ($onloadSort) doSort($onloadSort, $this);
            $this.trigger('sorted');
        });
    };
    // add click event to table header
    $document.on('click', 'table.sortable thead th[data-defaultsort!="disabled"]', function (e) {
        var $this = $(this), $table = $this.data('sortTable') || $this.closest('table.sortable');
        doSort($this, $table);
        $table.trigger('sorted');
    });
    // added by JRG
    // add keyboard event to table header
    $document.on('keydown', 'table.sortable thead th[data-defaultsort!="disabled"]', function (e) {
      if ((e.keyCode === 13) || (e.keyCode === 32)) {
        var $this = $(this), $table = $this.data('sortTable') || $this.closest('table.sortable');
        doSort($this, $table);
        $table.trigger('sorted');
      }
    });
    // added by JRG
    // add focus event to table header
    $document.on('focus', 'table.sortable thead th[data-defaultsort!="disabled"]', function (e) {
        $(this).addClass('focus');
    });
    // added by JRG
    // add blur event to table header
    $document.on('blur', 'table.sortable thead th[data-defaultsort!="disabled"]', function (e) {
        $(this).removeClass('focus');
    });
    //Sorting mechanism separated
    function doSort($this, $table) {
        var cn, cv;
        var sortColumn = $this.attr('data-sortcolumn');
        if ($table.attr('id')) {
          if (sortColumn) {
            // enable default sort button
            $("#" + $table.attr('id') + "_default").removeAttr('disabled');
          }
          else {
           cv = getCookie($table.attr('id'));
           if ((typeof cv === 'string') && cv.length) {
             $ls = $("#" + cv);
             if ($ls) {
               $this = $ls;
               sortColumn = $this.attr('data-sortcolumn');
               $("#" + $table.attr('id') + "_default").removeAttr('disabled');
               cv = getCookie($table.attr('id') + "_key");
               if ((typeof cv === 'string') && cv.length) {
                 $ls.attr('data-loadsort', cv)
               }
             }
           }
         }
       }
        var colspan = $this.attr('colspan');
        if (colspan) {
            var selector;
            for (var i = parseFloat(sortColumn) ; i < parseFloat(sortColumn) + parseFloat(colspan) ; i++) {
                selector = selector + ', [data-sortcolumn="' + i + '"]';
            }
            var subHeader = $(selector).not('[colspan]');
            var mainSort = subHeader.filter('[data-mainsort]').eq(0);
            sortColumn = mainSort.length ? mainSort : subHeader.eq(0);
            doSort(sortColumn, $table);
            return;
        }
        var localSignClass = $this.attr('data-defaultsign') || signClass;
        // update arrow icon
        if ($.browser.mozilla) {
            var moz_arrow = $table.find('div.mozilla');
            if (moz_arrow != null) {
                moz_arrow.find('.sign').remove();
                moz_arrow.parent().html(moz_arrow.html());
            }
            $this.wrapInner('<div class="mozilla"></div>');
            $this.children().eq(0).append('<span class="sign ' + localSignClass + '"></span>');
        }
        else {
            $table.find('span.sign').remove();
            $this.append('<span class="sign ' + localSignClass + '"></span>');
        }
        // sort direction
        var sortKey = $this.attr('data-sortkey');
        var initialDirection = 'desc';
        if ($this.attr('data-loadsort') === 'desc') initialDirection = 'asc';
        else if ($this.attr('data-firstsort') === 'desc') initialDirection = 'asc';
        lastSort = sortKey;
        bsSort[sortKey] = (bsSort[sortKey] || initialDirection) == 'asc' ? 'desc' : 'asc';
        if ($last_header) {
          $last_header.attr('aria-sort', 'none');
        }
        //Modified by JRG to add aria-sort
        if (bsSort[sortKey] == 'desc') {
          $this.find('span.sign').addClass('up');
          $this.attr('aria-sort', 'ascending');
        }
        else {
          $this.attr('aria-sort', 'descending');
        }
        $last_header = $this;
        if ($table.attr('id') && $this.attr('id') ) {
          setCookie($table.attr('id'), $this.attr('id'), 365);
          setCookie($table.attr('id') + "_key",bsSort[sortKey], 365);
        }
        // sort rows
        var rows = $table.find('tbody tr');
        rows.tsort('td:eq(' + sortColumn + ')', { order: bsSort[sortKey], attr: 'data-value' });
    }
    // jQuery 1.9 removed this object
    if (!$.browser) {
        $.browser = { chrome: false, mozilla: false, opera: false, msie: false, safari: false };
        var ua = navigator.userAgent;
        $.each($.browser, function (c) {
            $.browser[c] = ((new RegExp(c, 'i').test(ua))) ? true : false;
            if ($.browser.mozilla && c == 'mozilla') { $.browser.mozilla = ((new RegExp('firefox', 'i').test(ua))) ? true : false; }
            if ($.browser.chrome && c == 'safari') { $.browser.safari = false; }
        });
    }
    // Initialise on DOM ready
    $($.bootstrapSortable);
}(jQuery));
