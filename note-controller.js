"use strict";

(function(exports) {
  function Controller(list) {
    list.addItem("Favourite drink: seltzer")
    this.view = new View(list);
  };
  Controller.prototype.Html = function() {
    document.getElementById("app").innerHTML = this.view.listHtml();
  };
  exports.Controller = Controller;
})(this);

var list = new List;
var controller = new Controller(list);

window.onload = function() {
  controller.Html();
};
