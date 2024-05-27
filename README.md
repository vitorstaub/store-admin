[TYPESCRIPT__BADGE]: https://img.shields.io/badge/typescript-D4FAFF?style=for-the-badge&logo=typescript
[NEXT]: https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=nextdotjs
[ZOD]: https://img.shields.io/badge/Zod-black?style=for-the-badge&logo=zod
[AXIOS]: https://img.shields.io/badge/Axios-black?style=for-the-badge&logo=axios&logoColor=black&color=fff
[TAIL]: https://img.shields.io/badge/Tailwind-%2300027a?style=for-the-badge&logo=tailwindcss

<h1 align="center" style="font-weight: bold;">
Store

Admin | CMS | API
</h1>

<div align="center">

  ![next.js][NEXT]
  ![typescript][TYPESCRIPT__BADGE]
  ![zod][ZOD]
  ![axios][AXIOS]
  ![tail][TAIL]

</div>

<p align="center">
 <a href="#started">Getting Started</a> • 
  <a href="#routes">API Endpoints</a> •
 <a href="#colab">Collaborators</a> •
 <a href="#contribute">Contribute</a>
</p>

<p align="center">
    <img src="./.github/example.png" alt="Image Example" width="400px">
</p>


<h2 id="started">📌 About</h2>

This project offers a comprehensive solution for online stores businesses, providing a feature-rich admin portal for content, store management and analytics.


<h2 id="started">🚀 Getting started</h2>

<h3>Prerequisites</h3>

Here you list all prerequisites necessary for running your project.

- [NodeJS](https://nodejs.org/en)

<h3>Cloning</h3>

How to clone your project

```bash
git clone https://github.com/vitorstaub/store-main.git

cd store-main
```

<h3>Install Packages</h3>

```bash
npm install
```

<h3> Environment Variables</h2>

Use the `.env` as reference to create your configuration file `.env` with your Clerk, Database and Cloudinary Credentials

.env file
```yaml
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY={CLERK_PUBLIC_KEY}
CLERK_SECRET_KEY={CLERK_SECRET_KEY}
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

DATABASE_URL={DATABASE_KEY}

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME={CLOUDINARY_KEY}
```

<h3>Prisma Generate and Push</h3>

```
npx prisma generate
npx prisma db push
```

<h3>Starting</h3>

How to start the project

```bash
npm run dev
```


<h2 id="routes">📍 API Endpoints</h2>

Here you can list the main routes of your API, and what are their expected request bodies.
​
| products route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>GET /api/{storeId}/products</kbd>     | retrieves products info
| <kbd>POST /api/{storeId}/products</kbd>     | add products
| <kbd>PATCH /api/{storeId}/products/{productId}</kbd>     | edit product 
| <kbd>DELETE /api/{storeId}/products/{productId}</kbd>     | remove product 

| billboards route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>GET /api/{storeId}/billboards</kbd>     | retrieves billboards info 
| <kbd>POST /api/{storeId}/billboards</kbd>     | add billboards 
| <kbd>PATCH /api/{storeId}/billboards/{billboardId}</kbd>     | edit billboard 
| <kbd>DELETE /api/{storeId}/billboards/{billboardId}</kbd>     | remove billboard 

| categories route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>GET /api/{storeId}/categories</kbd>     | retrieves categories info 
| <kbd>POST /api/{storeId}/categories</kbd>     | add categories  
| <kbd>PATCH /api/{storeId}/categories/{categoryId}</kbd>     | edit category 
| <kbd>DELETE /api/{storeId}/categories/{categoryId}</kbd>     | remove category 

| sizes route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>GET /api/{storeId}/sizes</kbd>     | retrieves sizes info 
| <kbd>POST /api/{storeId}/sizes</kbd>     | add sizes 
| <kbd>PATCH /api/{storeId}/sizes/{sizeId}</kbd>     | edit size 
| <kbd>DELETE /api/{storeId}/sizes/{sizeId}</kbd>     | remove size 

| colors route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>GET /api/{storeId}/colors</kbd>     | retrieves colors info 
| <kbd>POST /api/{storeId}/colors</kbd>     | add colors 
| <kbd>PATCH /api/{storeId}/colors/{colorId}</kbd>     | edit color 
| <kbd>DELETE /api/{storeId}/colors/{colorId}</kbd>     | remove color 


<h2 id="colab">🤝 Collaborators</h2>

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/87439827?v=4" width="100px;" alt="Vitor Staub Profile Picture"/><br>
        <sub>
          <b>Vitor Staub</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<h2 id="contribute">📫 Contribute</h2>

Here you will explain how other developers can contribute to your project. For example, explaining how can create their branches, which patterns to follow and how to open an pull request

1. `git clone https://github.com/vitorstaub/store-admin.git`
2. `git checkout -b feature/NAME`
3. Follow commit patterns
4. Open a Pull Request explaining the problem solved or feature made, if exists, append screenshot of visual modifications and wait for the review!

<h3>Documentations that might help</h3>

[📝 How to create a Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request)

[💾 Commit pattern](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)