# Ask Me Anything

Ask a question or answer a question.  That's all!

This is a simple app I made to practice working with Spring Boot and a React front end.  I started with some code modified from [Rajeev's tutorial](https://www.callicoder.com/spring-boot-spring-security-jwt-mysql-react-app-part-1/).


![app picture](/no-more-pain-screenshot.jpeg)

## Built With

ReactJS, Spring Boot, Spring Data JPA, Spring Security and MySQL.

## Getting Started

### Prerequisites

- A package manager like [npm](https://www.npmjs.com/)
- [yarn]
- [Java](https://www.java.com/en/download/help/download_options.xml)
- [MySQL](https://www.mysql.com/)
- [Node.js](https://nodejs.org/en/)
- [Maven](http://maven.apache.org/download.cgi)


### Installing and Development
Steps to Setup the Spring Boot Back end app (in the root directory)

1. **Clone the application**

	```bash
	git clone https://github.com/b-bly/ask-me-anything
	cd ask me anything
	```

2. **Create MySQL database**

	```bash
	create database ask-me-anything
	```

3. **Change MySQL username and password as per your MySQL installation**

	+ open `src/main/resources/application.properties` file.

	+ change `spring.datasource.username` and `spring.datasource.password` properties to what you have for mysql

4. **Run the app**

	Run this command

	```bash
	mvn spring-boot:run
	```

	The server should start on port 8080.

	You can also package the application in the form of a `jar` file and then run it like so -

	```bash
	mvn package
  cd target
  ls *.jar
```
You should see a jar file named something like ask-me-anything-api-0.0.1-SNAPSHOT.jar
Run the following with the name of the jar file:

```bash
	java -jar name-of-the-jar-file.jar
	```

5. **Default Roles**
	
	The Spring Boot api uses role based authorization powered by spring security. To add the default roles in the database, there are sql queries in `src/main/resources/data.sql` file. Spring boot will automatically execute this script on startup:

	```sql
	INSERT IGNORE INTO roles(name) VALUES('ROLE_USER');
	INSERT IGNORE INTO roles(name) VALUES('ROLE_ADMIN');
	```

	Any new user who signs up to the app is assigned the `ROLE_USER` by default.

## Steps to Setup the React Front end app (app)

First go to the `src/main/app` folder -

```bash
cd src/main/app
```

Then type the following command to install the dependencies and start the application -

```bash
npm install && npm start
```

The front-end server will start on port `3000`.


### Completed Features

- [x] CRUD routes for questions and answers.
- [x] Client-side routing with react-router-dom.
- [x] Role-based authentication with spring security.

### Next Steps

- [ ] Deployment

## Author

Brendt Bly


## Acknowledgments

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
I modified a lot of back end code from [Rajeev's tutorial](https://www.callicoder.com/spring-boot-spring-security-jwt-mysql-react-app-part-1/).  This was a very helpful tutorial, which I highly recommend if you're learning to use Java Spring with React.

And [Geoff Bourne](https://medium.com/@itzgeoff/including-react-in-your-spring-boot-maven-build-ae3b8f8826e) has a slick way of configuring the app to have maven activate yarn to build the app.