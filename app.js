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
      <title>Ruben Smit</title>
      <meta name="description" content="Ruben Smit is een Student HBO-ICT en Webdeveloper uit Enschede." />
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

const Project = ({ hasError, isLoading, page }) => {
  if (hasError) {
    return <PageError error={page.error} />;
  }

  return (
    <Layout>
      <Head>
        <title>{page.title}</title>
        <meta
          name="description"
          content={page.description}
        />
      </Head>
      {isLoading && "Loading..."}
      {!isLoading && page.node && (
        <article>
          <header class="article-header">
            <div id="carousel">
              <div class="carousel-image">
                <img src={page.node.image || "/img/background-home.jpg"} alt="Header image"/>
              </div>
              <div class="carousel-header row justify-content-center">
                <div class="carousel-header-container col-12 col-sm-10 col-md-8">
                  <h1 class="carousel-header-title">{page.node.title}</h1>
                  {page.node.subtitle && (
                    <p class="carousel-header-subtitle">{page.node.subtitle}</p>
                  )}
                </div>
              </div>
            </div>
            <div class="row justify-content-center article-header-paragraph">
              <div class="col-md-8 col-sm-10">
                <p class="article-header-text">{page.node.description}</p>
              </div>
            </div>
          </header>
          <section class="article-section row justify-content-center">
            <div class="col-md-8 col-sm-10">
              <BodyRenderer>{page.node.body}</BodyRenderer>
            </div>
          </section>
        </article>
      )}
    </Layout>
  );
};

const ProjectContainer = withPhenomicApi(Project, props => ({
  page: query({ path: "content/projects", id: props.params.splat })
}));

const Projects = ({ hasError, isLoading, projects }) => {
  if (hasError) {
    return <PageError error={projects.error} />;
  }

  return (
    <Layout>
      <Head>
        <title>Ruben Smit | Projecten</title>
        <meta
          name="description"
          content="Alle projecten van Ruben Smit"
        />
      </Head>
      {isLoading && "Loading..."}
      {!isLoading && (
        <article>
          <header class="article-header">
            <div id="carousel">
              <div class="carousel-image">
                <img src="/img/background-home.jpg" alt="Header image"/>
              </div>
              <div class="carousel-header row justify-content-center">
                <div class="carousel-header-container col-12 col-sm-10 col-md-8">
                  <h1 class="carousel-header-title">Projecten</h1>
                </div>
              </div>
            </div>
          </header>
          <section class="projects-section">
            <div class="row justify-content-center">
              {projects &&
                projects.node &&
                projects.node.list &&
                projects.node.list.map(project => (
                  <div class="col-md-4 col-sm-10">
                    <aside class="card" key={project.id}>
                      <img class="card-img-top" src={project.image || "/img/background-home.jpg"} alt={project.title}/>
                      <div class="card-body">
                        <h3 class="card-title">{project.title}</h3>
                        <p class="card-text">{project.description}</p>
                        <Link to={`/project/${project.id}/`} class="btn btn-primary">Lees meer</Link>
                      </div>
                    </aside>
                  </div>
                ))}
              </div>
          </section>
        </article>
      )}
    </Layout>
  );
};

const ProjectsContainer = withPhenomicApi(Projects, props => ({
  projects: query({
    path: "content/projects",
    sort: "date"
  })
}));

const PageError = ({ error }) => {
  const status = (error && error.status) || 404;
  const message = error && status !== 404 ? error.statusText : "Page not found";

  return (
    <Layout>
      <Head>
        <title>{message}</title>
      </Head>
      <article>
        <header class="article-header">
          <div id="carousel">
            <div class="carousel-image">
              <img src="/img/background-home.jpg" alt="Header image"/>
            </div>
            <div class="carousel-header row justify-content-center">
              <div class="carousel-header-container col-12 col-sm-10 col-md-8">
                <h1 class="carousel-header-title">{status}</h1>
                <p class="carousel-header-subtitle">{message}</p>
              </div>
            </div>
          </div>
          <div class="row justify-content-center article-header-paragraph">
            <div class="col-md-8 col-sm-10">
              <p class="article-header-text">Dat is een error. Wat jammer weer!</p>
              <Link to={`/`} class="btn btn-primary btn-lg float-right">Terug naar Home</Link>
            </div>
          </div>
        </header>
      </article>
    </Layout>
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
          <li class="nav-item">
            <Link to="/" class="nav-link" activeClassName="is-active">Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/project/" class="nav-link" activeClassName="is-active">Projecten</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" activeClassName="is-active">Contact</a>
          </li>
        </ul>
      </div>
    </nav>

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
    <Route path="/project/" component={ProjectsContainer} />
    <Route path="/project/*" component={ProjectContainer} />
    <Route path="*" component={PageError} />
  </Router>
);

export default createApp(routes);

if (module.hot) {
  module.hot.accept(() => renderApp(routes));
}
