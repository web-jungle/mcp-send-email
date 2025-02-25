import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { Resend } from "resend";
import minimist from "minimist";

// Parse command line arguments
const argv = minimist(process.argv.slice(2));

// Get API key from command line argument or fall back to environment variable
const apiKey = argv.key || process.env.RESEND_API_KEY;

if (!apiKey) {
  console.error(
    "No API key provided. Please set RESEND_API_KEY environment variable or use --key argument"
  );
  process.exit(1);
}

const resend = new Resend(apiKey);

// Create server instance
const server = new McpServer({
  name: "email-sending-service",
  version: "1.0.0",
});

server.tool(
  "send-email",
  "Send an email using Resend",
  {
    to: z.string().email().describe("Recipient email address"),
    subject: z.string().describe("Email subject line"),
    content: z.string().describe("Plain text email content"),
  },
  async ({ to, subject, content }) => {
    const data = await resend.emails.send({
      from: "me@yoko.dev", // TODO - you should replace this with your own email! Verify domain here on Resend https://resend.com/domains
      to,
      subject,
      text: content,
    });

    return {
      content: [{ type: "text", text: `Email sent successfully! ${data}` }],
    };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Email sending service MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
