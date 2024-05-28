Depending on the computer
py
python 3 <-- if you are running a Mac(100% of the time this is the one)
python

to install the virtualenv
py -m pip install virtualenv

to create the virtualenv
py -m venv nameOfTheFolder

we need to be placed in the folder that contains the venv
windows venv\Scripts\activate
Mac source venv/bin/activate

//this is for the react project
to create a reaxt project we need to use the following instruction
npx create-react-app "name the following folder"
if for some reason this doesn't work
try
npm i -g npx

/to run the server we need to be located in the folder that we just created
npm start

to change directory you need to use -- cd