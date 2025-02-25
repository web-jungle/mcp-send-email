# Email sending MCP 💌

This is a simple MCP server that sends emails using Resend's API. Why? Now you can let Cursor or Claude Desktop compose emails for you and send it right away without having to copy and paste the email content.

Built with: 
- [Resend](https://resend.com/)
- [Anthropic MCP](https://docs.anthropic.com/en/docs/agents-and-tools/mcp)
- [Cursor](https://cursor.so/)

**DEMO**

https://github.com/user-attachments/assets/8c05cbf0-1664-4b3b-afb1-663b46af3464

**Cursor**

Clone this project locally, run `npm install`, `npm run build` (you should now see a /build/index.js generated - this is the MCP server script!)

Then go to Cursor Settings -> MCP -> Add new MCP server

- Name = [choose your own name]
- Type = command
- Command: `node ABSOLUTE+PATH_TO_MCP_SERVER/build/index.js --key=YOUR_RESEND_API_KEY`

You can get Resend API key here: https://resend.com/

**Claude desktop**

Add the following MCP config

```
{
  "mcpServers": {
    "resend": {
      "command": "node",
      "args": ["ABSOLUTE_PATH_TO_MCP_SERVER/build/index.js"],
      "env": {
        "RESEND_API_TOKEN": [YOUR_API_TOKEN]
      }
    }
  }
}
```

**Develop**
`npm install`
`npm run build`
