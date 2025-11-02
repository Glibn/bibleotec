import {
  alert,
  notice,
  info,
  success,
  error,
  defaultModules,
} from "@pnotify/core/dist/PNotify.js";

import * as PNotifyMobile from "@pnotify/mobile/dist/PNotifyMobile.js";

import "@pnotify/core/dist/BrightTheme.css";

import "@pnotify/core/dist/PNotify.css";

import "@pnotify/mobile/dist/PNotifyMobile.css";

defaultModules.set(PNotifyMobile, {});

// info({
//   text: "This message will be shown for 5 seconds.",

//   delay: 5000,
// });

const btn = document.querySelector("buton");
btn.addEventListener("click", () => {
  error({
    title: "все пропало!",
    text: "пробуй ще",
    delay: 1000,
  });
});
