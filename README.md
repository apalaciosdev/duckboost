# Welcome to <a href="https://nextjs-blog-apalacios.netlify.app/post-1">DuckBoost!</a>!
This is a template blog created with NextJS using MDX.
<br />

<img src="/public/images/ignore/blog.png" alt="example" width="600" height=400/>
<br /><br />

## Advantages using this project

### 1.- Add reutilizable components in your posts🚀
With MDX, you can use components directly in markdown.<br />

If you want to include components in your posts, invoke them in your MDX file like this:
```
<Podcast episode="2Nke3gndQfRHI1835BKlpL?utm_source=generator" size="compact"/>
```

And then add them in `/components/MDXComponents.js`.<br /><br />

This is the result:<br />
<img src="/public/images/ignore/componentExample.png" alt="example" width="500"/>
<br /><br />


### 2.- Customize✔️
Make it your own by adjusting the blog config file. Customize whatever you want.

This project has styles created with Styled-Components and pure CSS.
<br /><br />


### 3.- Appearance and design🎨
This project contains a theme toggler which you can change the theme color between dark and light mode.<br />
<img src="/public/images/ignore/togleTheme.gif" alt="example" width="500"/><br />
<br />

Also, all this blog has created with responsive design.<br />
<img src="/public/images/ignore/phoneExample.gif" alt="example" width="200" height=350/>
<br /><br />


### 4.- Add Syntax highlighting
Syntax highlighting with Prism React Renderer.

You can add a Sintax highlight code in your articles.

For do this, add the next lines in your MDX file (without /* */):

```
/*
```js
const text = 'Hello world!';

console.log(text);
```  */
```

If you want to customize the palette color, modify this file: `/styles/css/prism-night-owl`.
<br /><br />


## Write your first post ✏️
To write a new post, create a new .mdx file in `/data` directory.

If you would like to add more data to your posts, such as author information or other meta data, add more fields to the front matter in your mdx files and add the field names to the getStaticProps function ubicated in `/pages/articles.js` file.

<a href="https://nextjs-blog-apalacios.netlify.app/articles">Go to the site</a>
