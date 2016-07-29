f (typeof this['dwr'] == 'undefined') this.dwr = {};
if (typeof dwr['engine'] == 'undefined') dwr.engine = {};
if (typeof dwr.engine['_mappedClasses'] == 'undefined') dwr.engine._mappedClasses = {};

if (window['dojo']) dojo.provide('dwr.interface.UtilDWR');

if (typeof this['UtilDWR'] == 'undefined') UtilDWR = {};

UtilDWR._path = '/amadeuslms/dwr';





UtilDWR.getInclude = function(p0, callback) {
return dwr.engine._execute(UtilDWR._path, 'UtilDWR', 'getInclude', arguments);
};