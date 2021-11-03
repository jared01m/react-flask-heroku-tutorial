(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{280:function(t,e,n){"use strict";n.r(e);var A=n(0),r=n.n(A),a=n(41),o=n.n(a),c=(n(54),n(297)),s=n(295),i=n(299),p=n(13),l=n.n(p),u=n.p+"static/media/git_repo.83ececf6.png",d=n.p+"static/media/clone_repo.5559dd53.PNG",f=n.p+"static/media/create_new_app.50aaefc4.PNG",g=n.p+"static/media/connect_to_git.db93c7c9.PNG",m=n.p+"static/media/heroku_files.59ae094f.PNG",y=n.p+"static/media/deploy_project.a957e360.PNG",h=(n(55),n(11)),b=n(296),j=n(1);function w(){var t=Object(A.useState)("Off"),e=Object(h.a)(t,2),n=e[0],r=e[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"This is a button that you can toggle on and off"}),Object(j.jsx)(b.a,{variant:"outlined",onClick:function(){fetch("/toggle_button/"+n).then((function(t){return t.json()})).then((function(t){r(t.button)})).catch((function(t){console.log(t)}))},children:n})]})}function P(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)("h1",{children:"React + Flask + Heroku Tutorial"}),Object(j.jsx)("p",{children:"https://github.com/jared01m/react-flask-heroku-tutorial"})]}),Object(j.jsx)("body",{className:"App-body",children:Object(j.jsxs)(i.a,{sx:{width:800},children:[Object(j.jsx)("h2",{children:"Assumptions:"}),Object(j.jsxs)("ol",{children:[Object(j.jsx)("li",{children:"You know the basics of GitHub"}),Object(j.jsx)("li",{children:"You can write a React.js app"}),Object(j.jsx)("li",{children:"You understand the concepts behind GET requests and restful API"})]}),Object(j.jsx)("h2",{children:"Setting Up Your Project"}),Object(j.jsx)("h4",{children:"1. Create a github repository and clone it onto your desktop."}),Object(j.jsx)("img",{src:u,alt:"git_repo"}),Object(j.jsx)("img",{src:d,alt:"clone_repo"}),Object(j.jsx)("h2",{children:"Creating Your React App"}),Object(j.jsx)("h4",{children:"2. Create a react app within your repo by running:"}),Object(j.jsx)(c.a,{language:"javascript",style:s.a,children:"npx create-react-app frontend"}),Object(j.jsx)("p",{children:"This is what your files should look like afterwards."}),Object(j.jsx)("img",{src:"data:image/png;base64,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",alt:"react_app_created"}),Object(j.jsx)("h4",{children:"3. Write your code for your react app. I wrote a component called 'MyComponent' so I can demonstrate how to communicate with the Flask app later."}),Object(j.jsx)(c.a,{language:"javascript",style:s.a,children:l()('\n                        /**\n                         * @file: MyComponent.js\n                         * @author: Jared McArthur\n                         * @description: This is a button that you can toggle on and off. Very stupid code.\n                         * @returns: MyComponent\n                         */\n\n                        // It assumes that Flask app is running on port 5000\n                        // By default, the React app runs on 3000 and the Flask app runs on 5000\n                        \n                        import React, { useState } from "react";\n                        import Button from "@mui/material/Button"\n                        import Box from "@mui/material/Box"\n                        import "./MyComponent.css"\n                        \n                        export default function MyComponent() {\n                            const [toggleButton, setButton] = useState("Off");\n                        \n                            return(\n                                <div>\n                                    <p>This is a button that you can toggle on and off</p>\n                                    <Button\n                                        variant="outlined"\n                                        onClick={() => {\n                                            fetch("http://127.0.0.1:5000/toggle_button/" + toggleButton)\n                                                .then(response => \n                                                    response.json()\n                                                )\n                                                .then(data => {\n                                                    setButton(data.button)\n                                                })\n                                                .catch(error => {\n                                                    console.log(error)\n                                                })\n                                        }}\n                                    >\n                                        {toggleButton}\n                                    </Button>\n                                </div>\n                            );\n                        }')}),Object(j.jsx)("h4",{children:"4. Test your react app by running:"}),Object(j.jsx)(c.a,{language:"javascript",style:s.a,children:l()("\n                          // run within the frontend directory\n                          npm run start\n                          ")}),Object(j.jsx)("p",{children:"The part of your react app that interacts with Flask shouldn't work right now."}),Object(j.jsx)("h2",{children:"Creating Your Flask App"}),Object(j.jsx)("h4",{children:"6. Create a file called 'app.py' in the root directory."}),Object(j.jsx)(c.a,{language:"python",style:s.a,children:l()('\n                        """app.py: A Flask app that interacts with a React app and can be deployed to Heroku"""\n                        __author__ = "Jared McArthur"\n                        __date__ = "11/01/2021"\n                        \n                        from flask import Flask, jsonify\n                        from flask.helpers import send_from_directory\n                        \n                        # comment out on deployment\n                        from flask_cors import CORS\n                        \n                        # uses \'frontend\' because that is where our react app is stored\n                        app = Flask(__name__, static_folder="frontend/build", static_url_path="")\n                        \n                        # comment out on deployment\n                        CORS(app)\n                        \n                        # this method returns the opposite of the current state of the button\n                        # this would look different for your own personal app\n                        @app.route("/toggle_button/<button_state>", methods=["GET"])\n                        def toggle_button(button_state: str):\n                            if button_state == "Off":\n                                output=  "On"\n                            else:\n                                output = "Off"\n                            return jsonify(button=output)\n                        \n                        @app.route("/")\n                        def index():\n                            return send_from_directory(app.static_folder, "index.html")\n                            \n                        if __name__ == "__main__":\n                            app.run(host="0.0.0.0")\n                        ')}),Object(j.jsx)("h4",{children:"7. Now you can test the React app and the Flask app at the same time. Open up two instances of command prompt or PowerShell (I like Powershell because of the pretty colors) and run these commands:"}),Object(j.jsx)(c.a,{language:"javascript",style:s.a,children:l()("\n                        // run within the frontend directory\n                        npm run start\n\n                        // run within the root directory\n                        python -m flask run\n                        ")}),Object(j.jsx)("h2",{children:"Deploying To Heroku"}),Object(j.jsx)("p",{children:"I don't enjoy using the Heroku CLI or terminal commands, so I avoid them like the plague."}),Object(j.jsx)("h4",{children:"8. The first step is to go back and change some code."}),Object(j.jsx)(c.a,{language:"javascript",style:s.a,children:l()('\n                        /* This is within MyComponent.js */\n                        \n                        // change\n                        fetch("http://127.0.0.1:5000/toggle_button/" + toggleButton)\n                        // to\n                        fetch("/toggle_button/" + toggleButton)\n\n                        // the take away is to change "http://127.0.0.1:5000/" to "/"\n                        // since the Flask app\'s endpoint has changed\n                        ')}),Object(j.jsx)(c.a,{language:"python",style:s.a,children:l()('\n                        """This is within app.py"""\n\n                        # comment out\n                        from flask_cors import CORS\n\n                        # and comment out\n                        CORS(app)\n                        ')}),Object(j.jsx)(c.a,{language:"python",style:s.a,children:l()('\n                        """This is within .gitignore"""\n\n                        # comment out\n                        /build\n                        ')}),Object(j.jsx)("h4",{children:"9. Build your React app for production:"}),Object(j.jsx)(c.a,{language:"javascript",style:s.a,children:l()("\n                        // run within the frontend directory\n                        npm run build\n                        ")}),Object(j.jsx)("h4",{children:"10. Sign in to your Heroku Account and create a new app."}),Object(j.jsx)("img",{src:"data:image/png;base64,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",alt:"new_app"}),Object(j.jsx)("img",{src:f,alt:"create_new_app",width:"800"}),Object(j.jsx)("h4",{children:"11. Link your GitHub repository with your Heroku app."}),Object(j.jsx)("img",{src:g,alt:"connect_to_git",width:"800"}),Object(j.jsx)("h4",{children:"12. Create your Procfile and your requirements.txt and place them within the root directory."}),Object(j.jsx)(c.a,{language:"javascript",style:s.a,children:l()("\n                        // Procfile: keep in mind the spacing\n                        // the second app in the procfile is actually the name of your flask app\n                        web gunicorn app:app\n                        \n                        // to create your requirements.txt file you can either run:\n                        python -m pip freeze > requirements.txt\n                        // or you can pip install pipreqs and run:\n                        python -m pipreqs.pipreqs --encoding=utf-8\n\n                        // I recommend using pipreqs, unless you're responsible and have a venv for every project\n                        // additionally, add:\n                        gunicorn==20.1.0\n                        // to your requirements.txt file if it's not there (the version doesn't have to be 20.1.0)\n                        ")}),Object(j.jsx)("p",{children:"This is what your files should look like."}),Object(j.jsx)("img",{src:m,alt:"heroku_files"}),Object(j.jsx)("h4",{children:"13. Push all your files onto Github."}),Object(j.jsx)("p",{children:"Since there are so many files, the GitHub desktop GUI probably won't work and will just sit there spinning until it dies. Therefore, run these commands:"}),Object(j.jsx)(c.a,{language:"javascript",style:s.a,children:l()('\n                        // run these commands within the cloned repository\n                        git add -A\n                        git commit -m "whatever message you want"\n                        git push\n                        ')}),Object(j.jsx)("h4",{children:"14. Deploy your Heroku app."}),Object(j.jsx)("img",{src:y,alt:"deploy_project",width:"800"}),Object(j.jsx)("p",{children:"Now you should be done."}),Object(j.jsx)("h2",{children:"My Interactive Component"}),Object(j.jsx)(w,{}),Object(j.jsx)("h2",{children:"Warnings (things that will make you slam your head against a table)"}),Object(j.jsx)("p",{children:"If you build and deploy to heroku, and then you edit your build and redeploy, make sure you refresh your browser's cache so you can see the changes. I wasted so much time wondering why my web app wasn't updating."})]})})]})}var x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,300)).then((function(e){var n=e.getCLS,A=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),A(t),r(t),a(t),o(t)}))};o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(P,{})}),document.getElementById("root")),x()},54:function(t,e,n){},55:function(t,e,n){}},[[280,1,2]]]);
//# sourceMappingURL=main.cc448cf2.chunk.js.map