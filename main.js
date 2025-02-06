document.addEventListener("DOMContentLoaded", () => {
  const bodyId = document.body.id;
  if (bodyId === "firstPage") {
    const adBanner = document.getElementById("adBanner");
    const closeAdButton = document.getElementById("closeAd");
    let isAdDisplayed = false; // 標誌變數，確保廣告只顯示一次

    // 監聽滾動事件
    window.addEventListener("scroll", () => {
      if (isAdDisplayed) return; // 如果廣告已顯示，不再觸發
      const scrollPosition = window.scrollY;

      // 當滾動超過 500px，顯示橫幅廣告
      if (scrollPosition > 900) {
        adBanner.classList.add("active"); // 啟動滑入動畫
        isAdDisplayed = true; // 設置標誌為已顯示
        console.log("橫幅廣告顯示");
      }
    });

    // 點擊關閉按鈕，隱藏廣告
    closeAdButton.addEventListener("click", () => {
      adBanner.classList.remove("active"); // 啟動滑出動畫
      setTimeout(() => {
        adBanner.style.display = "none"; // 完全隱藏
      }, 800); // 等待動畫完成後隱藏
      console.log("橫幅廣告已關閉");
    });

    const nextPageButton = document.getElementById("nextPageButton");
      nextPageButton.addEventListener("click", () => {
       // 跳轉到下一個頁面
        window.location.href = "next-page.html";
      });
  }else if (bodyId === "secondPage") {
    const nextPageButton = document.getElementById("lastPageButton");
    nextPageButton.addEventListener("click", () => {
     // 跳轉到上一個頁面
      window.location.href = "index.html";
    });
  }
});

    
  
      