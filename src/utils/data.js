let listAccount = [];
class Account {
    constructor(username, password, fullname, role) {
      this.username = username;
      this.password = password;
      this.fullname = fullname;
      this.role = role;
    }
  }

let adminAccount = new Account(
    "phamcongminh",
    "minh123",
    "Pham Cong Minh",
    "admin"
);

listAccount.push(adminAccount);

export {  listAccount };