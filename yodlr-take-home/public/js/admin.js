const $userList = $(`.user-list`);

// generate a user card list
function generateUserList(user) {
  return $(`
    <div class="card mb-3" id="${user.id}">
        <div class="card-body">
          <h5 class="card-title name">${user.firstName} ${user.lastName}</h5>
          <h6 class="card-subtitle mb-2 text-muted email">${user.email}</h6>
          <p class="card-text">${user.state}</p>
        </div>
    </div>
`);
}

// get and display user list
async function getUserList() {
  // get user data
  const list = await axios.get("/users");

  // clear list
  $userList.empty();

  // input html elment into the page
  list.data.map((user) => {
    $userList.append(generateUserList(user));
  });
}

// run when DOM loads
$(getUserList);
