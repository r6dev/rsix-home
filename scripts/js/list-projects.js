async function update() {
  const url = "https://api.github.com/users/r6dev";
  const response = await fetch(url);
  const result = await response.json();

  document.getElementById("user-desc").innerHTML = result.bio;
}

async function getProjects() {
  const url = "";
  const response = await fetch(url);
  const result = await response.json();
}

update();
getProjects();
