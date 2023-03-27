# Deployment and Versioning Options

There are several deployment options available for micro frontends built using web components, regardless of the specific framework used to build them. Here are a few:

1. **Deploy on CDN**: Each micro frontend can be built as a standalone web component using web standards like Custom Elements and Shadow DOM. You can then package each web component as a separate file and deploy it to a CDN or hosting service, where it can be consumed by other applications.

   When serving micro-frontend files directly from a CDN, versioning your files is an important consideration. Versioning your files can help ensure that changes to your micro-frontends are propagated to users and that they don't experience issues due to stale files being served from the CDN cache. Here are a few strategies for versioning micro-frontend files in a CDN:

   a. **Query parameter versioning**: One approach is to use a query parameter to version your micro-frontend files. For example, you might append a query parameter like ?v=1.0.0 to the URLs of your JavaScript and CSS files. When you make changes to your micro-frontend files, you can update the version number to force the CDN to serve the updated files to users.

   b. **Filename versioning**: Another approach is to version your files by including the version number in the filename. For example, you might include the version number in the filename like mfe-element.1.0.0.js. When you make changes to your files, you can update the version number in the filename to force the CDN to serve the updated files to users.

2. **Deploy as a static application**: You can also deploy micro frontend files as a static application, which can be hosted on its own domain or subdomain. This approach allows you to deploy each micro frontend independently and scale them separately based on their usage.

   a. **URL path versioning**: To make it clear which version of a micro frontend a user is accessing, include the version number in the URL. For example, instead of using a URL like `https://myapp.com/mfe-element.js`, use a URL like `https://myapp.com/v1.0/mfe-element.js`.

   b. **Filename versioning**: Another approach is to version your files by including the version number in the filename. For example, you might include the version number in the filename like `mfe-element.1.0.0.js`.

   In addition to including the version number in your static file names or paths, you can use **cache-busting techniques** to ensure that new versions of your files are downloaded by the browser. One common technique is to append a unique query string to the file reference in your HTML, like this:

   ```html
   <link rel="stylesheet" href="styles/mfe-element-styles.css?v=1.0" />
   ```

   This query string will force the browser to download the latest version of the file, even if it has a cached version with the same filename.

3. **Deploy as an NPM package**: If you're using a build tool like Webpack or Rollup to package your web components, you can also package each micro frontend as a separate NPM package and deploy it to a private or public NPM registry. This approach allows you to version and distribute each micro frontend independently.

   For handling versioning we can use **semantic versioning**. Semantic versioning is a widely adopted standard for versioning software components. It uses three numbers separated by periods (e.g., 1.2.3) to indicate major, minor, and patch versions. Major versions indicate major changes that may not be backward compatible, minor versions indicate new features or functionality that are backward compatible, and patch versions indicate bug fixes or small changes that are backward compatible. This can help other developers who consume your micro frontends understand what changes are included in each version.
