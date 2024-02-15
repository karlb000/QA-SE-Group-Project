# QA SE Group Project

This project is a simple web application for a Course Registration System.

## Prerequisites

You will need the following tools installed on your machine:

- Python
- FastAPI
- Node.js

### Server Setup

First, install FastAPI and Uvicorn if you haven't already. Run the following in a terminal:

```bash
pip install fastapi
pip install "uvicorn[standard]"
```

To run the FastAPI server, navigate to the 'backend' folder in your terminal and run the following:
```bash
cd server
uvicorn main:app --reload
```


### Client Setup

Next, set up the client application. Navigate to the 'client' folder and run the following:
```bash
cd ../client
npm install
npm run dev
```


