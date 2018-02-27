# Start

Run with REDIS_CONNECTION environment variable:

```
docker run --link redis --rm -ti -p 4567:4567 -e "REDIS_CONNECTION=redis://redis:6379" ramirost/arena
```