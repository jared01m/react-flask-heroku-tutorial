/**
 * @file: App.js
 * @author: Jared McArthur
 * @description: This is the homepage for our react app.
 * @returns: App
 */

import SyntaxHighlighter from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs"
import Box from "@mui/material/Box"
import dedent from "dedent-js"
import git_repo from "./images/git_repo.png"
import clone_repo from "./images/clone_repo.PNG"
import react_app_created from "./images/react_app_created.png"
import new_app from "./images/new_app.png"
import create_new_app from "./images/create_new_app.PNG"
import connect_to_git from "./images/connect_to_git.PNG"
import heroku_files from "./images/heroku_files.PNG"
import deploy_project from "./images/deploy_project.PNG"
import "./App.css"
import MyComponent from "./components/MyComponent.js"

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>React + Flask + Heroku Tutorial</h1>
                <p>https://github.com/jared01m/react-flask-heroku-tutorial</p>
            </header>
            <body className="App-body">
                <Box
                    sx={{
                        width: 800,
                    }}
                >
                    <h2>Setting Up Your Project</h2>

                    <h4>1. Create a github repository and clone it onto your desktop.</h4>
                    <img src={git_repo} alt={"git_repo"} />
                    <img src={clone_repo} alt={"clone_repo"} />

                    <h2>Creating Your React App</h2>

                    <h4>2. Create a react app within your repo by running:</h4>
                    <SyntaxHighlighter language="javascript" style={dracula}>
                        {"npx create-react-app frontend"}
                    </SyntaxHighlighter>
                    <p>This is what your files should look like afterwards.</p>
                    <img src={react_app_created} alt={"react_app_created"} />

                    <h4>3. Write your code for your react app. I wrote a component called 'MyComponent' so I can demonstrate how to communicate with the Flask app later.</h4>
                    <SyntaxHighlighter language="javascript" style={dracula}>
                        {dedent(`
                        /**
                         * @file: MyComponent.js
                         * @author: Jared McArthur
                         * @description: This is a button that you can toggle on and off. Very stupid code.
                         * @returns: MyComponent
                         */

                        // It assumes that Flask app is running on port 5000
                        // By default, the React app runs on 3000 and the Flask app runs on 5000
                        
                        import React, { useState } from "react";
                        import Button from "@mui/material/Button"
                        import Box from "@mui/material/Box"
                        import "./MyComponent.css"
                        
                        export default function MyComponent() {
                            const [toggleButton, setButton] = useState("Off");
                        
                            return(
                                <div>
                                    <Box
                                        sx={{
                                            width: 800,
                                            border: '1px dashed black'
                                        }}
                                    >
                                        This is a button that you can toggle on and off
                                        <Button
                                            variant="outlined"
                                            onClick={() => {
                                                fetch("http://127.0.0.1:5000/toggle_button/" + toggleButton)
                                                    .then(response => 
                                                        response.json()
                                                    )
                                                    .then(data => {
                                                        setButton(data.button)
                                                    })
                                                    .catch(error => {
                                                        console.log(error)
                                                    })
                                            }}
                                        >
                                            {toggleButton}
                                        </Button>
                                    </Box>
                                </div>
                            );
                        }`)}
                    </SyntaxHighlighter>

                    <h4>4. Test your react app by running:</h4>
                    <SyntaxHighlighter language="javascript" style={dracula}>
                        {dedent(`
                          // run within the frontend directory
                          npm start
                          `)}
                    </SyntaxHighlighter>
                    <p>The part of your react app that interacts with Flask shouldn't work right now.</p>

                    <h4>5. When your react app is working, run:</h4>
                    <SyntaxHighlighter language="javascript" style={dracula}>
                        {dedent(`
                        // run within the frontend directory
                        npm run build
                        `)}
                    </SyntaxHighlighter>

                    <h2>Creating Your Flask App</h2>

                    <h4>6. Create a file called 'app.py' in the root directory.</h4>
                    <SyntaxHighlighter language="python" style={dracula}>
                        {dedent(`
                        """app.py: A Flask app that interacts with a React app and can be deployed to Heroku"""
                        __author__ = "Jared McArthur"
                        __date__ = "11/01/2021"
                        
                        from flask import Flask, json, jsonify
                        from flask.helpers import send_from_directory
                        
                        # comment out on deployment
                        from flask_cors import CORS
                        
                        # uses 'frontend' because that is where our react app is stored
                        app = Flask(__name__, static_folder="frontend/build", static_url_path="")
                        
                        # comment out on deployment
                        CORS(app)
                        
                        # this method returns the opposite of the current state of the button
                        # this would look different for your own personal app
                        @app.route("/toggle_button/<button_state>", methods=["GET"])
                        def toggle_button(button_state: str):
                            if button_state == "Off":
                                output=  "On"
                            else:
                                output = "Off"
                            return jsonify(button=output)
                        
                        @app.route("/")
                        def index():
                            return send_from_directory(app.static_folder, "index.html")
                            
                        if __name__ == "__main__":
                            app.run(host="0.0.0.0")
                        `)}
                    </SyntaxHighlighter>

                    <h4>7. Now you can test the React app and the Flask app at the same time. Open up two instances of command prompt or PowerShell (I like Powershell because of the pretty colors) and run these commands:</h4>
                    <SyntaxHighlighter language="javascript" style={dracula}>
                        {dedent(`
                        // run within the frontend directory
                        npm start

                        // run within the root directory
                        python -m flask run
                        `)}
                    </SyntaxHighlighter>

                    <h2>Deploying To Heroku</h2>
                    <p>I don't enjoy using the Heroku CLI or terminal commands, so I avoid them like the plague.</p>

                    <h4>8. The first step is to go back and change some code.</h4>
                    <SyntaxHighlighter language="javascript" style={dracula}>
                        {dedent(`
                        /* This is within MyComponent.js */
                        
                        // change
                        fetch("http://127.0.0.1:5000/toggle_button/" + toggleButton)
                        // to
                        fetch("/toggle_button/" + toggleButton)

                        // the take away is to change "http://127.0.0.1:5000/" to "/"
                        // since the Flask app's endpoint has changed
                        `)}
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language="python" style={dracula}>
                        {dedent(`
                        """This is within app.py"""

                        # comment out
                        from flask_cors import CORS

                        # and comment out
                        CORS(app)
                        `)}
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language="python" style={dracula}>
                        {dedent(`
                        """This is within .gitignore"""

                        # comment out
                        /build
                        `)}
                    </SyntaxHighlighter>

                    <h4>9. Sign in to your Heroku Account and create a new app.</h4>
                    <img src={new_app} alt={"new_app"} />
                    <img src={create_new_app} alt={"create_new_app"} width="800" />

                    <h4>10. Link your GitHub repository with your Heroku app.</h4>
                    <img src={connect_to_git} alt={"connect_to_git"} width="800" />

                    <h4>11. Create your Procfile and your requirements.txt and place them within the root directory.</h4>
                    <SyntaxHighlighter language="javascript" style={dracula}>
                        {dedent(`
                        // Procfile: keep in mind the spacing
                        web gunicorn app:app
                        
                        // to create your requirements.txt file you can either run:
                        python -m pip freeze > requirements.txt
                        // or you can pip install pipreqs and run:
                        python -m pipreqs.pipreqs --encoding=utf-8

                        // I recommend using pipreqs, unless you're responsible and have a venv for every project
                        // additionally, add:
                        gunicorn==20.1.0
                        // to your requirements.txt file if it's not there (the version doens't have to be 20.1.0)
                        `)}
                    </SyntaxHighlighter>
                    <p>This is what your files should look like.</p>
                    <img src={heroku_files} alt={"heroku_files"} />


                    <h4>12. Push all your files onto Github.</h4>
                    <p>Since there are so many files, the GitHub desktop GUI probably won't work and will just sit there spinning until it dies. Therefore, run these commands:</p>
                    <SyntaxHighlighter language="javascript" style={dracula}>
                        {dedent(`
                        // run these commands within the cloned repository
                        git add -A
                        git commit -m "whatever message you want"
                        git push
                        `)}
                    </SyntaxHighlighter>

                    <h4>13. Deploy your Heroku app.</h4>
                    <img src={deploy_project} alt={"deploy_project"} width="800" />
                    <p>Now you should be done.</p>

                    <h2>My Interactive Component</h2>

                    <MyComponent />

                    <h2>Warnings (things that will make you slam your head against a table)</h2>
                    <p>If you build and deploy to heroku, you will never ever be able to change how the web app looks. I don't know why. I hate this. I tried to edit my app for hours until I gave up, deleted everything, and redid it all.</p>
                    <p>I figured out the fix, Clear the cache in your browser. Why do browsers have to be so smart these days.</p>
                </Box>
            </body>
        </div>
    );
}