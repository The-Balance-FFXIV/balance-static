# balance-static
Rendered guide(s) at your fingertips

## Testing locally

Make sure you have [hugo extended](https://gohugo.io/getting-started/installing/) installed, either drop `hugo.exe` in the root dir or add it to your PATH.

```sh
# Clone the repository
git clone --recursive https://github.com/The-Balance-FFXIV/glam.git

# Navigate into it
cd ./glam/

# Install project dependencies and dependencies. If you prefer to not edit PATH, you can install globally.
export PATH=$PATH:node_modules/.bin
yarn install

# Run the server
hugo server --disableFastRender

# Server starts by default on `localhost:1313`
```
