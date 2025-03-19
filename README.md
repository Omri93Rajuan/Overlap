# Project Name

A microservices-based system using Docker and Docker Compose, featuring an Nginx reverse proxy, MongoDB, and multiple backend services.

## Table of Contents
- [Overview](#overview)
- [Architecture](#architecture)
- [Services](#services)
- [Prerequisites](#prerequisites)
- [Setup and Deployment](#setup-and-deployment)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview
This project is a containerized system that consists of multiple microservices communicating over a shared network. It includes a backend, user management service, system service, a frontend UI, and database management with MongoDB and Mongo Express.

## Architecture
```
┌────────────┐      ┌──────────────┐      ┌──────────────┐
│    UI      │ <--> │   Backend    │ <--> │  MongoDB     │
└────────────┘      ├──────────────┤      └──────────────┘
                    │ User Service │
                    ├──────────────┤
                    │ System Svc   │
                    └──────────────┘
```
Nginx acts as a reverse proxy, directing traffic to the UI and backend services.

## Services
- **nginx** - Reverse proxy for handling incoming requests.
- **mongo** - Database storage using MongoDB.
- **backend** - Main backend service handling business logic.
- **users** - Microservice for user management.
- **systems_service** - Microservice handling system-specific operations.
- **ui** - Frontend application.
- **mongo-express** - Web-based MongoDB administration tool.

## Prerequisites
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Setup and Deployment
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/your-project.git
   cd your-project
   ```
2. Create an `.env` file in the root directory with necessary configurations.
3. Run the following command to start all services:
   ```sh
   docker-compose up --build
   ```
4. To stop the services:
   ```sh
   docker-compose down
   ```

## Environment Variables
Each service loads its configurations from an `.env` file. Ensure that `.env` contains required variables before deployment.

## Usage
- Access the frontend UI at: `http://localhost:8000`
- Access the backend API at: `http://localhost:8000/api`
- Access Mongo Express at: `http://localhost:8081`

## Contributing
1. Fork the repository.
2. Create a new branch (`feature/your-feature`)
3. Commit your changes.
4. Push to the branch and open a pull request.

## License
This project is licensed under the MIT License.
