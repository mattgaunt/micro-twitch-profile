# `micro-twitch-profiles`

A tiny Node.js microservice to fetch a users twitch channel metadata.

Running this microservice...

## Deployment

Your own `micro-twitch-profiles` is one click away with the power of Now.

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/withspectrum/micro-open-graph)

You can also deploy with a single command from the terminal, assuming you have [`now`](https://now.sh) installed:

```sh
now mattgaunt/micro-twitch-profiles
```

## Usage

To get a twitch user's channel information, simply add that username to the `username` query parameter:

```sh
https://url.now.sh/?username=ninja
```

You will receive the parsed data in the format provided via Twitch's official api for that endpoint.

```JSON
{
    "username": "Ninja"
}
```

Results are cached in memory for 5 minutes, which means calling the same username repeatedly won't have such a huge impact on your server.

## Development

```sh
npm run start:dev
```