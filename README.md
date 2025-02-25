# Email sending MCP

**DEMO**


https://github.com/user-attachments/assets/8c05cbf0-1664-4b3b-afb1-663b46af3464



**Cursor**

Go to Cursor Settings -> MCP -> Add new MCP server
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
