# kamp.us Bülten

A newsletter subscription service for kamp.us Bülten, built with Cloudflare Workers.

## Features

- Responsive newsletter subscription page
- Email validation
- Mailchimp integration for email management

## Development

### Prerequisites

- Node.js (v16 or later)
- pnpm

### Setup

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

3. Update the `wrangler.jsonc` file with your Mailchimp configuration:

```jsonc
"vars": {
  "MAILCHIMP_USER_ID": "your-mailchimp-user-id",
  "MAILCHIMP_LIST_ID": "your-mailchimp-list-id",
  "MAILCHIMP_DATACENTER": "your-mailchimp-datacenter"
}
```

### Development Server

Start the development server:

```bash
pnpm dev
```

This will start a local development server at http://localhost:8787.

### Deployment

Deploy to Cloudflare Workers:

```bash
pnpm deploy
```

## Customization

### Koala Image

To add the Koala image:

1. Replace the placeholder in the HTML template with the actual image
2. Update the CSS styling as needed

### Mailchimp Integration

The service uses Mailchimp's API to subscribe users to your mailing list. You need to provide the following information in the `wrangler.jsonc` file:

- `MAILCHIMP_USER_ID`: Your Mailchimp account ID
- `MAILCHIMP_LIST_ID`: The ID of the mailing list you want to subscribe users to
- `MAILCHIMP_DATACENTER`: Your Mailchimp data center (e.g., us8, us9, etc.)

## License

This project is licensed under the MIT License - see the LICENSE file for details. 