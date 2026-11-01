# Movie Picture Pipeline

## Project Overview

The Movie Picture Pipeline project demonstrates the implementation of a CI/CD pipeline for a movie application using GitHub Actions and AWS services.

The application consists of a frontend and a backend. The backend provides movie information through an API, while the frontend provides the user interface. GitHub Actions automates code checks, testing, building, and deployment.

Docker is used to package the applications, Amazon ECR stores the container images, and Amazon EKS runs the application using Kubernetes.

## Technologies Used

- **Python and Flask** – Backend application and API.
- **React** – Frontend application.
- **Git and GitHub** – Source-code management and version control.
- **GitHub Actions** – Continuous Integration and Continuous Deployment.
- **Docker** – Application containerization.
- **Amazon ECR** – Container image storage.
- **Amazon EKS** – Managed Kubernetes service.
- **Kubernetes** – Application deployment and management.
- **Terraform** – Infrastructure configuration and provisioning.

## Repository Structure

```text
movie-pipeline/
│
├── .github/
│   └── workflows/
│       ├── frontend-ci.yaml
│       ├── backend-ci.yaml
│       ├── frontend-cd.yaml
│       └── backend-cd.yaml
│
├── SCREEN SHOTS/
│
├── setup/
│   └── terraform/
│
├── starter/
│   ├── backend/
│   │   └── k8s/
│   └── frontend/
│
├── .gitignore
├── CODEOWNERS
├── LICENSE.md
└── README.md
```

The repository also contains application source files, configuration files, and deployment manifests within the respective directories.

## CI/CD Workflows

The project includes four GitHub Actions workflows.

### Backend Continuous Integration

**File:** `.github/workflows/backend-ci.yaml`

This workflow performs the configured backend linting and testing steps to check code quality and application functionality.

### Frontend Continuous Integration

**File:** `.github/workflows/frontend-ci.yaml`

This workflow performs the configured frontend linting, testing, and build steps.

### Backend Continuous Deployment

**File:** `.github/workflows/backend-cd.yaml`

This workflow automates the backend Docker image build, publishes the image to Amazon ECR, and deploys the backend application to Amazon EKS.

### Frontend Continuous Deployment

**File:** `.github/workflows/frontend-cd.yaml`

This workflow automates the frontend Docker image build, publishes the image to Amazon ECR, and deploys the frontend application to Amazon EKS.

## Application Architecture

The project follows this deployment process:

1. Application source code is maintained in GitHub.
2. GitHub Actions executes the configured CI workflows.
3. Frontend and backend Docker images are built.
4. The Docker images are published to Amazon ECR.
5. Deployment workflows apply the Kubernetes configurations to Amazon EKS.
6. Kubernetes services expose the applications through AWS load balancers.

## Backend API

The backend provides a movie information endpoint.

**Endpoint:**

`GET /movies`

Example JSON response:

```json
{
  "movies": [
    {
      "id": "123",
      "title": "Top Gun: Maverick"
    },
    {
      "id": "456",
      "title": "Sonic the Hedgehog"
    },
    {
      "id": "789",
      "title": "A Quiet Place"
    }
  ]
}
```

The backend API was tested and returned an HTTP 200 response during deployment verification.

## AWS Infrastructure

The project uses the following AWS services:

- **Amazon EKS:** Runs the Kubernetes cluster.
- **Amazon ECR:** Stores frontend and backend Docker images.
- **Elastic Load Balancing:** Exposes application services.
- **AWS IAM:** Manages access and permissions.
- **Terraform:** Defines and provisions infrastructure resources.

**AWS Region:** `us-east-1`

**EKS Cluster:** `cluster`

## Environment Configuration

GitHub Actions uses repository secrets to access AWS resources and configure deployments.

The configured secret names include:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `BACKEND_ECR_REPOSITORY`
- `FRONTEND_ECR_REPOSITORY`
- `EKS_CLUSTER_NAME`
- `REACT_APP_MOVIE_API_URL`

Secret values are stored in GitHub repository settings. Sensitive information such as AWS credentials, access keys, and passwords should never be committed to the repository.

## Testing and Verification

The project verification process includes:

- Backend linting and tests.
- Frontend linting and tests.
- Frontend and backend build steps.
- Docker image creation.
- Publishing images to Amazon ECR.
- Deploying applications to Amazon EKS.
- Checking Kubernetes pods and deployments.
- Testing the backend movie API endpoint.

The configured GitHub Actions workflows have been executed successfully.

## Screenshots

Project screenshots are stored in the `SCREEN SHOTS` directory.

Screenshots can demonstrate:

- Backend CI workflow execution.
- Frontend CI workflow execution.
- Backend CD workflow execution.
- Frontend CD workflow execution.
- Backend API response.
- Frontend application.
- Kubernetes pod and deployment status.
- Amazon ECR container images.

## Acknowledgements and References

This project is based on the Movie Picture Pipeline starter project and course instructions provided by Udacity.

Technical documentation used as references:

- GitHub Actions: https://docs.github.com/en/actions
- Docker: https://docs.docker.com/
- Amazon EKS: https://docs.aws.amazon.com/eks/
- Terraform: https://developer.hashicorp.com/terraform

Any additional tutorials, examples, or external resources used during development should be acknowledged.


## Conclusion

This project brings together application development, automated testing, Docker containerization, and cloud deployment. It demonstrates how GitHub Actions, Amazon ECR, Amazon EKS, Kubernetes, and Terraform can be used as part of a movie application's CI/CD pipeline.
