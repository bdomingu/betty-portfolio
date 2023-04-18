const projectsData = [
    {
      id: 1,
      title: "Forecast with Betty",
      shortSummary: "Simple Weather App created with React and WeatherStack API.",
      summary: "Forecast with Betty is a simple React Application built from scratch. \
                The application displays the forecast for six cities and also allows the user \
                to search their city of their choosing.",
      stack: ["React", "WeatherStack API"],
      thumbnail: "/images/weather.jpg",
      image: "/images/weathersite.png",
      purpose: "This project included two phases. The first phase simply displayed the forecast for \
                six cities chosen. The second phase was allowing the users to search any city. \
                The purpose of building this app was to gain exposure to the React library and to \
                practice fetching and handling data from a third-party API. By developing this app, \
                I was able to strenghten my skills in using React components, state management, and \
                API integration.  ",
      problems: "One of the challenges I faced while building this project was understanding state \
                management and React hooks. As a beginner, it was difficult to grasp the concept of \
                how state works and how to properly use hooks to manage state in my components.",
      lessonsLearned: "Through building this project, I learned that whiteboarding a project before \
                      starting to code really helps with organization. I also learned how to use the \
                      Axios library to fetch data from a third party API, and how to manage and handle \
                      the data using React hooks.",
      repository: "https://github.com/bdomingu/Weather-Site"
    }, 

    {
      id: 2,
      title: "Todo App",
      shortSummary: "Full stack Todo App created with React, Express, Node and MongoDB.",
      summary: "This todo app is a simple fullstack React appplication. It allows users to register and create \
                an account, or login if they already have one. Users can then enter their tasks, delete \
                them and mark them as completed.",
      stack: ["React", "Express", "Node", "MongoDB"],
      thumbnail: "/images/task.png",
      image:"/images/todoApp3.png",
      purpose: "This project consisted of two phases. In the first phase, I created the section where tasks can \
                 be entered, deleted, and marked as completed. This involved designing the user interface and \
                 implementing the necessary functionality using React components and state management. \
                 In the second phase, I added authentication functionailty to the app, enabling users to register\
                 and log in with their own accounts. This required integrating a backend server and database with MongoDB and Node, \
                 implementing authentication protocols with JSON Web Tokens, and updating the app to reflect the user's authentication \
                 status. By building this app, I gained valuable experience in developing full-stack web applications, \
                 including designing the data schema, building RESTful APIs, implementing user authentication, and integrating \
                 the front-end and back-end components.",
      problems: "While building this app, I faced a few challenges along the way. One significant challenge was working with MongoDB, \
                as I had only been exposed to SQL databases before. At first, I found the document-oriented nature of MongoDB \
                to be quite different from the relational databases. I spent time learning how to design \
                the data schema by researching and experimenting with MongoDB's query language and data modeling \
                techniques. During the development of the authentication feature, I faced some challenges working with \
                JSON Web Tokens (JWT) One challenge was managing the token expiration and refreshing process to ensure \
                the user's session remained valid. Additionally, I had to implement secure storage and transmission of the \
                JWT. I was able to overcome the challenges through research, experimentation, and online resources.", 
      lessonsLearned: "Developing my todo app provided me with a valuable experience in wokring with a backend and using \
                    MongoDB as a database. I also learned how to authenticate users with Passport.js and Bcrypt, and how \
                    to use JSON web tokens to secure the communication between the client and the server. In addition, I \
                    gained proficiency in writing RESTful APIs that enable the client to interact with the server in a \
                    structured manner.",
      repository: "https://github.com/bdomingu/TodoApp-MongoDB"
    },

    {
      id: 3,
      title: "Movie Search Engine",
      shortSummary: "Movie search engine created with React and Movie DB API",
      summary: "This movie search engine is a simple React application. It allows users to search for any movie or movie \
              category. The user can type in some text and the search engine will display a list of matching movies including \
              the poster image.",
      stack: ["React", "Movie DB API"],
      thumbnail: "/images/movie.png",
      image:"/images/movieSearch.png",
      purpose: "The primary purpose of creating this movie search engine was to continue practicing my skills in fetching data \
              from third-party APIs, as well as to practice implementing responsive design and adding dynamic features like infinte \
              scrolling. I was able to hone my abilities in these areas and gain hands-on experience working with APIs, designing \
              responsive interfaces, and adding interactive features that enhance the user experience.",
      problems: "One of the primary challenges I faced when creating my movie search engine app was working with the third-party API \
               and understanding how to write the appropriate HTTP requests to retrieve the necessary data. The API documentation provided \
               detailed information on the endpoints and query parameters, but I found that it required careful attention to detail and some \
               trial and error to correctly implement the requests. It was also important to ensure that the requests were properly formatted \
               and included any necessary authentication or authorization credentials. Overall, working with the API was a valuable learning \
               experience that helped me to develop my skills in working with external data sources and implementing best practices for API integration.",
      lessonsLearned: "Through building this project, I was able to develop my skills in front-end development, particularly in the areas of \
                   responsive design and infinite scrolling. Through using flexbox, I was able to create a layout that was flexible and adaptable \
                   to different screen sizes and resolutions. Additionally, I implemented infinite scrolling, which allowed the app to load more data \
                   dynamically as the user scrolled through the results. This not only improved the user experience by reducing the need for manual \
                   pagination, but also helped optimize the app's performance by reducing the amount of data that needed to be loaded at once. Overall \
                   this project helped me to improve my skills in front-end development and gain a deeper understanding of the importance of responsive \
                   design and performance optimization.",
      repository: "https://github.com/bdomingu/Movie-Search-Engine"
    },

    {
      id: 4,
      title: "Teacher Portal",
      shortSummary: "Full stack application created with React, Express, Node, and MySQL.",
      summary: "This is a fullstack React application. Teachers can login and access their student rosters, student information, add assignments, and \
              keep track of assignment grades, and averages.",
      stack: ["React", "Express", "Node", "MySQL"],
      thumbnail: "/images/grades.png",
      image: "",
      purpose: "The primary  purpose of this project was to...",
      problems: "One of the challenges I faced while building this project was...",
      lessonsLearned: "Through building this project, I learned...",
      repository: "https://github.com/bdomingu/Teacher-Portal"
    },
    
  ];
  
  export default projectsData;
  