function confirmDelete(event) {
    console.log("Delete confirmation triggered"); // debug log
    if (!confirm("🗑 Are you sure you want to delete this post? This action cannot be undone.")) {
        event.preventDefault(); // Stop form from submitting
    }
}
