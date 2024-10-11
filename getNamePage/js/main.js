const para = document.createElement("div");
let exam = `
<div class="extension-fa">
        <p class="extension-fa_" id="myInput"></p>
        <div class="check">
            <input type="checkbox" name="type" id="type2" value="#Áo_khoác_gió" >
            <label for="type2">Áo khoác gió</label><br>
            <input type="checkbox" name="type" id="type3" value="#Áo_bảo_hộ_lao_động" >
            <label for="type3">Áo bảo hộ lao động</label><br>
            <input type="checkbox" name="type" id="type6" value="#Đồng_phục_y_yế">
            <label for="type6">Đồng phục y tế</label><br>
            <input type="checkbox" name="type" id="type5" value="#Tạp_dề" >
            <label for="type5">Tạp dề</label><br>
            <input type="checkbox" name="type" id="type7" value="#Áo_họp_lớp">
            <label for="type7">Áo họp lớp</label><br>
            <input type="checkbox" name="type" id="type8" value="#Áo_mầm_non" >
            <label for="type8">Áo mầm non</label><br>
            <input type="checkbox" name="type" id="type9" value="#Áo_đi_biển" >
            <label for="type9">Áo đi biển</label><br>
            
            <input type="checkbox" name="type" id="type11" value="#Áo_bảo_vệ" >
            <label for="type11">Áo bảo vệ</label><br>
        </div>
        <button id="myInput_">Copy</button>
    </div>
`;
para.innerHTML = exam;
window.onload = function () {
  var coppy = 0;
  var url = window.location.href;
  const docObject = document.querySelector("body");
  if (docObject != null) {
    docObject.appendChild(para);
  }
  var url = "";
  function getName() {
    var text;
    text = document.getElementsByClassName(
      "xmi5d70 x1fvot60 xo1l8bm xxio538 xbsr9hj xuxw1ft x6ikm8r x10wlt62 xlyipyv x1h4wwuj xeuugli"
    )[0].innerText;
    text = text.replaceAll("-", "");
    text = text.replaceAll(",", "");
    text = text.replaceAll("  ", "_");
    text = text.replaceAll(" ", "_");
    console.log(text + ":" + url);
    text = "#" + text;
    document.querySelector(".extension-fa_").innerText = text;
    if (url != text) {
      url = text;
      coppy = 0;
    }
    if (coppy == 0) {
      coppy = 1;
    }
  }
  setInterval(getName, 1000);
  document.getElementById("myInput_").onclick = function () {
    var copyText = document.getElementById("myInput").innerText;
    var check = document.getElementsByTagName("input");
    var valCheck = "";
    if (valCheck.split("true\n").length == 2) {
      valCheck = valCheck.split("true\n")[1];
    }
    var text =
      "\n\n========================\nĐỒNG PHỤC HỒNG HÀ - KIẾN TẠO THƯƠNG HIỆU\n☎ Hotline:  0819.924.327 / 0904.476.721\n#Đồng_Phục_Hồng_Hà\n";
    text = text + copyText;
    navigator.clipboard.writeText(text);
  };
};
