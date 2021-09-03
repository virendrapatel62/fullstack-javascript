function getUser(callback) {
  console.log("Getting users..");
  setTimeout(() => {
    console.log("Got the users...");
    callback(["virendra", "sandeep", "mohan"]);
  }, 2000);
}

function getRepos(user, callback) {
  console.log("Getting Repos of the user..");
  setTimeout(() => {
    console.log("Got the respos...");
    callback(["node js", "angular-fullstack"]);
  }, 2000);
}

function getBrances(repo, callback) {
  console.log("Getting branches of the repo..");
  setTimeout(() => {
    console.log("Got the branches...");
    callback(["master", "feature", "fix/something"]);
  }, 2000);
}

getUser((users) => {
  const user1 = users[0];
  getRepos(user1, (respos) => {
    const master = respos[0];
    getBrances(master, (branches) => {
      console.log(branches);
    });
  });
});
