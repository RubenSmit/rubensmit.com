// @flow

import * as React from "react";
import Head from "react-helmet";
import { Router, Route, browserHistory, Link } from "react-router";
import {
  createApp,
  renderApp,
  withPhenomicApi,
  query,
  BodyRenderer,
  textRenderer
} from "@phenomic/preset-react-app/lib/client";

const Home = ({ isLoading, studyProjects, devProjects, hobbyProjects }) => (
  <Layout>
    <Head>
      <title>Hello world</title>
      <meta name="description" content="Everything is awesome!" />
    </Head>
    <header>
      <div id="carousel">
        <div class="carousel-video">
          <video width="1920px" height="100%" poster="/img/background-home.jpg" autoplay loop>
            <source src="vid/background-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="carousel-overlay">
          <div class="carousel-overlay-container">
            <h1 class="carousel-overlay-title">Ruben Smit</h1>
            <p class="carousel-overlay-subtitle">Student HBO-ICT en Web Developer</p>
          </div>
        </div>
      </div>
    </header>
    {isLoading && "Loading..."}
    {!isLoading && (
      <article id="cards">

        <section id="study">
          <div class="row justify-content-center section-header bg-light">
            <div class="col-md-8 col-sm-10">
              <h2 class="section-header-title">Student HBO-ICT</h2>
              <p class="section-header-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, nunc eu efficitur commodo, mi tortor viverra purus, quis elementum metus augue elementum nisi. Fusce convallis nisi justo, nec volutpat purus faucibus vehicula. Vestibulum quis hendrerit augue. Fusce imperdiet rhoncus ex, ornare bibendum orci maximus feugiat. Vivamus egestas nibh sed aliquam mollis. In ipsum velit, gravida nec rutrum eget, mollis cursus tortor. In hac habitasse platea dictumst.
              </p>
            </div>
          </div>
          <div class="row justify-content-center">
            {studyProjects &&
              studyProjects.node &&
              studyProjects.node.list &&
              studyProjects.node.list.map(project => (
              <div class="col-md-4 col-sm-10">
                <aside class="card" key={project.id}>
                  <img class="card-img-top" src={project.image || "./img/background-home.jpg"} alt="Card image cap"/>
                  <div class="card-body">
                    <h3 class="card-title">{project.title}</h3>
                    <p class="card-text">{project.description}</p>
                    <Link to={`/project/${project.id}/`} class="btn btn-primary">Lees meer</Link>
                  </div>
                </aside>
              </div>
              ))}
          </div>
          <div class="row justify-content-center section-footer">
            <div class="col-md-8 col-sm-10">
              <Link to={`/project/`} class="btn btn-primary btn-lg float-right">Meer studie projecten</Link>
            </div>
          </div>
        </section>

        <section id="dev">
          <div class="row justify-content-center section-header bg-light">
            <div class="col-md-8 col-sm-10">
              <h2 class="section-header-title">Developer</h2>
              <p class="section-header-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, nunc eu efficitur commodo, mi tortor viverra purus, quis elementum metus augue elementum nisi. Fusce convallis nisi justo, nec volutpat purus faucibus vehicula. Vestibulum quis hendrerit augue. Fusce imperdiet rhoncus ex, ornare bibendum orci maximus feugiat. Vivamus egestas nibh sed aliquam mollis. In ipsum velit, gravida nec rutrum eget, mollis cursus tortor. In hac habitasse platea dictumst.
              </p>
            </div>
          </div>
          <div class="row justify-content-center">
            {devProjects &&
              devProjects.node &&
              devProjects.node.list &&
              devProjects.node.list.map(project => (
              <div class="col-md-4 col-sm-10">
                <aside class="card" key={project.id}>
                  <img class="card-img-top" src={project.image || "./img/background-home.jpg"} alt="Card image cap"/>
                  <div class="card-body">
                    <h3 class="card-title">{project.title}</h3>
                    <p class="card-text">{project.description}</p>
                    <Link to={`/project/${project.id}/`} class="btn btn-primary">Lees meer</Link>
                  </div>
                </aside>
              </div>
              ))}
          </div>
          <div class="row justify-content-center section-footer">
            <div class="col-md-8 col-sm-10">
            <Link to={`/project/`} class="btn btn-primary btn-lg float-right">Meer development projecten</Link>
            </div>
          </div>
        </section>

        <section id="hobby">
          <div class="row justify-content-center section-header bg-light">
            <div class="col-md-8 col-sm-10">
              <h2 class="section-header-title">Hobby</h2>
              <p class="section-header-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, nunc eu efficitur commodo, mi tortor viverra purus, quis elementum metus augue elementum nisi. Fusce convallis nisi justo, nec volutpat purus faucibus vehicula. Vestibulum quis hendrerit augue. Fusce imperdiet rhoncus ex, ornare bibendum orci maximus feugiat. Vivamus egestas nibh sed aliquam mollis. In ipsum velit, gravida nec rutrum eget, mollis cursus tortor. In hac habitasse platea dictumst.
              </p>
            </div>
          </div>
          <div class="row justify-content-center">
            {hobbyProjects &&
              hobbyProjects.node &&
              hobbyProjects.node.list &&
              hobbyProjects.node.list.map(project => (
              <div class="col-md-4 col-sm-10">
                <aside class="card" key={project.id}>
                  <img class="card-img-top" src={project.image || "./img/background-home.jpg"} alt="Card image cap"/>
                  <div class="card-body">
                    <h3 class="card-title">{project.title}</h3>
                    <p class="card-text">{project.description}</p>
                    <Link to={`/project/${project.id}/`} class="btn btn-primary">Lees meer</Link>
                  </div>
                </aside>
              </div>
              ))}
          </div>
          <div class="row justify-content-center section-footer">
            <div class="col-md-8 col-sm-10">
            <Link to={`/project/`} class="btn btn-primary btn-lg float-right">Meer hobby projecten</Link>
            </div>
          </div>
        </section>

      </article>
    )}
  </Layout>
);

const HomeContainer = withPhenomicApi(Home, props => ({
  studyProjects: query({
    path: "content/projects",
    limit: 2,
    by: "type",
    value: "study",
    sort: "date"
  }),
  devProjects: query({
    path: "content/projects",
    limit: 2,
    by: "type",
    value: "developer",
    sort: "date"
  }),
  hobbyProjects: query({
    path: "content/projects",
    limit: 2,
    by: "type",
    value: "hobby",
    sort: "date"
  })
}));

const ProjectLayout = ({ title, body }) => (
  <article>
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={textRenderer(body).slice(0, 150) + "…"}
      />
    </Head>
    <h1>{title}</h1>
    <BodyRenderer>{body}</BodyRenderer>
  </article>
);

const Project = ({ hasError, isLoading, page }) => {
  if (hasError) {
    return <PageError error={page.error} />;
  }

  return (
    <Layout>
      {isLoading && "Loading..."}
      {!isLoading && page.node && <ProjectLayout {...page.node} />}
      <div>
        <Link to="/">Go to home</Link>
      </div>
    </Layout>
  );
};

const ProjectContainer = withPhenomicApi(Project, props => ({
  page: query({ path: "content/projects", id: props.params.splat })
}));

const PageError = ({ error }) => {
  const status = (error && error.status) || 404;
  const message = error && status !== 404 ? error.statusText : "Page not found";

  return (
    <div>
      <Head>
        <title>{message}</title>
      </Head>
      <h1>{message}</h1>
    </div>
  );
};

const Layout = ({ children }) => (
  <div>
    <Head>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="./css/bootstrap.css" />
      <link rel="stylesheet" href="./css/bootstrap-grid.min.css" />
      <link rel="stylesheet" href="./css/bootstrap-reboot.min.css" />
      <link rel="stylesheet" href="./css/style.css" />
      <script src="./js/jquery-3.3.1.js"></script>
      <script src="./js/bootstrap.js"></script>
    </Head>

    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Ruben Smit</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Navigatie uitklappen">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(huidige pagina)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Projecten</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>

    <header>{/* ... */}</header>
    <div>{children}</div>

    <footer class="bg-primary text-white">

      <div class="row justify-content-center section-header">
        <div class="col-12 col-sm-10 col-md-8 footer-links">
          <h4 class="footer-links-title">Links</h4>
          <ul class="footer-link-list">
            <li>
              <a href="https://www.linkedin.com/in/ruben-smit-826b4365/" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/RubenSmit" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCJHpdsz1iLavPpSxngjwKxQ" target="_blank">
                Youtube
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ruben_a_smit/" target="_blank">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="row justify-content-center section-header">
        <div class="col-12">
          	<p class="footer-text text-center">&copy; Ruben Smit - 2018</p>
        </div>
      </div>

    </footer>

  </div>
);

const routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={HomeContainer} />
    <Route path="/after/:after" component={HomeContainer} />
    <Route path="/project/*" component={ProjectContainer} />
    <Route path="*" component={PageError} />
  </Router>
);

export default createApp(routes);

if (module.hot) {
  module.hot.accept(() => renderApp(routes));
}
