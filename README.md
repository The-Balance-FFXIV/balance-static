# balance-static

## Testing with local Hugo server

Make sure you have [hugo extended](https://gohugo.io/getting-started/installing/) installed, either drop `hugo.exe` in the root dir or add it to your PATH.

```sh
# Clone the repository
git clone --recursive https://github.com/The-Balance-FFXIV/balance-static.git

# Navigate into it
cd ./glam/

# Install project dependencies and dependencies. If you prefer to not edit PATH, you can install globally.
export PATH=$PATH:node_modules/.bin
yarn install

# Run the server
hugo server --disableFastRender

# Server starts by default on `localhost:1313`
```

## Testing with Docker

### Build and run with Docker Compose (recommended)

Make sure you have either Docker Desktop running or setup WSL2 and install Docker Engine and Docker Compose in order to run this.

```sh
# navigate to a folder that you want the repository in, and clone the repository
# it is very important that you use --recursive in order to download the glam theme files
git clone --recursive https://github.com/The-Balance-FFXIV/balance-static.git

# navigate into the repository after cloning it
cd balance-static

# build and automatically start/update the site preview
docker-compose up --watch

# site builds on localhost:1313 for previewing
```
