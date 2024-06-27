This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install

npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Way of Work
The way of work in this boilerplate

### With styling
There are 2 ways of working with style

1. direct style
- minimal changes
```
module: login

h2 style={{ textAlign: "center", marginBottom: 20 }}>Login</h2>
```
2. class with module.scss
```
module: posts
```
the posts module uses styles forlder to style the component

### With debouncer
```
module: Login
function: onFinish
```