function abc(fnc) {
  fnc(function f1(f2) {
    f2(function f3(f4) {
      f4(function f5() {
        console.log("hello and final hello.");
      });
    });
  });
}
abc(function (f1) {
  f1(function f2(f3) {
    f3(function f4(f5) {
      f5();
    });
  });
});

// setTimeout
function afterDelay(time, cb) {
  setTimeout(() => {
    cb();
  }, time);
}
afterDelay(3000, function () {
  console.log("Callback execute.");
});

// ## Exercise 2 — Intermediate (Data flow)

// **Task (Hindi):** Ek function banao `getUser`

// **Requirements:**
// - `getUser` `username` lega
// - 1 second ke baad `callback` ko ek object de:
//   - `id`
//   - `username`

// **Then:**
// - Callback ke andar ek aur function call karo `getUserPosts`

// **`getUserPosts` requirements:**
// - `userId` lega
// - 1 second ke baad `callback` ko `posts` ka array de

// **Final output:**
// - User ka `username` print ho
// - Fir uske `posts` print ho

// **Goal:**
// - Samajhna ki ek async ka result next async ko kaise milta hai
// - Callback chaining practice

function getUser(username, cd) {
  setTimeout(() => {
    cd({ id: 123, username: "kavita" });
  }, 1000);
}
function getUserPosts(id, cd) {
  setTimeout(() => {
    cd(["reels", "anime", "manga"]);
  }, 1000);
}
getUser("kavita", function (data) {
  getUserPosts(data.id, function (allPosts) {
    console.log(data.username, allPosts);
  });
});

// ## Exercise 3 — Intermediate (Callback dependency — thoda painful)

// **Task (Hindi):** Teen functions banao:

// 1. `loginUser`
//    - 1 second baad callback ko `user` object de
// 2. `fetchPermissions`
//    - `userId` lega
//    - 1 second baad callback ko `permissions` array de
// 3. `loadDashboard`
//    - `permissions` lega
//    - 1 second baad callback ko `"Dashboard loaded"` bole

// **Flow:**
// - Pehle `loginUser`
// - Uske andar `fetchPermissions`
// - Uske andar `loadDashboard`
// - Final output console mein print ho

// **Goal:**
// - Callback nesting ko feel karna

function loginUser(user, cd) {
  setTimeout(() => {
    cd({ user: "kavita" , id : 123});
  }, 1000);
}
function fetchPermission(userId, cd) {
  setTimeout(() => {
    cd(["read", "write", "delete"]);
  }, 1000);
}
function loadDashboard(permissions, cd) {
  setTimeout(() => {
    cd();
  }, 1000);
}

loginUser("kavita",function(data){
  fetchPermission(data.id,function(permission){
    loadDashboard(permission,function(){
      console.log("👍 Dashboard Loaded...");
    })
  })
})