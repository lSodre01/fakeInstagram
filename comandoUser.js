async register(req, res) {
    const { name, email, password, username } = req.body;
    try {
      const user = await User.create({
        name,
        email,
        password,
        username,
        avatar: "link",
        create_at: new Date().toISOString(),
      });

      return res.redirect("/login");
    } catch (err) {
      console.log(err);
      return res.redirect("/registro");
    }
  },
};
