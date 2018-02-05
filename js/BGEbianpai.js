//贝格尔编排法
var arr = [];
//点击添加队伍：检测队伍名称是否为空，检测队伍名称是否已经存在
function Addteam() {
    var name = $(" #team-name ").val();
    if (name === ''){
        alert("这个队伍没有名字？")
    }else{
        var index = $.inArray(name,arr);
        if(index < 0){
            arr.push(name);
            var div = document.getElementById("teamName");
            $("#teamName").append(name+"<hr/>");
        }else {
            alert("已经输入过该队伍了！")
        }
    }
    $("#allteam").html(arr.length)
    //输入完成后清空input输入框，并放置焦点
    $("input[id='team-name']").val("").focus();
}
//队伍分组排列：队伍数为单数增加轮空，4支以下队伍无法排序
function BGE() {
    if (arr.length % 2 !== 0){
        arr.push("轮空");
    }
    if(arr.length > 4){
        var step = (arr.length+arr.length%2-4)/2;
        for(let i = 1; i < arr.length; i++){
            console.log(arr)
            // //输出共多少轮次的比赛为<th>
            // $("tr.teamBuild-head").append("<th>"+"第"+i+"轮"+"</th>");
            // //输出每一轮次的比赛为<td>，并为每个td加id
            // $("tr.teamBuild-body").append("<td id="+i+">");
            // for(var j = 0; j < arr.length/2; j++){
            //     //输出每一组的对战情况
            //     var text_out = (arr[j]+"-"+arr[arr.length-j-1]);
            //     //在consloe里也输出一个
            //     console.log(arr[j]+"-"+arr[arr.length-j-1]);
            //     $("td[id="+i+"]").append(text_out + "<br>");
            // }
            // $("#teamBuild-body").append("</td>");

            //更新：把表格输出调整为竖排输出，解决了队伍数太多导致的横向空间不足。
            $("tbody").append("<tr id="+i+">");
                $("tr[id="+i+"]").append("<td>"+"第"+i+"轮"+"</td>>");
                $("tr[id="+i+"]").append("<td id="+1000+i+">");
                for(var j = 0; j < arr.length/2; j++){
                    //输出每一组的对战情况
                    var text_out = (arr[j]+"-"+arr[arr.length-j-1]);
                    $("td[id="+1000+i+"]").append(text_out + "<br>");
                }
                $("tr[id="+i+"]").append("</td>");
            $("tbody").append("</tr>")

            var temp = arr[0];
            arr[0] = arr[arr.length-1];
            arr[arr.length-1] = temp;

            // [arr[0],arr[arr.length-1]]=[arr[arr.length-1],arr[0]];
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
            console.log("--");
        }
    }else {
        alert("需要四只队伍以上");
    }
}
//清空所有数据
function Clear_team() {
    arr.length = 0;
    $("#teamName").empty();
}
function Clear_table() {
    $("tbody").empty();
}