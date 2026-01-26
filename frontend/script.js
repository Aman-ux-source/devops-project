function checkStatus() {
  fetch('http://backend-service:8080/api/health')
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

