(function(exports) {
  function PageFormatting() {}

  PageFormatting.prototype.resetTextArea = function() {
    document.getElementById("textarea").value = "";
  };

  PageFormatting.prototype.hideElement = function(id) {
    document
      .getElementById(id)
      .style = "display:none";
  };

  PageFormatting.prototype.showElement = function(id) {
    document
      .getElementById(id)
      .style = '';
  };
  exports.PageFormatting = PageFormatting;
})(this);
