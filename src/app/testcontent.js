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

//$("#btn_random").click();
