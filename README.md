# RepoVista - GitHub Finder

RepoVista is a web application developed using Angular that allows users to find GitHub repositories by entering a GitHub username. It provides details about the user's repositories, including repository names, descriptions, and topics.

## Website Link

[RepoVista - GitHub Finder](https://fyle-internship-challenge-23-by-abhay.vercel.app/)

## Local Setup

To run the application locally, follow these steps:

1. Install Angular CLI by referring to the [Angular CLI installation guide](https://angular.io/guide/setup-local).

2. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/RepoVista.git
   ```

3. Navigate to the project's root directory:

   ```bash
   cd RepoVista
   ```

4. Install project dependencies:

   ```bash
   npm install
   ```

5. Run the application:

   ```bash
   ng serve
   ```

   Open your browser and navigate to `http://localhost:4200/` to view RepoVista locally.

## Testing

To test the complete application, use the following command:

```bash
ng test
```

For testing specific components and services with 100% coverage, run:

```bash
ng test --watch=false --browsers=ChromeHeadlessNoSandbox --include src/app/services/api.service.spec.ts --include src/app/search/components/search-component.component.spec.ts --code-coverage
```

After running the tests, you can view the coverage report in the `/coverage/index.html` directory.

## Screenshots

### Search Component

![Search Component](https://github.com/CallmeAbhy/Dashboard_Flask_X/assets/99988396/ee91cc34-6daf-44a0-809c-30c0fc12a950)

### VS Code 

![1](https://github.com/CallmeAbhy/Dashboard_Flask_X/assets/99988396/cd6e8503-b91b-42de-a7e3-de96311c68bb)

![2](https://github.com/CallmeAbhy/Dashboard_Flask_X/assets/99988396/09801dd4-7ae8-4409-9741-345bfa62138a )

### API Service

![API Service](https://github.com/CallmeAbhy/Dashboard_Flask_X/assets/99988396/2e452278-3059-456c-aba0-2e0048a865fa )

### Caching

![Caching](screenshots/caching.png)

Explore GitHub repositories with RepoVista and enjoy seamless navigation and detailed coverage reports for the Search Component and API Service.
