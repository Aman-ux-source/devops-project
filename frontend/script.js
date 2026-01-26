function checkStatus() {
  fetch("/api/health")
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").innerHTML =
        "✅ Backend Status: " + data.status;
    })
    .catch(() => {
      document.getElementById("result").innerHTML =
        "❌ Backend not reachable";
    });
}

