function getUsers() {
  const promise = new Promise((resolve, reject) => {
    console.log("Getting users..");
    setTimeout(() => {
      console.log("Got the users..");
      resolve(["virendra", "sandeep", "user"]);
    }, 2000);
  });
  return promise;
}

function getRepos(user) {
  const promise = new Promise((resolve, reject) => {
    console.log("Getting Repos of ", user);
    setTimeout(() => {
      console.log("Got the repos of", user);
      resolve(["Angular", "node project", "Render"]);
    }, 2000);
  });
  return promise;
}

function getBranches(repo) {
  const promise = new Promise((resolve, reject) => {
    console.log("Getting Branches of ", repo);
    setTimeout(() => {
      console.log("Got the Branches of", repo);
      resolve(["Master", "feature", "fix/bug"]);
    }, 2000);
  });
  return promise;
}

async function doSomething() {
  const users = await getUsers();
  const user = users[0];

  const repos = await getRepos(user);
  const master = repos[0];

  const branches = await getBranches(master);
  console.log(branches);
}

doSomething();

getUsers()
  .then((users) => getRepos(users[0]))
  .then((repos) => getBranches(repos[0]))
  .then((branches) => {
    console.log(branches);
  });
