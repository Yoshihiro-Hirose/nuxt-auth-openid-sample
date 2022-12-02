export default function (context) {
  console.log("middleware!!!");

  const auth = context.$auth;
  console.log(auth.loggedIn);
  console.log(auth.strategy.token.get());
  console.log(auth);
}
