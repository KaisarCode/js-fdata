// Read file data from input
function readFdata(ipt, cb) {
    cb = cb || function(){};
    var files = ipt.files;
    Array.from(files).forEach(function(f){
        var size = f.size;
        var reader = new FileReader();
        reader.readAsDataURL(f);
        reader.onloadend = function() {
            data = reader.result;
            cb(f, data);
        };
    });
}
