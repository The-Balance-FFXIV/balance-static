FROM hugomods/hugo:exts
WORKDIR /src

# install node and yarn
RUN apk add --no-cache nodejs yarn

# copy dependency files
COPY package.json yarn.lock ./

# install yarn dependencies
RUN yarn install --non-interactive

# source files
COPY . .

# expose port 1313 for Hugo server and 8081 for CMS proxy server
EXPOSE 1313 8081

# Set environment for CMS proxy server to use current directory as git repo
ENV GIT_REPO_DIRECTORY=/src

# start both Hugo server and CMS proxy server using custom command
CMD ["sh", "-c", "./node_modules/.bin/concurrently --kill-others-on-fail --names static,admin \"hugo server --bind=0.0.0.0 --disableFastRender\" \"./node_modules/.bin/netlify-cms-proxy-server\""]
