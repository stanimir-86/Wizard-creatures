# Wizard-creatures
JS Backend
1.Init project and structure
2.Setup developer environment(Made a file constants.js);
3.Install express and nodemon.Made a run script "start" with route src/index.js.Same for the "main".
-configure static middleware
-configure bodyparser
-configure routes
4.Add images and CSS in public directory.
5.Add html files in views directory.
6.Install express-handlebars.
-configure view engine.
-add main layout.
-fix hyperlink stiles
-render home page in hbs
7.Convert all html views to handlebars.
-Group views by meaning.
8.Add controller folder with home controller.
9.Add database.
-install mongoose.
-connect to db.
10.Prepare user functionality.
-user controller.
-add controller to routes.
-fix navigations in the nav bar(login,register,logout).
-render register page.
-render login page.
11.Add user model.
-simple validation in Schema.
-add method for register.
-create first User record in the DB.
-validate password missmach.
-validate email already exists.
12.Hash password.
-install bcrypt.
-hash password.
13.Login
-find user by email.
-validate password with hash.
14.Generate jsonwebtoken.
-install jsonwebtoken.
-promisify jsonwebtoken.
-generate secret.
-generate tken in service controler.
15.Return token in cookie.
-install cookie-parcer.
-configure cookie-parser.
-set cookie with the token.
16.Implement Logout.
17.Authentication middleware.
-create middlare directory
-add auth middleware and import in in express config below cookieParser
-decode the token
-handle invalid token
-provide authorization
18.Dynamic navigation
-conditional options in navigation
-add data to res.locals for hbs templates


