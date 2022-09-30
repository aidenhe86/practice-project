const $registerForm = $(`#form`);
const $email = $(`#email`);
const $firstName = $(`#first-name`);
const $lastName = $(`#last-name`);

// register function
async function register(evt) {
  evt.preventDefault();

  // get data
  const email = $(`#email`).val();
  const firstName = $(`#first-name`).val();
  const lastName = $(`#last-name`).val();

  //   post request to register
  await axios.post(`/users`, { email, firstName, lastName });
}

$registerForm.on(`submit`, register);
