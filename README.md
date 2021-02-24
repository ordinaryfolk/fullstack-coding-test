# Coding Tests

- Fullstack Developer - Do Test 1, 2 and 3
- Frontend Developer - Do Test 1 & 2
- Backend Developer - Do Test 3

## Test 1 (Base)

- Fork then Clone the repo locally and run it.
- Install [Chakra UI](https://chakra-ui.com) and add integrate it as part of the project.
- Replace all basic html components with Chakra UI components.
- Deploy the project to [Vercel](https://vercel.com/) and provide the URL link.
- The initial objective is to update the text value found within the component `DynamicText.tsx` by calling the function `changeValue` and passing a value to it.
- The `changeValue` function have to be called from the `index.tsx` file inside the `onChange` which is called by the `input` component. The value of the input should match as the text displayed in `DynamicText.tsx`.
- This is to be completed by only using [React references](https://reactjs.org/docs/refs-and-the-dom.html). No props, context or external library should be used to solve this problem. Only React references should be used by referencing the `DynamicText` component and calling the `changeValue` within it.
- Make the DynamicText component responsive to break if the word gets to long and goes beyond the width. Use the Chakra UI library.
- Redeploy the project after being completed.

### Extra Points

- Currently the import of the `DynamicText` component in `pages/index.tsx` is as follows `import DynamicText from "../components/DynamicText";`. Using typescript, change the configurations so the the import would look like this `import DynamicText from "components/DynamicText";` in the `index.tsx` file.

## Test 2 (Frontend)

- Integrate firebase authentication with React Context that provides the auth state of the user globally in any component.
- Create a sign up and sign in page that integrates with firebase authentication.
- `pages/index.tsx` should be a protected route and only accessible after user has signed in or created an account.
- Create a new page `pages/blog.tsx`.
- Within this new page, develop a UI that will display multiple blog card, each representing a blog article.
- Each blog card should consist of a image and title.
- When a blog card is clicked, a modal should pop up displaying the content of the article.
- All blog data should be stored on [Firebase firestore](https://firebase.google.com/docs/firestore).
- The blog card listing and articles should update in real time using the Firebase JS SDK.

## Test 3 (Fullstack/Backend)

- Develop a backend system using the [NestJS](https://nestjs.com/) and [Serverless](https://serverless.com/) framework that will be deployed on [AWS Lambda](https://aws.amazon.com/lambda/) following the serverless architecture and the microservice principles of NestJS. The database used will be PostgreSQL and interactions with the DB will be through typeORM.
- The backend should provide services that will allow the creation of a user profile on sign up that consist of `name` and `date of birth` which would authenticate with firebase authentication using the [firebase admin library](https://firebase.google.com/docs/admin/setup). Profile data should be stored on a PostgreSQL instance.
- Create a blog service that allows the creation and management of blog articles which will be stored both on the PostgreSQL instance and on a Firestore instance.
- If your role is for a backend developer, you can stop here for Test 3.
- Integrate the services as part of Test 2.
- After completing Test 2, create a new page `pages/dashboard.tsx` that integrates any rich text editor of your choice. This page should be a protected page for only admins to create/update/delete blogs by interacting with the backend service.
- Create a admin user and provide their login details.
- Push this project into a github repo and provide a public link.

## Good Job!

After completing the coding test, please provide the details listed below:

- Vercel deployment URL
- Public github link for all test completed
- API route links and Open API documentation
- Any other information required to run and access the project such as environment keys (`.env`) and admin login

## Learn More

To learn more about some of the technologies used, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [ReactJS](https://reactjs.org/docs/getting-started.html)
- [Vercel](https://vercel.com/docs)
- [Nest.js Documentation](https://docs.nestjs.com/)
- [Chakra UI](https://chakra-ui.com)
- [Dayjs](https://day.js.org/)
- [Serverless](https://www.serverless.com/framework/docs/)
- [AWS Lambda](https://aws.amazon.com/lambda/getting-started/)
- [PostgreSQL](https://www.postgresql.org/)
- [ElephantSQL](https://www.elephantsql.com/docs/index.html)
