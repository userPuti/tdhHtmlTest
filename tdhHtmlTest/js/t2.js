function validateForm() {
    let yhid = document.getElementById("yhidText").value;
    let yhxm = document.getElementById('yhxmText').value;
    let yhkl = document.getElementById('yhklText').value;
    let cfkl = document.getElementById('cfklText').value;

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

$(function () {
    checkInfo();
    $("#back").click(function () {
        window.close();
    });
})


function checkInfo() {
    let xh = getQueryString("xh");
    let pxh = getQueryString("pxh");
    let name = getQueryString("name");
    let yhkl = getQueryString("yhkl");
    let yhbm = getQueryString("yhbm");
    let xb = getQueryString("xb");
    let sfjy = getQueryString("sfjy");
    let csrq = getQueryString("csrq");

    if (xh == null || pxh == null || name == null || yhkl == null || yhbm == null || xb == null || sfjy == null || csrq == null) {
        retun;
    }

    $("#yhidText").parent().html(xh);

    $("#pxhText").parent().html(pxh);
    $("#yhxmText").parent().html(name);

    $("#yhklText").parent().html(yhkl);
    $("#cfklText").parent().html(yhkl);

    $('#yhbm').hide();
    $("#yhbm").parent().html(yhbm);

    $('#xb').hide();
    $("#xb").parent().html(xb);

    if (sfjy == '否') {
        $('#sfjy').hide();
        $('#sfjy').parent().html('否');
    } else {
        $('#sfjy').hide();
        $('#sfjy').parent().html('是');
    }

    $('#date').hide();
    $("#date").parent().html(csrq);

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
    
}