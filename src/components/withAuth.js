const withAuth = (Component) => {
    const AuthRoute = () => {
      const isAuth = !!localStorage.getItem("token");
      if (isAuth) {
        return <Component />;
      } else {
        return <Redirect to="/Home" />;
      }
    };
  
    return AuthRoute;
};

export default withAuth;