# Resend experimental MCP (on Claude)

How to use: 
- npm install && npm run build 
- on Claude desktop, add below as MCP config
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
