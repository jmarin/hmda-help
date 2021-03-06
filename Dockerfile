FROM node:8.11.4-alpine as build-stage
WORKDIR /usr/src/app

# install build dependencies
COPY package.json yarn.lock ./
RUN yarn

# create react app needs src and public directories
COPY src ./src
COPY public ./public

# set default to production API
ARG V2_API=https://ffiec-api.cfpb.gov/v2/public
RUN REACT_APP_V2_API=${V2_API} yarn build

FROM nginx:1.15.1-alpine
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]