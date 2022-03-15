$(function () {
    let type = getQueryString("type");

    if (type != null && type != "") {
        if (type == "search") {
            checkInfo();
        }

        if (type == "modify") {
            modifier();
        }
    }

    $("#submit").click(function () {
        let checked = validateForm();
        if (checked) {
            if (type == "modify") {
                addInfo("modify");
            } else if (type == "add") {
                addInfo("add");
            }
        }
    })

    $("#back").click(function () {
        window.close();
    });
})


function getUserInfo() {
    let xh = getQueryString("xh");
    let pxh = getQueryString("pxh");
    let name = getQueryString("name");
    let yhkl = getQueryString("yhkl");
    let yhbm = getQueryString("yhbm");
    let xb = getQueryString("xb");
    let sfjy = getQueryString("sfjy");
    let csrq = getQueryString("csrq");
    console.log(getQueryString("type"));

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


function checkInfo() {
    let user = getUserInfo();
    // console.log(getUserInfo());

    if (user == null || user.xh == null || user.pxh == null || user.name == null || user.yhkl == null || user.yhbm == null || user.xb == null || user.sfjy == null || user.csrq == null) {
        return;
    }

    $("#yhidText").parent().html(user.xh);

    $("#pxhText").parent().html(user.pxh);
    $("#yhxmText").parent().html(user.name);

    $("#yhklText").parent().html(user.yhkl);
    $("#cfklText").parent().html(user.yhkl);

    $('#yhbm').hide();
    $("#yhbm").parent().html(user.yhbm);

    $('#xb').hide();
    $("#xb").parent().html(user.xb);

    if (user.sfjy == '否') {
        $('#sfjy').hide();
        $('#sfjy').parent().html('否');
    } else {
        $('#sfjy').hide();
        $('#sfjy').parent().html('是');
    }

    $('#date').hide();
    $("#date").parent().html(user.csrq);

    $('#submit').hide();
}


function getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    };
    return null;
}


function modifier() {
    let user = getUserInfo();
    console.log(getUserInfo());

    if (user == null || user.xh == null || user.pxh == null || user.name == null || user.yhkl == null || user.yhbm == null || user.xb == null || user.sfjy == null || user.csrq == null) {
        return;
    }

    $("#yhidText").val(user.xh);
    $("#yhidText").attr("readonly", "readonly");

    $("#pxhText").val(user.pxh);
    $("#yhxmText").val(user.name);

    $("#yhklText").val(user.yhkl);
    $("#cfklText").val(user.yhkl);

    if (user.yhbm == "立案庭") {
        $("#yhbm option[value='lat']").attr("selected", true);
    } else if (user.yhbm == "业务庭") {
        $("#yhbm option[value='ywt']").attr("selected", true);
    } else {
        $("#yhbm option[value='bgs']").attr("selected", true);
    }


    if (user.xb == "男") {
        $("#xb option[value='male']").attr("selected", true);
    } else if (user.xb == "女") {
        $("#xb option[value='female']").attr("selected", true);

    }

    let birth = new Date(user.csrq).format("yyyy-MM-dd");

    $("#date").attr("value", birth);


    if (user.sfjy == "是") {
        $("#sfjy").attr("checked", "checked");
    }

    // window.open("t1.html?pxh=" + encodeURIComponent(user.pxh) + "&name=" + encodeURIComponent(user.name) +
    //     "&xh=" + encodeURIComponent(user.xh) + "&yhkl=" + encodeURIComponent(user.yhkl) + "&yhbm=" + encodeURIComponent(user.yhbm) +
    //     "&xb=" + encodeURIComponent(user.xb) + "&sfjy=" + encodeURIComponent(user.sfjy) + "&csrq=" + encodeURIComponent(user.csrq));
}

function addInfo(type) {
    let xh = $("#yhidText").val();
    // console.log(xh);
    let pxh = $("#pxhText").val();
    // console.log(pxh);
    let name = $("#yhxmText").val();
    let yhkl = $("#yhklText").val();
    let yhbm = $("#yhbm option:selected").text();
    let xb = $("#xb option:selected").text();
    let sfjy = $("input[type=checkbox]:checked").val();
    // console.log(sfjy);
    let csrq = $("#date").val();

    console.log(csrq);
    window.open("t1.html?pxh=" + encodeURIComponent(pxh) + "&name=" + encodeURIComponent(name) +
        "&xh=" + encodeURIComponent(xh) + "&yhkl=" + encodeURIComponent(yhkl) + "&yhbm=" + encodeURIComponent(yhbm) +
        "&xb=" + encodeURIComponent(xb) + "&sfjy=" + encodeURIComponent(sfjy) + "&csrq=" + encodeURIComponent(csrq) +
        "&type=" + encodeURIComponent(type));
}


function validateForm() {
    // let yhid = document.getElementById("yhidText").value;
    let yhid = $("#yhidText").val();
    // let yhxm = document.getElementById('yhxmText').value;
    let yhxm = $("#yhxmText").val();
    // let yhkl = document.getElementById('yhklText').value;
    let yhkl = $("#yhklText").val();
    // let cfkl = document.getElementById('cfklText').value;
    let cfkl = $("#cfklText").val();

    console.log(1);
    if (yhid == null || yhid == "") {
        alert("id必须填写");
        return false;
    }
    if (yhxm == null || yhxm == "") {
        alert("姓名必须填写");
        return false;
    }
    if (yhkl == null || yhkl == "") {
        alert("口令必须填写");
        return false;
    }
    if (cfkl == null || cfkl == "") {
        alert("重复口令必须填写");
        return false;
    }
    if (yhkl != cfkl) {
        alert("口令不一致");
        return false;
    }
    console.log(2);
    return true;
}

Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}