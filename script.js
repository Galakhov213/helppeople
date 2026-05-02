function checkURL() {
  let url = document.getElementById("urlInput").value;

  if (url.includes("free") || url.includes("win") || url.includes("bonus")) {
    document.getElementById("result").innerText = "⚠️ Возможно мошенничество";
  } else if (url.startsWith("https://")) {
    document.getElementById("result").innerText = "✅ Ссылка выглядит безопасно";
  } else {
    document.getElementById("result").innerText = "❗ Проверь ссылку внимательнее";
  }
}
