# Architecture

Micro-frontend architecture is a modular approach to front-end development that breaks down a web application into smaller, independent parts. Here are some of the popular approaches to implementing micro-frontend architecture:

### Module Federation

Module Federation makes sharing code and dependencies between different code bases easier. This architecture loads the code dynamically at runtime to reduce the frequency of code duplication. Module federation works by allowing one application to expose certain modules or components as "remotes", which can be consumed by other applications as if they were part of their own codebase. This enables different micro frontends to share functionality and resources, such as stylesheets, templates, and scripts, without having to copy and paste code between them.

Advantages

- **Increased Scalability**: With Module Federation, it is easier to scale front-end development across multiple teams, as they can work independently and share modules with each other as needed.
- **Improved Reusability**: Module Federation promotes code reuse across different applications, reducing code duplication and making it easier to maintain and update front-end modules.
- **Enhanced Flexibility**: Module Federation provides the ability to create a modular architecture that can be composed into different applications, making it easier to adapt to changing business needs and requirements.
- **Improved Performance**: By dynamically loading only the necessary modules, Module Federation can help improve the performance of a front-end application.

Disadvantages:

- **Increased Complexity**: Implementing Module Federation can add complexity to the front-end development process, as teams need to coordinate and manage the shared modules.
- **Framework Dependent**: When using module federation with Angular, React, or Vue JS frameworks, it’s important to note that each module must be built using the same framework. This is because module federation relies on the ability to share code and components between different modules, and the code and components must be written in a way that is compatible with the chosen framework. This can be a limitation for teams that are using different frameworks within the same application.
- **Requires the same version of dependencies across all MFEs**: One of the main disadvantages of module federation is that it requires the same version of dependencies across all micro frontends. This can be limiting, as it may be difficult to ensure that all micro frontends are using the same version of a particular dependency, especially if they are developed by different teams or maintained by different organizations.

### Single-spa

Single-spa is a popular framework for implementing micro-frontends that enables developers to build front-end applications using a collection of small, self-contained applications or "micro-frontends." Each micro-frontend is developed, tested, and deployed independently and can be integrated into a larger application using the Single-spa framework. Single-spa makes it easy to combine micro-frontends developed with different frameworks or technologies into a single application.

Advantages

- **Increased Flexibility**: Single-spa allows you to build independent micro-frontends using different frameworks and technologies, making it easier to adapt to different business requirements and changing needs.
- **Improved Reusability**: Single-spa promotes code reuse and modularity across different micro-frontends, reducing code duplication and making it easier to maintain and update front-end modules.
- **Improved Performance**: Single-spa allows for lazy loading of micro-frontends, improving the performance of the overall application by reducing the initial load time.
- **Framework Agnostic**: Single-spa allows us to club multiple micro-frontends built using different frameworks like Angular, React and Vue JS into a single page.

Disadvantages:

- **Increased Complexity**: Single SPA introduces a lot of complexity to your application, as it requires you to manage the lifecycle of multiple micro frontends and handle communication between them. This can be difficult to debug and maintain, especially for large and complex applications.
- **Potential Performance Overhead**: While lazy loading can improve application performance, it may also introduce additional overhead as it needs to load and unload multiple micro frontends dynamically. This can lead to longer load times and a less smooth user experience.
- **Limited Customizability**: Single SPA has a set of conventions that you must follow to create your micro frontends. This can be limiting in cases where you need to customize the library to fit your needs.
- **Framework Dependency**: Depending on a framework has its own disadvantages. It will require changes to the code and consistent updates to the framework. As usual, when the framework is old or deprecated, you will need to re-factor and re-build the entire site to follow the latest technology.
- **Increased Learning Curve**: Single-spa requires learning a new framework and development paradigm, which can be a barrier to entry for developers who are not familiar with it.

### Web Components

Web Components is a set of standards for building reusable UI components that can be shared and used across different web applications. Web Components are designed to work with any front-end framework and can be implemented using HTML, CSS, and JavaScript. They offer a way to encapsulate functionality and style within a single component, making it easier to maintain and update.

Advantages

- **Increased Flexibility**: Web Components are framework-agnostic, meaning they can be used with any front-end framework or technology, making it easier to adapt to different business requirements and changing needs.
- **Improved Reusability**: Web Components promote code reuse and modularity across different micro-frontends, reducing code duplication and making it easier to maintain and update front-end modules.
- **Framework Interoperability**: Web components created in different frameworks like Angular, React and Vue Js can be integrated into a single host as they are designed to be interoperable and reusable across different frameworks and platforms.
- **Ease of Testing**: Web Components provide a standardized testing interface, making it easier to test individual micro-frontends and the overall application.

Disadvantages:

- **Potential Performance Overhead**: While Web Components are optimized for performance, they may introduce additional overhead as all MFEs need to load and manage all the required modules independently.
- **Increased Learning Curve**: Web Components require learning a new development paradigm, which can be a barrier to entry for developers who are not familiar with it.
- **Potential routing problem**: Web components are designed to be self-contained and independent of the surrounding application. This can make it challenging to implement routing between different web components in a way that is intuitive and seamless for the user.

### iFrame

iFrame is an HTML tag that allows developers to embed an HTML document within another HTML document. In the context of micro-frontends, iFrame can be used to embed different micro-frontends within a single page. Each micro-frontend can be developed, tested, and deployed independently and can communicate with the container application using cross-document messaging.

Overall, the choice of micro-frontend architecture will depend on the specific needs and requirements of the project. Each approach has its own advantages and disadvantages, and developers should carefully evaluate each one to determine the best fit for their application.

Advantages

- **Increased Isolation**: iFrames provide a high degree of isolation between different micro-frontends, reducing the risk of conflicts between different modules.
- **Improved Security**: iFrames provide a sandboxed environment for executing micro-frontends, reducing the risk of security vulnerabilities and attacks.
- **Browser Compatibility**: iFrames are supported by all modern browsers, ensuring maximum compatibility for the resulting application.
- **Independent Development**: iFrames allow for independent development of different micro-frontends, reducing the need for tightly coupled dependencies and simplifying the front-end development process.

Disadvantages

- **Performance Overhead**: iFrames can introduce additional performance overhead due to the need to load and manage different frames, potentially slowing down the overall application.
- **Confusing user experience**: When an iFrame is embedded in a page and the content inside the iFrame is longer than the height of the iFrame, a scrollbar may appear inside the iFrame itself, but also outside of the iFrame, on the parent page. This can lead to a confusing user experience, as users may not be sure which scrollbar to use to scroll through the content. Fixing this may not be straightforward, and may introduce additional complexity to the front-end development process.
- **Limited Communication**: Communication between different micro-frontends in iFrames can be challenging and requires careful coordination and management.
- **Limited Customizability**: iFrames provide a limited degree of customizability and may not be suitable for complex or highly customized applications.
