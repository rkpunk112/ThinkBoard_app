export function formatDate(date) {
  try {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch (err) {
    console.error("formatDate error:", err);
    return "Invalid Date";
  }
}
