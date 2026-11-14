// Key combinations in the text («Ctrl+Maiusc+E», «F5») drawn as keys, and
// a table of contents for the guide. The pages read fine without it.
(function () {
  var main = document.querySelector("main");
  if (!main) return;

  var key = "(?:F1[0-2]|F[1-9]|Invio|Enter|Tab|Spazio|Space|Canc|Del|Esc|Ins|Fine|End|PgSu|PgGiù|PgUp|PgDn|Backspace|[A-Z0-9←→↑↓\\\\,*+\\-])";
  var combo = new RegExp("(?<![\\w+])((?:(?:Ctrl|Alt|Maiusc|Shift)\\+)+" + key + "|F1[0-2](?![\\w])|F[1-9](?![\\w]))", "g");

  function draw(text) {
    var span = document.createElement("span");
    span.className = "keys";
    // "Ctrl++" ends with the + key itself.
    var parts = text.endsWith("++") ? text.slice(0, -2).split("+").concat("+") : text.split("+");
    parts.forEach(function (part, i) {
      if (i) span.appendChild(document.createTextNode("+"));
      var kbd = document.createElement("kbd");
      kbd.textContent = part;
      span.appendChild(kbd);
    });
    return span;
  }

  var walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT, {
    acceptNode: function (node) {
      var parent = node.parentElement;
      if (!parent || parent.closest("code, pre, kbd, a, h1, script")) return NodeFilter.FILTER_REJECT;
      combo.lastIndex = 0;
      return combo.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  var nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(function (node) {
    var text = node.nodeValue, last = 0, fragment = document.createDocumentFragment(), match;
    combo.lastIndex = 0;
    while ((match = combo.exec(text))) {
      fragment.appendChild(document.createTextNode(text.slice(last, match.index)));
      fragment.appendChild(draw(match[1]));
      last = match.index + match[1].length;
    }
    fragment.appendChild(document.createTextNode(text.slice(last)));
    node.parentNode.replaceChild(fragment, node);
  });

  var title = document.body.getAttribute("data-toc");
  var headings = main.querySelectorAll("h2[id]");
  var h1 = main.querySelector("h1");
  if (title && h1 && headings.length > 2) {
    var nav = document.createElement("nav");
    nav.className = "toc";
    nav.setAttribute("aria-label", title);
    var label = document.createElement("strong");
    label.textContent = title;
    var list = document.createElement("ol");
    headings.forEach(function (h) {
      var li = document.createElement("li"), a = document.createElement("a");
      a.href = "#" + h.id;
      a.textContent = h.textContent;
      li.appendChild(a);
      list.appendChild(li);
    });
    nav.appendChild(label);
    nav.appendChild(list);
    var after = h1.nextElementSibling && h1.nextElementSibling.tagName === "P" ? h1.nextElementSibling : h1;
    after.insertAdjacentElement("afterend", nav);
  }
})();
