# gcloud-cloudfunctions-site-header-size

Node JS script to check a URLs header length

## Usage

You can run locally by running `npm run start`.

You can pass the data using curl using the following:

```shell
curl -X POST http://localhost:8111 \\n     -H "Content-Type: application/json" \\n     -H "Accept: application/json" \\n     -d '{"url":"https://sozodesign.co.uk"}'
```

## Test Data

```json
{
    "url": "https://sozodesign.co.uk"
}
```

## Return Result

```json
{
    "url": "https://sozodesign.co.uk",
    "headerLength": 1254,
    "headerLengthKilobytes": "1.22",
    "timestamp": "2023-12-13T21:05:22.828Z"
}
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/sozo-design/gcloud-cloudfunctions-site-header-size/tags) or [CHANGELOG.md](./CHANGELOG.md).
