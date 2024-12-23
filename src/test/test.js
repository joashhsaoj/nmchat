// ==UserScript==
// @name         Load Next.js Project
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Load a Next.js project hosted on Vercel into the current page
// @author       Your Name
// @match        *://*/*
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
  container.style.width = "400px";
  container.style.height = "600px";
  container.style.cursor = "move"; // 设置鼠标样式为移动
  container.style.border = "5px solid black";
  //container.style.borderLeft = "10px solid black";
  //container.style.borderBottom = "10px solid transparent";
  container.allow = "fullscreen; clipboard-read; clipboard-write";
  container.sandbox = "allow-scripts allow-same-origin allow-forms";

  const adjustIframeSize = () => {
    container.style.width =
      container.contentDocument.documentElement.scrollWidth + 10 + "px";
    container.style.height =
      container.contentDocument.documentElement.scrollHeight + 10 + "px";
  };
  container.onload = adjustIframeSize;

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
})();
