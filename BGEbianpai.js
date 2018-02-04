//贝格尔编排法
var arr = [];
function Addteam() {
    var name = $(" #team-name ").val();
    var index = $.inArray(name,arr);
    if(index < 0){
        arr.push(name);
        var div = document.getElementById("teamName");
        $("#teamName").append(name+"<hr/>");
    }else {
        alert("已经输入过该队伍了！")
    }

}
function BGE() {
    if (arr.length % 2 !== 0){
        arr.push("轮空");
    }
    if(arr.length > 4){
        var step = (arr.length+arr.length%2-4)/2;
        for(let i = 1; i < arr.length; i++){
            for(var j = 0; j < arr.length/2; j++){
                var text_out = (arr[j]+"-"+arr[arr.length-j-1]);
                console.log(arr[j]+"-"+arr[arr.length-j-1]);
                $("#teamBuild").append(text_out + "<br>");
            }
            [arr[0],arr[arr.length-1]]=[arr[arr.length-1],arr[0]];
            if (i % 2 !== 0){
                for (let n = 0; n < step+1; n++){
                    var str = arr.splice(1,0,arr[arr.length-1]);
                    str = arr.splice(arr.length-1,1);
                }
            }else {
                for (let n = 0; n < step+1; n++){
                    var str_l = arr.splice(0,0,arr[arr.length-2]);
                    str_l = arr.splice(arr.length-2,1);
                }
            }
            $("#teamBuild").append("<br>");
            console.log("--");
        }
    }else {
        alert("需要四只队伍以上");
    }
}
function Clear() {
    arr.length = 0;
    $("#teamBuild").empty();
    $("#teamName").empty();
}