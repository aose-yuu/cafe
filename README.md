# cafe CLI

A simple CLI for ordering menu.

## Installation

```bash
npm install
```

## Usage

### jiti

```bash
# using custom jiti `jiti-run.cjs`
npm run jiti order
```

### tsx

```bash
npx tsx ./src/index.ts order
```

### unbuild & node

```bash
npm run unbuild
node dist/index.cjs order
```

### npm pack

```bash
npm pack # generate cafe-1.0.0.tgz

cd [other-directory]
npm install [path/to/cafe-1.0.0.tgz]
```

other-directory/package.json

```json
"scripts": {
    "cafe": "cafe"
}
```

```bash
npm run cafe order
```
