document.addEventListener("DOMContentLoaded", () => {
  const newsItems = [
    "🎓 Form 4 Mock Exams begin July 10, 2025.",
    "⚽ Inter-house sports competitions resume August 2, 2025.",
    "📢 Open Day for prospective parents: September 5, 2025.",
    "🛠 New science lab renovations completed!"
  ];

  const container = document.getElementById("news-items");
  container.innerHTML = "<ul>" + newsItems.map(item => `<li>${item}</li>`).join('') + "</ul>";
});
