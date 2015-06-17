/**
 * @author jonobr1 / http://jonorb1.com
 */
(function() {

  var root = this;
  var previousFilter = root.Filter || {};

  var Filter = root.Filter = function(list, options) {

    this.list = list;
    this.key = options.key;

  };

  Filter.prototype.search = function(str) {

    var result = [];
    var query = new RegExp(str.toLowerCase(), 'ig');

    for (var i = 0; i < this.list.length; i++) {
      var item = this.list[i];
      if (query.test(item[this.key])) {
        result.push(item);
      }
    }

    return result;

  };

})();