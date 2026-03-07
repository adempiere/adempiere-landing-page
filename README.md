# ADempiere Stanalone Page

[![Original Author: Mr.Hope](https://img.shields.io/badge/Author-Mr.Hope-blue.svg?style=for-the-badge)](https://mrhope.site)
[![License](https://img.shields.io/github/license/mister-hope/mister-hope.github.io?style=for-the-badge)](https://github.com/Mister-Hope/Mister-Hope.github.io/blob/master/LICENSE)
[Maintainer](https://github.com/yamelsenih)

A community page [VuePress](https://v2.vuepress.vuejs.org/) and [VuePress Theme Hope](https://vuepress-theme-hope.github.io/v2/) forked from [Mister-Hope (Thanks)](https://github.com/Mister-Hope/Mister-Hope.github.io)

The collection includes a number of books covering the main topics of:

- Functional Guide (**Generated automatically from ADempiere**)

---

## 🎨 Customization Guide

This landing page can be customized for your organization's needs. Here's how:

### 1. Content Customization

**Main content files are located in:**
```
src/
├── .vuepress/          # VuePress configuration
│   ├── config.ts       # Site configuration (title, description, etc.)
│   ├── navbar/         # Navigation bar items
│   └── sidebar/        # Sidebar configuration
├── README.md           # Home page content
└── [other-pages]/      # Additional pages
```

**To customize:**
- Edit `src/.vuepress/config.ts` to change site title, logo, and metadata
- Modify `src/README.md` to change the home page content
- Update navigation in `src/.vuepress/navbar/`
- Adjust sidebar in `src/.vuepress/sidebar/`

### 2. Branding

**Change logo and favicon:**
- Replace logo: `src/.vuepress/public/logo.png`
- Replace favicon: `src/.vuepress/public/favicon.ico`

**Update theme colors:**
- Edit `src/.vuepress/styles/palette.scss` (if exists)
- Or configure theme colors in `src/.vuepress/config.ts`

### 3. Docker Image Customization

**After making changes, rebuild:**

```bash
# 1. Install dependencies
pnpm install --frozen-lockfile

# 2. Build static files
pnpm run build:vite

# 3. Build your custom Docker image
docker build -t your-org/adempiere-landing-page:latest \
  -f ./build-docker/production-alpine.Dockerfile .

# 4. Test locally
docker run -p 80:80 your-org/adempiere-landing-page:latest
```

### 4. Publishing Your Custom Image

**Option A: GitHub Container Registry (Recommended)**
1. Fork this repository to your organization
2. Update `.github/workflows/publish.yaml`
3. Create a release to trigger automatic build
4. Image will be published to `ghcr.io/your-org/adempiere-landing-page`

**Option B: Docker Hub**
1. Update workflow to use Docker Hub credentials
2. Configure `DOCKER_USERNAME` and `DOCKER_TOKEN` secrets
3. Create release to trigger build

### 5. Integration with ADempiere UI Gateway

**Update your gateway configuration:**

```bash
# In adempiere-ui-gateway/docker-compose/env_template.env
ADEMPIERE_SITE_IMAGE="your-org/adempiere-landing-page:your-version"
```

---

# More References

- The official page is in: http://adempiere.io
- The official Wiki is in: http://docs.adempiere.io
- If you need report a bug see: https://github.com/adempiere/adempiere-site/issues

![Discord](https://img.shields.io/discord/876231677209374750)

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/adempiere/adempiere?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Running the docs
For run all doc just run `yarn dev:vite`, a result after run can be:

```Shell
yarn run v1.22.19
$ vuepress-vite dev src
info Initializing VuePress and preparing data...

  vite v2.9.12 dev server running at:

  > Local:    http://localhost:8080/
  > Network:  http://192.168.5.221:8080/
  > Network:  http://172.17.0.1:8080/
  > Network:  http://172.21.0.1:8080/
  > Network:  http://172.23.0.1:8080/
  > Network:  http://172.22.0.1:8080/
```

## Run docker container:

### Minimal Docker Requirements
To use this Docker image you must have your Docker engine version greater than or equal to 3.0.


### Run with Docker-Compose
Or easy run container using `docker-compose` with follow command:
```shell
docker compose -f build-docker/docker-compose.yaml up
```

### Run container container:

Download docker image:

```shell
docker pull openls/adempiere-landing-page
```

Run the docker container
```shell
docker run -it -d \
	--name adempiere-landing-page \
	-p 80:80 \
	-e VUE_HOST="http://localhost:9526" \
	-e ZK_HOST="http://localhost:8888" \
	openls/adempiere-landing-page
```

### Build docker image (for development only):
First compile output files.
``` bash
# Install packages.
pnpm install --frozen-lockfile

# build dist files
pnpm run build:vite
```

Build docker image (for development only):
```shell
docker build -t openls/adempiere-landing-page:dev -f ./build-docker/development.Dockerfile .
```
