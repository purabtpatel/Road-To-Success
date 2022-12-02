# README

Install dependencies:
```
yarn install
```


Generate SESSION_SECRET:
```
yarn rw g secret
```


Configure .env file fields:
> SESSION_SECRET='\<replace with session_secret from above step\>'<br>
> CLIENT_ID='\<replace with Google Cloud project credential\>'<br>
> CLIENT_SECRET='\<replace with Google Cloud project credential\>'<br>
> REDIRECT_URL='http://localhost:8910/authcallback'


Run:
```
yarn rw dev
```

For ParticlesJs

yarn add react-particles
yarn add tsparticles
yarn add tsparticles-engine

