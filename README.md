# no u

"no u" is an action that will close any pull requests or issues opened against a repository.

## Usage

Add `joshmgross/no-u` to any workflow that triggers off of a pull request or issue opening:

```yaml
name: no u
on:
  issues:
    types: [opened, reopened]
  pull_request:
    types: [opened, reopened]

jobs:
  main:
    runs-on: ubuntu-latest
    permissions:
      issues: write

    steps:
      - uses: joshmgross/no-u@main
```

## Why?

https://www.merriam-webster.com/dictionary/no%20u

## Contributions

Issues and pull requests are welcome, but they may get closed.
