GROUP 7 MEMBERS
Dillan Ekow Hamah Hammond - 10952785
Adu-Gyamfi Michael Kwabena - 10980219
Waqas Haaris Ali - 10947015
Bernice Animwaa Boateng - 10980324
Enyima-Quansah Enoch - 10988268
Benneh Mensah Kwame Prince - 10976056
Kuayi Rapheal – 10970285


## PROJECT REPORT 
# WEB APPLICATION FOR THE SCHOOL OF ENGINEERING SCIENCES
1.	INTRODUCTION
The Web Application for the School of Engineering Sciences is a comprehensive software engineering project developed to streamline and manage various academic processes for the School of Engineering Sciences. The project is designed to facilitate students' interaction with academic resources, administrators, and faculty members. It aims to provide a user-friendly and efficient platform for tasks such as student registration, course enrollment, fee payment, assignments, projects, exams, and more. The application is built using modern web development technologies, including PostgreSQL for the database, Spring Boot for the backend, and React for the frontend. Additionally, Bootstrap and CSS are used for styling to ensure an aesthetically pleasing and responsive user interface.

2. PROJECT SCOPE
The scope of the Web Application for the School of Engineering Sciences covers the following key modules:
2.1. Student Registration
The Student Registration module allows new students to create accounts by providing essential personal information such as name, student ID, department, email, and password. The backend manages the registration process and stores the student details in the PostgreSQL database.
 
 




2.2. Login and Authentication
The Login module enables registered students to log in securely using their student ID and password. The backend handles authentication, and upon successful login, students gain access to their personalized dashboard.
   


2.3. Student Profile
The Student Profile module allows students to view and manage their profile information, such as updating personal details and viewing academic records. The module provides a user-friendly interface for students to interact with their data.
 
2.4. Course List and Registration
The Course List and Registration module present students with a list of available courses for the semester. Students can search for courses, view course details, and register for courses they wish to attend. The backend manages course enrollment and ensures that students do not exceed their maximum credit limits.
 

2.5. Timetable
The Timetable module generates individual timetables for students based on their registered courses. The timetable displays the class schedule, including lectures, labs, and exams.
 
2.6. Fees Payment (To be developed)
The Fees Payment module enables students to view their tuition fees and make online payments. The backend ensures secure payment processing and updates students' fee payment status.
2.7. Assignments, Projects, and Labs (To be developed)
The Assignments, Projects, and Labs modules will allow faculty members to create and manage academic tasks. Students can view upcoming assignments, submit project reports, and access lab materials through the application.
 

2.8. Exams (To be developed)
The Exams module will provide students with exam schedules and allow them to view results once the exams are conducted. Faculty members can upload exam results, and students can access their grades securely.
3. Technology Stack
The Web Application for the School of Engineering Sciences utilizes the following technology stack:
Frontend:
•	React (JavaScript library)
•	Bootstrap (CSS framework)
•	React Router (for navigation)
Backend:
•	Spring Boot (Java framework)
•	PostgreSQL (Relational database)
•	Spring Security (for authentication)
•	Spring Data JPA (for database interactions)

3. SYSTEM ARCHITECTURE
The system architecture of the web application follows the Model-View-Controller (MVC) pattern. The frontend, built using React and Bootstrap, serves as the View layer responsible for rendering the user interface. The React Router handles navigation between different components. The frontend communicates with the backend server built with Spring Boot, which acts as the Controller layer. The Controller processes HTTP requests from the frontend, interacts with the database using Spring Data JPA for data manipulation, and returns appropriate responses. The database, implemented in PostgreSQL, serves as the Model layer and stores all necessary data related to students, courses, fees, and academic tasks.

4. SOFTWARE PROCESS MODEL
The development of the Web Application for the School of Engineering Sciences followed the Agile Software Development process model. Agile methodologies were chosen to ensure iterative and incremental development, enabling flexibility in responding to changing requirements and delivering a high-quality product. The Agile approach encouraged close collaboration between the development team and stakeholders, fostering continuous feedback and improvement throughout the project.


5. PROJECT IMPLEMENTATION
5.1. Frontend Development
The frontend of the application is built using React, providing a single-page application experience. The frontend is divided into various components, each responsible for specific functionalities. Key components include:
	HomePage2: A landing page providing essential information about the School of Engineering Sciences.
	HomePage: The main dashboard after login, showing a personalized overview of a student's academic activities.
	RegistrationForm: A form for new students to register on the platform.
	StudentInfoEntry: A form for students to update their profile information (integrated with Registration Form)
	LoginForm: The login form for existing students to access their accounts.
	Navbar: The navigation bar component for the application.
	Profile: A student's profile page displaying personal information and academic records.
	CourseList: A list of available courses for registration.
	LecturerList: A list of faculty members in the School of Engineering Sciences.
	TimeTable: A timetable showing the schedule of lectures, labs, and exams.
	FeesPayment: A page displaying tuition fees and allowing students to make payments.
	NavBar2: An alternative navigation bar for the application.

5.2. Backend Development
The backend of the application is built using Spring Boot to handle HTTP requests and manage database operations. Key components include:
	StudentController: Handles student-related HTTP requests, such as registration and login.
	CourseController: Manages course-related requests, including course registration and retrieval.
	AssignmentController: Provides endpoints to generate assignments for students to view.
	LecturerController: Handles requests related to Lecturers.
	TimeableController: Provides endpoints to generate individual timetables for students.
	SecurityConfig: Implements security configurations using Spring Security to handle authentication and authorization.


5.3. Database Design
The database schema is designed to store student information, course details, academic tasks, and fee-related data. PostgreSQL is used as the relational database management system. Key tables include:
	Students: Stores student details such as name, student ID, email, and password.
	Courses: Contains course information, including course code, title, and instructor details.
	Assignments: Stores assignment details, including deadlines and submissions.
	Projects: Contains project details and status.
	Exams: Stores exam schedules and results.
	Fees: Tracks student fee details, including payment status.

6. CONCLUSION
The Web Application for the School of Engineering Sciences is an ambitious and comprehensive software engineering project designed to enhance the academic experience for students and faculty members. The application provides seamless student registration, course enrollment, fee payment, and academic task management. By utilizing modern technologies such as React, Spring Boot, and PostgreSQL, the application delivers a responsive and efficient user interface while ensuring data security and reliability.
The project is a testament to the successful implementation of software engineering principles and best practices. It demonstrates the team's expertise in frontend and backend development, database design, and system architecture. The Web Application for the School of Engineering Sciences is poised to significantly improve the academic processes and user experience within the School of Engineering Sciences.




MOBILE APPLICATION FOR SCHOOL OF ENGINEERING SCIENCES
HOMEPAGE
The HomePage component is a StatefulWidget that represents the home page of the application. It provides an overview of the School of Engineering Sciences and allows users to explore different engineering departments. Here's an overview of the key features and implementation details:
•	The app bar displays the title "Home" and a back button that allows users to navigate back to the previous screen.
•	The body of the page is divided into sections with relevant information about the school and its programs.
•	The engineering departments are displayed in an expansion tile format, allowing users to expand and collapse each department's description.
•	The "About Us" section provides additional information about the school's mission and goals.
•	The bottom navigation bar provides quick access to the home page, registration page, and dashboard.



 



REGISTRATION PAGE
The registration page consists of a form where students can enter their student ID, name, UG student mail, password, and confirm password. The form includes input validation to ensure that all required fields are filled out correctly and that the passwords match.
Upon successful registration, the user is navigated to the login page. The bottom navigation bar at the bottom of the screen provides links to the home page, registration page (current page), and login page.
The page's design features a gradient background and an app bar with a dark blue color. The form inputs are styled with white background colors and appropriate icons. Error messages are displayed below the form if any validation errors occur.
Overall, the registration page aims to provide a user-friendly and secure way for students to create an account within the School of Engineering Sciences system.

LOGIN PAGE
This page allows students to log in to their accounts within the School of Engineering Sciences system.
The Login Page is similar in design to the Registration Page. It consists of an app bar at the top with a dark blue background, a back button to navigate back, and a title displaying "Login". The body of the page includes a gradient background and a form for users to enter their email and password.
The form uses the TextEditingController class to control the input fields and the GlobalKey<FormState> to validate and manage the form state. The email and password fields are styled with white backgrounds and appropriate icons.
The form validation ensures that both email and password fields are filled out before allowing the form to be submitted. If any validation errors occur, error messages are displayed below the respective input fields.
Once the form is submitted and passes the validation, the login logic can be implemented. This could involve checking the entered email and password against a database or authentication service. After successful login, the user is navigated to the student dashboard by using the Navigator.pushReplacementNamed method.
The bottom navigation bar at the bottom of the screen provides links to the home page, registration page, and login page. The current page is highlighted as the "Login" option.
In summary, the LoginPage serves as an interface for students to enter their login credentials and access their accounts within the School of Engineering Sciences system.
 


 
DASHBOARD PAGE
The Dashboard page serves as the main interface for students to access various features and functionalities within the School of Engineering Sciences system.
The Dashboard class extends StatelessWidget and defines the layout and structure of the dashboard page. It includes an app bar with a transparent background and a title displaying "Dashboard". The app bar is wrapped in a PreferredSize widget to specify the preferred height of the app bar.
The drawer on the left side of the screen provides navigation options for the user. It includes a DrawerHeader with a black background and the text "Manage Tasks" in white. Below the header, there are three ListTiles: "Home", "Dashboard" (selected), and "Sign Out". Tapping on these options navigates the user to the corresponding pages using the Navigator.pushNamed method.
The bottom navigation bar at the bottom of the screen allows the user to navigate between different sections of the dashboard. It includes six BottomNavigationBarItems: "Profile", "Assignments", "Projects", "Exams", "Results", and "Fees". Each item is represented by an icon and a label. Tapping on these items navigates the user to the respective pages using the Navigator.pushNamed method.
The body of the page is centered and contains two Text widgets displaying welcome messages to the user.
In summary, the Dashboard page provides a centralized interface for students to access and manage various tasks, activities, and information within the School of Engineering Sciences system. The page includes an app bar, a drawer for navigation, a bottom navigation bar for section selection, and a centered body displaying welcome messages.

 
 
STUDENT PROFILE PAGE
The Profile page displays the student's profile information and allows them to view and edit their personal details.
The Profile class extends StatelessWidget and defines the layout and structure of the profile page. It includes an app bar with a title "Student Profile" and a blue background.
The drawer on the left side of the screen provides navigation options for the user. It includes a DrawerHeader with a black background and the text "Manage Tasks" in white. Below the header, there are three ListTiles: "Home", "Dashboard", and "Sign Out". Tapping on these options navigates the user to the corresponding pages using the Navigator.pushNamed method.
The body of the page is wrapped in a SingleChildScrollView to enable scrolling when the content exceeds the available space. It includes a Column with crossAxisAlignment set to CrossAxisAlignment.start. Inside the column, there is a Text widget displaying "Student Profile" with a font size of 20 and bold font weight.
In the center of the column, there is a Container with a fixed width and a white background. It contains the student's profile picture (displayed using a CircleAvatar), name, student ID, department, and email. Each detail is displayed using a combination of Text widgets.
The bottom navigation bar at the bottom of the screen allows the user to navigate between different sections of the dashboard. It includes six BottomNavigationBarItems: "Profile" (selected), "Assignments", "Projects", "Exams", "Results", and "Fees". Each item is represented by an icon and a label. Tapping on these items navigates the user to the respective pages using the Navigator.pushNamed method.
The Profile page provides a view of the student's profile information, including their profile picture, name, student ID, department, and email. It also includes navigation options in the app bar and drawer, allowing the user to switch between different sections of the dashboard.

 

ASSIGNMENTS PAGE
The Assignments page displays a list of upcoming assignments and allows the user to mark them as completed using checkboxes.
The Assignments class extends StatefulWidget and defines the layout and behavior of the assignments page. It includes an app bar with a title "Assignments" and a blue background.
The drawer on the left side of the screen provides navigation options for the user. It includes a DrawerHeader with a black background and the text "Manage Tasks" in white. Below the header, there are three ListTiles: "Home", "Dashboard", and "Sign Out". Tapping on these options navigates the user to the corresponding pages using the Navigator.pushNamed method.
The body of the page is wrapped in a Padding widget with padding set to EdgeInsets.all(16.0). It includes a Column with crossAxisAlignment set to CrossAxisAlignment.start. Inside the column, there is a Text widget displaying "Upcoming Assignments" with a font size of 20 and bold font weight.
Below the text, there are three Card widgets representing the upcoming assignments. Each Card includes a CheckboxListTile widget that displays the assignment's title, due date, and a checkbox indicating whether the assignment is completed. The values of the checkboxes are stored in boolean variables (_task1Completed, _task2Completed, _task3Completed), which are updated using the onChanged callback and setState method when the checkboxes are toggled.
The bottom navigation bar at the bottom of the screen allows the user to navigate between different sections of the dashboard. It includes six BottomNavigationBarItems: "Profile", "Assignments" (selected), "Projects", "Exams", "Results", and "Fees". Each item is represented by an icon and a label. Tapping on these items navigates the user to the respective pages using the Navigator.pushNamed method.
The Assignments page displays a list of upcoming assignments with checkboxes to mark them as completed. It also includes navigation options in the app bar and drawer, allowing the user to switch between different sections of the dashboard.

 

PROJECTS PAGE
The Projects page displays a list of upcoming projects.
The Projects class extends StatelessWidget and defines the layout and behavior of the projects page. It includes an app bar with a title "Projects" and a blue background.
The drawer on the left side of the screen provides navigation options for the user, similar to the previous pages. It includes a DrawerHeader with a black background and the text "Manage Tasks" in white. Below the header, there are three ListTiles: "Home", "Dashboard", and "Sign Out". Tapping on these options navigates the user to the corresponding pages using the Navigator.pushNamed method.
The body of the page is wrapped in a SingleChildScrollView widget to enable scrolling when the content exceeds the available space. Inside the SingleChildScrollView, there is a Padding widget with padding set to EdgeInsets.all(16.0). It includes a Column with crossAxisAlignment set to CrossAxisAlignment.start. Inside the column, there is a Text widget displaying "Upcoming Projects" with a font size of 20 and bold font weight.
Below the text, there are four Card widgets representing the upcoming projects. Each Card includes a ListTile widget that displays the project's title and due date. Some projects have subtitles indicating additional details. The list of projects is hardcoded in the code but can be replaced with dynamic data from an external source.
The bottom navigation bar at the bottom of the screen is similar to the previous pages. It allows the user to navigate between different sections of the dashboard. It includes six BottomNavigationBarItems: "Profile", "Assignments", "Projects" (selected), "Exams", "Results", and "Fees". Each item is represented by an icon and a label. Tapping on these items navigates the user to the respective pages using the Navigator.pushNamed method.
In summary, the Projects page displays a list of upcoming projects. It includes navigation options in the app bar and drawer and a bottom navigation bar to switch between different sections of the dashboard.

 



EXAMS PAGE
The Exams page displays an exam timetable with the dates of upcoming exams.
The Exams class extends StatelessWidget and defines the layout and behavior of the exams page. It includes an app bar with the title "Exam Timetable" and a blue background.
The drawer on the left side of the screen provides navigation options for the user, similar to the previous pages. It includes a DrawerHeader with a black background and the text "Manage Tasks" in white. Below the header, there are three ListTiles: "Home", "Dashboard", and "Sign Out". Tapping on these options navigates the user to the corresponding pages using the Navigator.pushNamed method.
The body of the page is wrapped in a Padding widget with padding set to EdgeInsets.all(16.0). Inside the padding, there is a Column with crossAxisAlignment set to CrossAxisAlignment.start. Inside the column, there is a Text widget displaying "Exam Timetable" with a font size of 20 and bold font weight.
Below the text, there are three Card widgets representing the upcoming exams. Each Card includes a ListTile widget that displays the exam's title and date. The list of exams is hardcoded in the code but can be replaced with dynamic data from an external source.
The bottom navigation bar at the bottom of the screen is similar to the previous pages. It allows the user to navigate between different sections of the dashboard. It includes six BottomNavigationBarItems: "Profile", "Assignments", "Projects", "Exams" (selected), "Results", and "Fees". Each item is represented by an icon and a label. Tapping on these items navigates the user to the respective pages using the Navigator.pushNamed method.
In summary, the Exams page displays an exam timetable with the dates of upcoming exams. It includes navigation options in the app bar and drawer and a bottom navigation bar to switch between different sections of the dashboard.

 



RESULTS PAGE
The Results page displays the CGPA (Cumulative Grade Point Average) and a table of course results.
The Results class extends StatelessWidget and defines the layout and behavior of the Results page. It includes an app bar with a title "Results" and a blue background.
The drawer on the left side of the screen provides navigation options for the user, similar to the previous pages. It includes a DrawerHeader with a black background and the text "Manage Tasks" in white. Below the header, there are three ListTiles: "Home", "Dashboard", and "Sign Out". Tapping on these options navigates the user to the corresponding pages using the Navigator.pushNamed method.
The body of the page consists of a SingleChildScrollView wrapped in a Padding widget. Inside the padding, there is a Column with crossAxisAlignment set to CrossAxisAlignment.start. Inside the column, there is a Text widget displaying the CGPA with a font size of 20 and bold font weight.
Below the text, there is a SingleChildScrollView with a horizontal scroll direction. Inside it, there is a DataTable widget representing the course results table. The DataTable is populated with data from the paymentData list, which contains a list of maps representing each course result. Each map contains the course code, course title, and grade. The columns of the DataTable are defined using DataColumn widgets, and the rows are generated dynamically using the paymentData list.
The bottom navigation bar at the bottom of the screen is similar to the previous pages. It allows the user to navigate between different sections of the dashboard. It includes six BottomNavigationBarItems: "Profile", "Assignments", "Projects", "Exams", "Results" (selected), and "Fees". Each item is represented by an icon and a label. Tapping on these items navigates the user to the respective pages using the Navigator.pushNamed method.
In summary, the Results page displays the CGPA and a table of course results. It includes navigation options in the app bar and drawer and a bottom navigation bar to switch between different sections of the dashboard.

 
FEES PAYMENT PAGE
The Fees page displays a table of payment data, including the date, description, and amount of each payment.
The Fees class extends StatelessWidget and defines the layout and behavior of the Fees page. It includes an app bar with a title "Fees" and a blue background.
The drawer on the left side of the screen provides navigation options for the user, similar to the previous pages. It includes a DrawerHeader with a black background and the text "Manage Tasks" in white. Below the header, there are three ListTiles: "Home", "Dashboard", and "Sign Out". Tapping on these options navigates the user to the corresponding pages using the Navigator.pushNamed method.
The body of the page consists of a SingleChildScrollView wrapped in a Padding widget. Inside the padding, there is a Column with crossAxisAlignment set to CrossAxisAlignment.start. Inside the column, there is a Text widget displaying the title "Fees Payment" with a font size of 20 and bold font weight.
Below the text, there is a DataTable widget representing the payment data table. The DataTable has three columns defined using DataColumn widgets: "Date", "Description", and "Amount". The rows of the DataTable are generated dynamically using the paymentData list, which contains a list of maps representing each payment. Each map contains the date, description, and amount of the payment. The rows are generated by mapping over the paymentData list and creating a DataRow for each payment.
The bottom navigation bar at the bottom of the screen is similar to the previous pages. It allows the user to navigate between different sections of the dashboard. It includes six BottomNavigationBarItems: "Profile", "Assignments", "Projects", "Exams", "Results", and "Fees" (selected). Each item is represented by an icon and a label. Tapping on these items navigates the user to the respective pages using the Navigator.pushNamed method.
In summary, the Fees page displays a table of payment data, including the date, description, and amount of each payment. It includes navigation options in the app bar and drawer and a bottom navigation bar to switch between different sections of the dashboard.

 

LOGOUT PAGE
The LogoutPage is displayed when the user successfully logs out of the application.
The LogoutPage class extends StatelessWidget and defines the layout and behavior of the LogoutPage. It includes an app bar with a title "Logout".
The body of the page consists of a Center widget wrapped in a Column. Inside the column, there is an Icon widget displaying a green checkmark icon (Icons.check_circle) with a size of 80.
Below the icon, there is a SizedBox with a height of 16 pixels to create some vertical spacing.
Next, there is a Text widget displaying the message "You have successfully logged out!" with a font size of 20. The textAlign property is set to TextAlign.center to center the text horizontally.
Below the text, there is another SizedBox with a height of 32 pixels to create more vertical spacing.
Next, there are two ElevatedButton widgets. The first button is labeled "Login" and the second button is labeled "Register". Both buttons have onPressed callbacks that navigate the user to the respective pages using the Navigator.pushNamed method. When the "Login" button is pressed, the user is taken to the login page ("/login"). When the "Register" button is pressed, the user is taken to the registration page ("/registration").
In summary, the LogoutPage displays a success message and provides buttons to navigate the user to the login and registration pages.

 




