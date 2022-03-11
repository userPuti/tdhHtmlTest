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

function jumpToInfoPage() {
    window.open('t2.html');
}

function loadInfo(obj) {
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
        "&xb=" + encodeURIComponent(xb) + "&sfjy=" + encodeURIComponent(sfjy) + "&csrq=" + encodeURIComponent(csrq));

}