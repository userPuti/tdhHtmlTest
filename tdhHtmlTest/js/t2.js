$(function () {
    //checkInfo();
    // modifier();
   
    $("#back").click(function () {
        window.close();
    });
    
    $("#submit").click(function () {
        validateForm();
        addInfo();
    })
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
    console.log(getUserInfo());

    if (user.xh == null || user.pxh == null || user.name == null || user.yhkl == null || user.yhbm == null || user.xb == null || user.sfjy == null || user.csrq == null) {
        retun;
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

    if (user.xh == null || user.pxh == null || user.name == null || user.yhkl == null || user.yhbm == null || user.xb == null || user.sfjy == null || user.csrq == null) {
        retun;
    }

    $("#yhidText").parent().html(user.xh);

    $("#pxhText").parent().val(user.pxh);
    $("#yhxmText").parent().val(user.name);

    $("#yhklText").parent().val(user.yhkl);
    $("#cfklText").parent().val(user.yhkl);

    window.open("t1.html?pxh=" + encodeURIComponent(user.pxh) + "&name=" + encodeURIComponent(user.name) +
        "&xh=" + encodeURIComponent(user.xh) + "&yhkl=" + encodeURIComponent(user.yhkl) + "&yhbm=" + encodeURIComponent(user.yhbm) +
        "&xb=" + encodeURIComponent(user.xb) + "&sfjy=" + encodeURIComponent(user.sfjy) + "&csrq=" + encodeURIComponent(user.csrq));
}

function addInfo() {
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
    let csrq =$("#date").val();

    console.log(csrq);
    window.open("t1.html?pxh=" + encodeURIComponent(pxh) + "&name=" + encodeURIComponent(name) +
        "&xh=" + encodeURIComponent(xh) + "&yhkl=" + encodeURIComponent(yhkl) + "&yhbm=" + encodeURIComponent(yhbm) +
        "&xb=" + encodeURIComponent(xb) + "&sfjy=" + encodeURIComponent(sfjy) + "&csrq=" + encodeURIComponent(csrq));
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
}