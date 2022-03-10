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
    let pxh = getQueryString("pxh");
    let name = getQueryString("name");
    let yhkl = getQueryString("yhkl");
    let yhbm = getQueryString("yhbm");
    let xb = getQueryString("xb");
    let sfjy = getQueryString("sfjy");

    if (pxh != null) {
        $("#pxhText").val(pxh);
    }

    if (name != null) {
        $("#yhxmText").val(name);
    }

    if (yhkl != null) {
        $("#yhklText").val(yhkl);
        $("#cfklText").val(yhkl);
    }

    if (yhbm != null) {
        $('#yhbm').hide();
        $("#yhbm").parent().html(yhbm);
    }

    if (xb != null) {
        $('#xb').hide();
        $("#xb").parent().html(xb);
    }

    if (sfjy != null) {
        alert(sfjy);
        if (sfjy == '否') {
            $('#sfjy').hide();
            $('#sfjy').parent().html('否');
        } else {
            $('#sfjy').hide();
            $('#sfjy').parent().html('是');
        }
    }
})

function getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    };
    return null;
}