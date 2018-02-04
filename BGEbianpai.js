//贝格尔编排法
var arr = [];
function Addteam() {
    var name = $(" #team-name ").val();
    arr.push(name);
    var div = document.getElementById("teamName");
    div.innerHTML += name + "" +"<hr/>";
}
var div_l = document.getElementById("teamBuild");
function BGE() {
    if (arr.length % 2 !== 0){
        arr.push("轮空");
    }
    for(let i = 1; i < arr.length; i++){
        for(var j = 0; j < arr.length/2; j++){
            var text_out = (arr[j]+"-"+arr[arr.length-j-1]);
            console.log(arr[j]+"-"+arr[arr.length-j-1]);
            $("h4").append(text_out + "<br>");
        }
        [arr[0],arr[arr.length-1]]=[arr[arr.length-1],arr[0]];
        if (i % 2 !== 0){
            for (let n = 0; n < 3; n++){
                var str = arr.splice(1,0,arr[arr.length-1]);
                str = arr.splice(arr.length-1,1);
            }
        }else {
            for (let n = 0; n < 3; n++){
                var str_l = arr.splice(0,0,arr[arr.length-2]);
                str_l = arr.splice(arr.length-2,1);
            }
        }
        $("h4").append("<br>");
        console.log("--");
    }
}