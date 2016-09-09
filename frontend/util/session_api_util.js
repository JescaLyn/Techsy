export const signup = (user, success, error) => {
  $.ajax({
    method: "post",
    url: "/api/users",
    data: user,
    success,
    error
  });
};

export const login = (user, success, error) => {
  $.ajax({
    method: "post",
    url: "/api/session",
    data: user,
    success,
    error
  });
};

export const logout = success => {
  $.ajax({
    method: "delete",
    url: "/api/session",
    success,
    error: () => console.log("Logout unsuccessful")
  });
};

export const fetchCurrentUser = (userId, success, error) => {
  $.ajax({
    method: "get",
    url: `/api/users/${userId}`,
    success,
    error
  });
};
