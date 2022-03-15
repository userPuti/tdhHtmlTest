$(function () {
    let type = getQueryString("type");

    if (type != null && type != "") {
        if (type == "modify") {
            modifyInfo();
        } else if (type == "add") {
            addLine();
        }
    }

    $("add").click(function () {
        window.open("t2.html");
    })
})


function showInfo() {
    let yhxm = document.getElementById("yhxm").value;
    let index = document.getElementById('yhbm').selectedIndex;

    alert(encoderStr(yhxm) + "   " + encoderStr(yhbm[index].text));
}


function encoderStr(str) {
    return encodeURI(str);
}


function deleteInfo(obj) {
    let tr = obj.parentNode.parentNode;
    tr.parentNode.removeChild(tr);
}


function loadInfo(obj, type) {
    console.log("loadInfo running...");
    let tbody = document.getElementById("tableId");
    // let rows = tbody.rows;
    let xh = obj.parentNode.parentNode.children[0].innerHTML;

    let name, yhkl, yhbm, xb, pxh, sfjy;

    name = obj.parentNode.parentNode.children[1].innerHTML;
    yhkl = obj.parentNode.parentNode.children[2].innerHTML;
    yhbm = obj.parentNode.parentNode.children[3].innerHTML;
    xb = obj.parentNode.parentNode.children[4].innerHTML;
    pxh = obj.parentNode.parentNode.children[5].innerHTML;
    sfjy = obj.parentNode.parentNode.children[6].innerHTML;
    csrq = obj.parentNode.parentNode.children[7].innerHTML;

    window.open("t2.html?pxh=" + encodeURIComponent(pxh) + "&name=" + encodeURIComponent(name) +
        "&xh=" + encodeURIComponent(xh) + "&yhkl=" + encodeURIComponent(yhkl) + "&yhbm=" + encodeURIComponent(yhbm) +
        "&xb=" + encodeURIComponent(xb) + "&sfjy=" + encodeURIComponent(sfjy) + "&csrq=" + encodeURIComponent(csrq) +
        "&type=" + encodeURIComponent(type));
}


function getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    };
    return null;
}


function getUserInfo() {
    let xh = getQueryString("xh");
    let pxh = getQueryString("pxh");
    let name = getQueryString("name");
    let yhkl = getQueryString("yhkl");
    let yhbm = getQueryString("yhbm");
    let xb = getQueryString("xb");
    let sfjy = getQueryString("sfjy");
    let csrq = getQueryString("csrq");

    return {
        xh: xh,
        pxh: pxh,
        name: name,
        yhkl: yhkl,
        yhbm: yhbm,
        xb: xb,
        sfjy: sfjy,
        csrq: csrq
    }
}

function addLine() {
    let user = getUserInfo();
    // console.log(getUserInfo());

    if (user == null || user.xh == null || user.pxh == null || user.name == null || user.yhkl == null || user.yhbm == null || user.xb == null || user.sfjy == null || user.csrq == null) {
        return;
    }

    let line = $("#firstLine").clone();
    $("tbody").append(line);
    $("tbody tr:last").find("td").html('');
    let i = 1;
    $(".xh").each(function () {
        $(this).html(i++);
    })

    $("tbody tr:last").find("td").eq(1).html(user.name);
    $("tbody tr:last").find("td").eq(2).html(user.yhkl);
    $("tbody tr:last").find("td").eq(3).html(user.yhbm);
    $("tbody tr:last").find("td").eq(4).html(user.xb);
    $("tbody tr:last").find("td").eq(5).html(user.pxh);
    if (user.sfjy == "on") {
        $("tbody tr:last").find("td").eq(6).html("是");
    } else {
        $("tbody tr:last").find("td").eq(6).html("否");
    }
    $("tbody tr:last").find("td").eq(7).html(user.csrq);

    $("tbody tr:last").find("td").eq(8).html('<img src="./查看.png" width="30" height="30" onclick="loadInfo(this,search)" style="cursor:pointer" />');
    $("tbody tr:last").find("td").eq(9).html('<img src="./删除.png" width="30" height="30" onclick="deleteInfo(this)" style="cursor:pointer" />');
    $("tbody tr:last").find("td").eq(10).html('<img src="./修改.png" width="30" height="30" onclick="window.open(\'./t2.html\')" style="cursor:pointer" />');
}


function modifyInfo() {
    let user =  getUserInfo();

    if (user == null || user.xh == null || user.pxh == null || user.name == null || user.yhkl == null || user.yhbm == null || user.xb == null || user.sfjy == null || user.csrq == null) {
        return;
    }

    $("tbody tr").eq(user.xh-1).find("td").eq(1).html(user.name);
    $("tbody tr").eq(user.xh-1).find("td").eq(2).html(user.yhkl);
    $("tbody tr").eq(user.xh-1).find("td").eq(3).html(user.yhbm);
    $("tbody tr").eq(user.xh-1).find("td").eq(4).html(user.xb);
    $("tbody tr").eq(user.xh-1).find("td").eq(5).html(user.pxh);
    if (user.sfjy == "on") {
        $("tbody tr").eq(user.xh-1).find("td").eq(6).html("是");
    } else {
        $("tbody tr").eq(user.xh-1).find("td").eq(6).html("否");
    }
    $("tbody tr").eq(user.xh-1).find("td").eq(7).html(user.csrq);

    $("tbody tr").eq(user.xh-1).find("td").eq(8).html('<img src="./查看.png" width="30" height="30" onclick="loadInfo(this,search)" style="cursor:pointer" />');
    $("tbody tr").eq(user.xh-1).find("td").eq(9).html('<img src="./删除.png" width="30" height="30" onclick="deleteInfo(this)" style="cursor:pointer" />');
    $("tbody tr").eq(user.xh-1).find("td").eq(10).html('<img src="./修改.png" width="30" height="30" onclick="window.open(\'./t2.html\')" style="cursor:pointer" />');
}