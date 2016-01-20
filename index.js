var checkStyleFormatter = require('checkstyle-formatter');

module.exports = function(flowJson) {
  if (typeof flowJson === 'string') {
    flowJson = JSON.parse(flowJson);
  }
  
  if (flowJson.passed) {
    return checkStyleFormatter([]);
  }
  
  var errorsGroupedByFile = flowJson.errors.reduce(function(groups, error) {
    var key = error.message[0].path;
    
    if (groups[key]) {
      groups[key].push(error);
    } else {
      groups[key] = [error];
    }
    
    return groups;
  }, {});
  
  var results = [];
  
  Object.keys(errorsGroupedByFile).forEach(function(path) {
    var file = {};
    results.push(file);
    
    file.filename = path;
    file.messages = errorsGroupedByFile[path].map(function(errorData) {
      var error = {
          line: errorData.message[0].line,
          column: errorData.message[0].start,
          severity: errorData.message[0].level
      }
      
      var errorMsgParts = errorData.message.reduce(function(parts, message) {
        if (message.descr.length) {
          parts.push(message.descr);
        }
        
        return parts;
      }, []);
      error.message = errorMsgParts.join(' ');
      
      return error;
    });
  });
  
  return checkStyleFormatter(results);
}
