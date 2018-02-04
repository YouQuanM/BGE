//逆时针轮转法
var arr = [];
arr = [1,2,3,4,5,6,7,0];
function BGE() {
	for(var i = 1; i < arr.length; i++){
	    for(var j = 0; j < arr.length/2; j++){
	        console.log(arr[j]+"-"+arr[arr.length-j-1]);
        }
        var str = arr.splice(1,0,arr[arr.length-1]);
        str = arr.splice(arr.length-1,1);
        console.log("--")
    }
}
BGE();