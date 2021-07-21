# RSwag Schema Generator

Generate RSwag schema from JSON input

Input json

```json
{
  "id": 1,
  "name": "The death of John Doe",
  "publisher": null,
  "year": 2021,
  "author": {
    "name": "John Doe",
    "pseudonym": "Jane Doe"
  },
  "genres": ["mystery", "thriller"],
  "series": [
    {
      "id": 2,
      "name": "The biography of John Doe"
    }
  ]
}
```

Output schema

```rb
    type: :object,
    properties: {
        id: {
            type: :number,
            description: ""
        },
        name: {
            type: :string,
            description: ""
        },
        publisher: {
            type: :string,
            description: "",
            'x-nullable': true
        },
        year: {
            type: :number,
            description: ""
        },
        author: {
            type: :object,
            properties: {
                name: {
                    type: :string,
                    description: ""
                },
                pseudonym: {
                    type: :string,
                    description: ""
                }
            },
            required: %w[]
        },
        genres: {
            type: :array,
            items: {
                type: :string,
                description: ""
            }
        },
        series: {
            type: :array,
            items: {
                type: :object,
                properties: {
                    id: {
                        type: :number,
                        description: ""
                    },
                    name: {
                        type: :string,
                        description: ""
                    }
                },
                required: %w[]
            }
        }
    },
    required: %w[]
```

## Table of Contents

- [Usage](#usage)
- [Maintainers](#maintainers)

## Usage

1. Clone this repo

1. Install dependancies

   ```
   yarn
   ```

1. Run app

   ```
   yarn dev
   ```

   or if you have vercel-cli installed,

   ```
   vercel dev
   ```
