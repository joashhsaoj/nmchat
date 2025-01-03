// ==UserScript==
// @name         Load Next.js Project
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Load a Next.js project hosted on Vercel into the current page
// @author       Your Name
// @match        http://v1.70os.top/*
// @match        http://v1.chat1v1.cn/*
// @match        http://v1.chatbbq.cn/*
// @match        http://v1.web1v1.cn/*
// @match        http://v2.chatbbq.cn/*
// @match        http://v2.henbaidu.com/*
// @match        http://v6.nm1v1.cn/*
// @match        http://v9.webttt.cn/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // 检查是否在 iframe 内部运行
  if (window.self !== window.top) {
    return; // 如果在 iframe 内部运行，则退出脚本
  }

  const container = document.createElement("iframe");
  container.src = "https://nmchat.vercel.app";
  container.style.position = "fixed";
  container.style.top = "0px";
  container.style.right = "0px";
  container.style.zIndex = "19991999";
  container.style.cursor = "move";
  container.style.width = "400px";
  container.style.height = "420px";
  container.style.border = "5px solid black";
  container.style.overflow = "none";
  //container.style.borderLeft = "10px solid black";
  //container.style.borderBottom = "10px solid transparent";
  //container.allow = "fullscreen; clipboard-read; clipboard-write";
  container.sandbox = "allow-scripts allow-same-origin allow-forms";

  const adjustContainerSize = () => {
    const body = container.contentDocument.body;

    container.style.width = `${body.scrollWidth + 10}px`;
    container.style.height = `${body.scrollHeight + 10}px`;
    console.log(`Width: ${container.style.width + 10}px`);
    console.log(`Height: ${container.style.height + 10}px`);
  };

  container.onload = () => {
    const resizeObserver = new ResizeObserver(adjustContainerSize);
    resizeObserver.observe(container.contentDocument.body);
  };

  let isDragging = false;
  let startX, startY;

  const startDrag = (e) => {
    isDragging = true;
    container.style.pointerEvents = "none"; // 暂时禁用鼠标事件
    startX = (e.clientX || e.touches[0].clientX) - container.offsetLeft;
    startY = (e.clientY || e.touches[0].clientY) - container.offsetTop;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchmove", onMouseMove);
    document.addEventListener("touchend", stopDrag);
  };

  const onMouseMove = (e) => {
    if (isDragging) {
      container.style.left =
        (e.clientX || e.touches[0].clientX) - startX + "px";
      container.style.top = (e.clientY || e.touches[0].clientY) - startY + "px";
    }
  };

  const stopDrag = () => {
    isDragging = false;
    container.style.pointerEvents = "auto"; // 恢复鼠标事件
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", stopDrag);
    document.removeEventListener("touchmove", onMouseMove);
    document.removeEventListener("touchend", stopDrag);
  };

  container.addEventListener("mousedown", startDrag);
  container.addEventListener("touchstart", startDrag);

  document.body.appendChild(container);

  const script = document.createElement("script");
  script.textContent = `
$("#msg_tips").remove();
$("#theme_sun_moon").remove();
$("#colorpicker").remove();

$.cookie("isMoon", 1, { expires: 365 });
$("#themeChange").attr("href", "/css/random-black.css?v=1");
$("body").css("background-color", "#414550");
$.cookie("colorpicker", "#414550", { expires: 365 });

//$.cookie("isSound", -1, { expires: 365 });
//$("#msg_tips").attr("src", "/img/sys/sound_off.png");

$('img[alt="nmchat.cn 匿名聊"]').remove();

$("#AltInfo").remove();

$(
  'div[style="text-align: center; line-height: 18px; letter-spacing: 2px; margin: 5px; margin-top: 0px; "]'
).remove();

function random_queue_get_random_getID(json) {
  fun_loading(false);

  randomGetIDTime = new Date();

  //haveTitleTips("已匹配");

  sel_userid = json.sel_userid;

  //sendJson('getprivmsg', sel_userid, true);

  if (ws && ws.readyState == 1 && typeof sel_userid != "undefined") {
    //fun_loading(true);

    layer.close(index_more);

    //sendJson('getprivmsg', sel_userid, true);

    selUserInfo =
      '<div id="randomSelInfo" onclick="return false;" style="width: 250px;text-align: center;margin: 10px auto;color: #AAA;line-height: 20px;letter-spacing: 2px;background-color: transparent;border-radius: 10px;padding: 10px;border: 1px solid #009688;">';
    selUserInfo +=
      '<img alt="Deskry 匿名聊" src="/img/sys/logo.png" width="50" style="position: relative;top:0px;margin-bottom:5px;" />';
    selUserInfo +=
      '<div style="text-align: left; text-indent: 0em;font-size: 13px;text-align:center">对方昵称：<span style="color:orange;">' +
      json.sel_userNikename +
      "</span></div>";
    selUserInfo +=
      '<div style="text-align: left; text-indent: 0em;font-size: 13px;text-align:center">对方性别：<span style="color:orange;">' +
      json.sel_userSex +
      "</span></div>";
    selUserInfo +=
      '<div style="text-align: left; text-indent: 0em;font-size: 13px;text-align:center">对方年龄：<span style="color:orange;">' +
      json.sel_userAge +
      "</span></div>";
    selUserInfo +=
      '<div style="text-align: left; text-indent: 0em;font-size: 13px;text-align:center">对方城市：<span style="color:orange;">' +
      json.sel_userAddress +
      "</span></div>";
    selUserInfo +=
      '<div style="text-align:center;text-indent: 0em;"><span style="color: #5BC0DE; font-weight: 700;">nmliao.cn(匿名聊)</span></div>';
    selUserInfo += "</div>";

    if (!dic_userlist[sel_userid]) {
      dic_userlist[sel_userid] = json.sel_userNikename;

      var htmlstr =
        "<a id='userid_" +
        sel_userid +
        "' class='list-group-item userList' style='color:black' onfocus='this.blur()' onclick='click_userlist(id);'>" +
        "<img id='doheart_userid_" +
        sel_userid +
        "' onclick='DoHeartUser(id);' alt='点击收藏' src='/img/sys/emptyheart.png' style='position: absolute;top: 2px;left: 0px;width: 20px;margin: 8px;z-index: 1;' />" +
        "<span class='badge'></span><span style='margin-right:5px;position: absolute;top: 9px;left: 28px;' class='zql-bnt-user'></span>" +
        "<span style='margin-left: 40px;' class='nickname'>" +
        json.sel_userNikename +
        "<span>" +
        "<i id='manage_userid_" +
        sel_userid +
        "_" +
        json.sel_userNikename +
        "' class='layui-icon layui-icon-more-vertical' style='float: right;'  onclick='ManageUser(id);'></i></a>";

      $("#user_list").prepend(htmlstr);
    }

    $("#div_privmsg").html("");

    $("#div_privmsg").append(selUserInfo);

    $("#div_msgbox_first").hide();
    $("#div_msgbox").hide();
    $("#div_privmsg").show();
    $("#div_privmsg").scrollTop($("#div_privmsg")[0].scrollHeight);

    $("#div_SNSInfo").hide();

    fancyimg();

    scrotop();

    clearInterval(timeDiffSet);
    handleTimeDiff();
    timeDiffSet = setInterval(handleTimeDiff, 10000);

    $("#goTop").show();
    $("#warningReport,#doBlack,#doAD").show();
    $("#goBottom").show();

    $(".input-main").show();
    $("#btn_random").hide();
    $("#btn_random_break").show();
    $("#btn_random_return").hide();

    /// 获取之前信息 开始

    //fun_getUserOldMsgs();

    /// 获取之前信息 开始
  }
}

$("#SlideSysInfos").remove();
$(
  'div[style="text-align: center; line-height: 18px; letter-spacing: 1px; margin: 5px; color: #BBB; font-size: 12px;"]'
).remove();
$(".sysInfo").remove();

//$("#user_count").remove(); //测试是否显示的好友变多
$("#user_list").css("height", "90%");
        `;
  script.onload = () => {
    console.log("脚本加载成功");
  };
  script.onerror = () => {
    console.error("脚本加载失败");
  };
  document.head.appendChild(script);

  //

  $("#btn_random").click(function () {
    sendPublic = "";

    fun_loading(false);

    $("#div_msgbox_first").show();
    $("#div_msgbox").hide();
    $("#div_privmsg").hide();

    $("#div_SNSInfo").hide();

    sendJson("random", "", true);

    layer.close(inputStatusTips);
    inputStatusTips = null;
    console.log("触发");
  });
  $("#btn_random").click();

  let intervalId = null;
  let genders;
  window.addEventListener(
    "message",
    (event) => {
      if (event.origin === "https://nmchat.vercel.app") {
        if (event.data.genders) {
          genders = event.data.genders;
        }
        if (event.data.state === "START") {
          intervalId = setInterval(() => {
            $("#ButtonRandom").click();
            $("#btn_random").click();
            var name = $("#randomSelInfo").find("span").eq(0).text();
            var gender = $("#randomSelInfo").find("span").eq(1).text();
            var age = $("#randomSelInfo").find("span").eq(2).text();
            warning_Black();
            $(".layui-layer-btn0").click();
            console.log(
              "name: " + name + " | gender: " + gender + " | age: " + age
            );

            var name = $("#randomSelInfo").find("span").eq(0).text();
            console.log(name);

            // 点击按钮
            $("#btn_random").click();

            // 初始值
            let initialValue = $("#randomSelInfo").find("span").eq(0).text();

            // 每100毫秒检测一次
            let intervalId = setInterval(function checkValue() {
              let currentValue = $("#randomSelInfo").find("span").eq(0).text();
              if (currentValue !== initialValue) {
                console.log("值发生了变化:", currentValue);
                clearInterval(intervalId); // 停止检测
              }
            }, 100);

            setTimeout(function () {
              warning_Black();
              $(".layui-layer-btn0").click();
              var name = $("#randomSelInfo").find("span").eq(0).text();
              var gender = $("#randomSelInfo").find("span").eq(1).text();
              var age = $("#randomSelInfo").find("span").eq(2).text();
              console.log(
                "name: " + name + " | gender: " + gender + " | age: " + age
              );
            }, 90);

            // var name = $("#randomSelInfo").find("span").eq(0).text();
            // var gender = $("#randomSelInfo").find("span").eq(1).text();
            // var age = $("#randomSelInfo").find("span").eq(2).text();
            // //var location = $("#randomSelInfo").find("span").eq(3).text();
            // console.log(
            //   "name: " +
            //     name +
            //     " | gender: " +
            //     gender +
            //     " | age: " +
            //     age +
            //     " | location: " +
            //     location
            // );
            // const now = new Date();
            // console.log(now); // 输出当前日期和时间
            // console.table([
            //   { name: name, gender: gender, age: age, location: location },
            // ]);
            // if (gender == "女") {
            //   container.contentWindow.postMessage(
            //     { name: name, age: age, location: location },
            //     "https://nmchat.vercel.app"
            //   );
            //   //console.log("name: " + name + " | gender: " + gender + " | age: " + age + " | location: " + location);
            //   // console.log(
            //   //   "name: " + name + " | age: " + age + " | location: " + location
            //   // );
            // }
            if (
              (gender == "男" && genders.male) ||
              (gender == "女" && genders.female) ||
              (gender == "保密" && genders.unknown)
            ) {
              console.log("1");
              warning_Black();
              $(".layui-layer-btn0").click();
            } else {
              console.log("2");
              event.data.state = "PAUSE";
              clearInterval(intervalId);
              intervalId = null;
            }
          }, 1000);
        } else if (event.data.state === "PAUSE") {
          if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
          }
        }
      }
    },
    false
  );
})();
