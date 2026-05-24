const APP_URL = "https://script.google.com/macros/s/AKfycbyxA2GSUAsq1TJrMFDufPp-z0fUowwicErwsFT11mDSmZ2KZr2BhfYIX84XaD_qpX6w/exec";

window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  const frame = document.getElementById("toniFrame");
  const openExternal = document.getElementById("openExternal");

  openExternal.addEventListener("click", () => {
    window.location.href = APP_URL;
  });

  frame.addEventListener("load", () => {
    setTimeout(() => {
      splash.classList.add("hidden");
    }, 450);
  });

  setTimeout(() => {
    splash.classList.add("hidden");
  }, 2500);

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  }
});
