var posts=["2024/12/25/hello-world/","2025/01/07/new-title/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };