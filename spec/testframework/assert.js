var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("%c Assertion failed: assertion is" + assertionToCheck, 'color: red');
    }
  }
};
